import httpx
from typing import List, Dict, Optional
import os
from dotenv import load_dotenv
import re

load_dotenv()

class ProductScraper:
    """Scrape quarter-zip products from various sources"""
    
    def __init__(self):
        self.rapidapi_key = os.getenv("RAPIDAPI_KEY", "")
    
    def extract_price_from_range(self, price_range_list) -> Optional[float]:
        """Extract numeric price from price range strings like ['$68 - $115']"""
        if not price_range_list or not isinstance(price_range_list, list):
            return None
        
        price_str = str(price_range_list[0])
        # Extract first number (lower bound of range)
        match = re.search(r'\$?(\d+(?:,\d{3})*(?:\.\d{2})?)', price_str)
        if match:
            try:
                # Remove commas and convert to float
                return float(match.group(1).replace(',', ''))
            except ValueError:
                pass
        return None
    
    async def search_rapidapi(self, query: str = "mens quarter zip", max_results: int = 50) -> List[Dict]:
        """
        Search using RapidAPI Real-Time Product Search
        """
        products = []
        
        if not self.rapidapi_key:
            print("ERROR: No RapidAPI key found in .env file")
            return []
        
        url = "https://real-time-product-search.p.rapidapi.com/search-v2"
        
        headers = {
            "X-RapidAPI-Key": self.rapidapi_key,
            "X-RapidAPI-Host": "real-time-product-search.p.rapidapi.com"
        }
        
        params = {
            "q": query,
            "country": "us",
            "language": "en",
            "limit": str(max_results),
            "sort_by": "BEST_MATCH"
        }
        
        try:
            async with httpx.AsyncClient(timeout=15.0) as client:
                response = await client.get(url, headers=headers, params=params)
                
                print(f"API Response Status: {response.status_code}")
                
                if response.status_code != 200:
                    print(f"API Error: {response.text}")
                    return []
                
                data = response.json()
                data_obj = data.get("data", {})
                items = data_obj.get("products", [])
                
                print(f"Found {len(items)} items from API for query: '{query}'")
                
                for idx, item in enumerate(items):
                    try:
                        if not isinstance(item, dict):
                            continue
                        
                        # Extract price from typical_price_range
                        price = None
                        if "typical_price_range" in item:
                            price = self.extract_price_from_range(item["typical_price_range"])
                        
                        # Skip if no price found
                        if price is None or price <= 0:
                            print(f"Skipping item {idx}: No valid price")
                            continue
                        
                        # Extract brand from title
                        title = item.get("product_title", "Quarter Zip")
                        brand = "Unknown"
                        
                        if " " in title:
                            potential_brand = title.split()[0]
                            brand = potential_brand
                        
                        attributes = item.get("product_attributes", {})
                        if isinstance(attributes, dict) and "Brand" in attributes:
                            brand = attributes["Brand"]
                        
                        # Get photos
                        photos = item.get("product_photos", [])
                        image_url = photos[0] if photos else "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=500&fit=crop"
                        
                        # Get product URL
                        product_url = item.get("product_page_url", "#")
                        
                        product = {
                            "id": str(item.get("product_id", f"product-{idx}")),
                            "name": title,
                            "brand": brand,
                            "price": price,
                            "originalPrice": None,
                            "material": attributes.get("Material", "Cotton Blend") if isinstance(attributes, dict) else "Cotton Blend",
                            "colors": ["#1a1a1a"],
                            "imageUrl": image_url,
                            "retailer": "Google Shopping",
                            "productUrl": product_url,
                            "isOnSale": False
                        }
                        products.append(product)
                        print(f"✓ {brand} - ${price:.2f} - {title[:40]}")
                        
                    except Exception as e:
                        print(f"Error parsing item {idx}: {e}")
                        continue
                        
        except Exception as e:
            print(f"Error fetching from RapidAPI: {e}")
            import traceback
            traceback.print_exc()
            return []
            
        print(f"Total products extracted: {len(products)}")
        return products
    
    async def search_all(self, query: str = "mens quarter zip", max_results: int = 50) -> List[Dict]:
        """
        Search all sources
        """
        products = await self.search_rapidapi(query, 30)
        return products

# Singleton instance
scraper = ProductScraper()