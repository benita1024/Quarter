'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { mockProducts } from '@/lib/mockData';

export default function Home() {
  const [products] = useState(mockProducts);
  const [activeFilter, setActiveFilter] = useState('all');

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
        return product.material.toLowerCase().includes('performance');
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
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-charcoal-600">
                No products match your filters. Try adjusting your selection.
              </p>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-12 text-center">
            <p className="text-sm text-charcoal-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}