import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">PH</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Pendidik Hebat</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#tentang" className="text-gray-600 hover:text-teal-600 transition-colors">
              Tentang
            </a>
            <a href="#pelatihan" className="text-gray-600 hover:text-teal-600 transition-colors">
              Pelatihan
            </a>
            <a href="#kontak" className="text-gray-600 hover:text-teal-600 transition-colors">
              Kontak
            </a>
            <button className="bg-custom-teal text-white px-6 py-2 rounded-full font-semibold hover:bg-custom-teal-dark transition-all duration-300">
              Hubungi Kami
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#tentang" className="text-gray-600 hover:text-teal-600 transition-colors">
                Tentang
              </a>
              <a href="#pelatihan" className="text-gray-600 hover:text-teal-600 transition-colors">
                Pelatihan
              </a>
              <a href="#kontak" className="text-gray-600 hover:text-teal-600 transition-colors">
                Kontak
              </a>
              <button className="bg-custom-teal text-white px-6 py-3 rounded-full font-semibold hover:bg-custom-teal-dark transition-all duration-300 w-full mt-4">
                Hubungi Kami
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
