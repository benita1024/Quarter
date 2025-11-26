'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  material: string;
  colors: string[];
  imageUrl: string;
  retailer: string;
  productUrl: string;
  isOnSale: boolean;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  // Fetch products from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/api/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on selected filter
  const filteredProducts = products.filter(product => {
    switch (activeFilter) {
      case 'under-100':
        return product.price < 100;
      case '100-200':
        return product.price >= 100 && product.price <= 200;
      case 'premium':
        return product.price > 200;
      case 'merino':
        return product.material.toLowerCase().includes('merino');
      case 'cotton':
        return product.material.toLowerCase().includes('cotton');
      case 'performance':
        return product.material.toLowerCase().includes('performance') || 
               product.material.toLowerCase().includes('polyester');
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        {/* Filters and Products Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
          <FilterBar onFilterChange={setActiveFilter} />
          
          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <p className="text-lg text-charcoal-600">Loading products...</p>
            </div>
          )}
          
          {/* Products Grid */}
          {!loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* No Results Message */}
          {!loading && filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-charcoal-600">
                No products match your filters. Try adjusting your selection.
              </p>
            </div>
          )}

          {/* Results Count */}
          {!loading && products.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-sm text-charcoal-600">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}