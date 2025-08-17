"use client";

import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              Mobilya Store
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Ana Sayfa
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Ürünler
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Hakkımızda
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                İletişim
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Ana menüyü aç</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 mt-2">
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
            >
              Ana Sayfa
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              Ürünler
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              Hakkımızda
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
            >
              İletişim
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
