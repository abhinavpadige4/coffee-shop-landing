import Link from 'next/link';
import { Menu, Coffee, Sun, Moon, MapPin, Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-b-coffee/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Coffee className="h-8 w-8 text-coffee-600" />
              <span className="text-xl font-bold text-coffee-800">Brew Haven</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="#menu" className="text-coffee-600 hover:text-coffee-800 transition-colors">
              Menu
            </Link>
            <Link href="#gallery" className="text-coffee-600 hover:text-coffee-800 transition-colors">
              Gallery
            </Link>
            <Link href="#hours" className="text-coffee-600 hover:text-coffee-800 transition-colors">
              Hours
            </Link>
            <Link href="#contact" className="text-coffee-600 hover:text-coffee-800 transition-colors">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-coffee-600 hover:text-coffee-800">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}