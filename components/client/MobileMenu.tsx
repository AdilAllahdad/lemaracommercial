'use client';

import { useState } from 'react';
import Link from 'next/link';

interface MenuItem {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export const MobileMenu = ({ isOpen, onClose, menuItems }: MobileMenuProps) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden">
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 z-50 w-64 bg-white dark:bg-gray-900 overflow-y-auto">
        <div className="p-4">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.dropdownItems ? (
                  <div>
                    <button
                      onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-blue-900 hover:text-blue-700 hover:bg-gray-50"
                    >
                      {item.label}
                      <svg
                        className={`ml-2 h-5 w-5 transform ${
                          expandedItem === item.label ? 'rotate-180' : ''
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
                    {expandedItem === item.label && (
                      <div className="ml-4 space-y-1">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            onClick={onClose}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-3 py-2 text-base font-medium text-blue-900 hover:text-blue-700 hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
