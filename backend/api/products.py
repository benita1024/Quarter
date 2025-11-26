from fastapi import APIRouter, Query
from typing import List, Optional
from pydantic import BaseModel
from services.scraper import scraper

router = APIRouter()

class Product(BaseModel):
    id: str
    name: str
    brand: str
    price: float
    originalPrice: Optional[float] = None
    material: str
    colors: List[str]
    imageUrl: str
    retailer: str
    productUrl: str
    isOnSale: bool

@router.get("/products", response_model=List[Product])
async def search_products(
    query: str = Query("mens quarter zip sweater", description="Search query"),
    min_price: Optional[float] = Query(None, description="Minimum price"),
    max_price: Optional[float] = Query(None, description="Maximum price"),
    limit: int = Query(20, description="Max number of results")
):
    """
    Search for quarter-zip products from multiple retailers
    """
    # Get products from scraper
    products = await scraper.search_all(query, max_results=limit)
    
    # Filter by price if specified
    if min_price is not None:
        products = [p for p in products if p["price"] >= min_price]
    if max_price is not None:
        products = [p for p in products if p["price"] <= max_price]
    
    return products