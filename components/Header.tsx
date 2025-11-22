'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-sand-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-semibold tracking-[0.15em] text-charcoal-800">
            QUARTER
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-9">
            <Link 
              href="#new" 
              className="text-sm font-medium tracking-wide text-charcoal-600 hover:text-charcoal-800 transition-colors"
            >
              NEW IN
            </Link>
            <Link 
              href="#brands" 
              className="text-sm font-medium tracking-wide text-charcoal-600 hover:text-charcoal-800 transition-colors"
            >
              BRANDS
            </Link>
            <Link 
              href="#sale" 
              className="text-sm font-medium tracking-wide text-charcoal-600 hover:text-charcoal-800 transition-colors"
            >
              SALE
            </Link>
            <Link 
              href="#about" 
              className="text-sm font-medium tracking-wide text-charcoal-600 hover:text-charcoal-800 transition-colors"
            >
              ABOUT
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}