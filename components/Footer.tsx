'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <h3 className="text-xl font-semibold tracking-[0.15em] mb-4">QUARTER</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Discover and compare premium quarter-zip sweaters from the world finest menswear brands.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-5">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#new" className="text-sm text-gray-400 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="#bestsellers" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="#sale" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="#brands" className="text-sm text-gray-400 hover:text-white transition-colors">
                  All Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-5">About</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-5">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest drops and exclusive deals.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-charcoal-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Quarter. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}