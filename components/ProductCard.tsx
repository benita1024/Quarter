'use client';

import Image from 'next/image';
import { Product } from '@/lib/mockData';
import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-sm overflow-hidden border border-sand-200 transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer">
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-sand-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badge */}
        {product.isOnSale && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            Sale
          </div>
        )}
        
        {/* Material Label */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-medium tracking-wide uppercase text-charcoal-700">
          {product.material}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Brand */}
        <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">
          {product.brand}
        </div>

        {/* Product Name */}
        <h3 className="text-base font-semibold text-charcoal-800 mb-3 line-clamp-2 leading-snug">
          {product.name}
        </h3>

        {/* Price and Colors */}
        <div className="flex justify-between items-center mb-4">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-charcoal-800">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Color Dots */}
          <div className="flex gap-1.5">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-5 h-5 rounded-full border border-sand-300 hover:scale-110 transition-transform cursor-pointer"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Shop Button */}
        <button className="w-full bg-charcoal-800 text-white py-3 text-sm font-semibold tracking-widest uppercase hover:bg-charcoal-900 transition-colors flex items-center justify-center gap-2 group">
          Shop Now
          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}