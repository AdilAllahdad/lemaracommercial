'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isListingsDropdownOpen, setIsListingsDropdownOpen] = useState(false);
  const [isLoanDropdownOpen, setIsLoanDropdownOpen] = useState(false);
  
  const menuItems = [
    { 
      label: 'Commercial Loan',
      href: '/commercial-loan',      dropdownItems: [
        { label: 'Commercial Loans', href: '/commercial-loans' },
        { label: 'Construction Financing', href: '/construction-financing' },
        { label: 'USDA Loan', href: '/usda-loan' },
        { label: 'SBA Loans', href: '/sba-loans' },
        { label: 'Solar Financing', href: '/solar-financing' },
        { label: 'Commercial Loan Application', href: '/loan-application' },
        { label: 'Hard Money Loan', href: '/hard-money-loan' },
        { label: 'Loan Calculator', href: '/loan-calculator' },
      ]
    },
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
                <div key={item.label} className="relative group">
                  {item.dropdownItems ? (
                    <div
                      onMouseEnter={() => {
                        if (item.label === 'Commercial Listings') setIsListingsDropdownOpen(true);
                        if (item.label === 'Commercial Loan') setIsLoanDropdownOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.label === 'Commercial Listings') setIsListingsDropdownOpen(false);
                        if (item.label === 'Commercial Loan') setIsLoanDropdownOpen(false);
                      }}
                      className="relative"
                    >
                      <button
                        className="text-blue-900 hover:text-blue-700 px-3 py-2 text-sm font-medium inline-flex items-center"
                        aria-expanded={item.label === 'Commercial Listings' ? isListingsDropdownOpen : isLoanDropdownOpen}
                      >
                        {item.label}
                        <svg
                          className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
                            (item.label === 'Commercial Listings' && isListingsDropdownOpen) ||
                            (item.label === 'Commercial Loan' && isLoanDropdownOpen)
                              ? 'rotate-180'
                              : ''
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {/* Dropdown Panel */}
                      <div
                        className={`${
                          (item.label === 'Commercial Listings' && isListingsDropdownOpen) ||
                          (item.label === 'Commercial Loan' && isLoanDropdownOpen)
                            ? 'opacity-100 visible'
                            : 'opacity-0 invisible'
                        } absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out z-50`}
                      >
                        <div className="py-2 grid grid-cols-1 gap-1">
                          {item.dropdownItems.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 flex items-center transition-colors duration-150"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
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
