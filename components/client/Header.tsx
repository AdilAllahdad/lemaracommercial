'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isListingsDropdownOpen, setIsListingsDropdownOpen] = useState(false);
  
  const menuItems = [
    { label: 'Commercial Loan', href: '/commercial-loan' },
    { 
      label: 'Commercial Listings',
      href: '/listings',
      dropdownItems: [
        { label: 'Our Listings', href: '/listings' },
      ]
    },
    { label: "Investor's Development Opportunity", href: '/investor-opportunities' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/lemara-logo.png"
                alt="LeMara Commercial"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex flex-1 justify-center ml-16">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdownItems ? (
                    <div
                      onMouseEnter={() => setIsListingsDropdownOpen(true)}
                      onMouseLeave={() => setIsListingsDropdownOpen(false)}
                      className="relative"
                    >
                      <button
                        className="text-blue-900 hover:text-blue-700 px-3 py-2 text-sm font-medium inline-flex items-center"
                        aria-expanded={isListingsDropdownOpen}
                      >
                        {item.label}
                        <svg
                          className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
                            isListingsDropdownOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isListingsDropdownOpen && (
                        <div 
                          className="absolute z-50 left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                          style={{ top: 'calc(100% - 5px)' }}
                        >
                          {/* Add a hidden buffer area to prevent menu from closing */}
                          <div className="h-4 -mt-4" />
                          <div className="py-1">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-blue-900 hover:text-blue-700 px-3 py-2 text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
           
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 p-2"
              aria-label="Search"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 p-2"
              aria-label="Account"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

   <Link
              href="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </Link>

          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          menuItems={menuItems}
        />
      </div>
    </nav>
  );
};

export default Header;
