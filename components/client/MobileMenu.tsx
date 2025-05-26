'use client';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  menuItems: Array<{ label: string; href: string; }>;
};

export const MobileMenu = ({ isOpen, onClose, menuItems }: MobileMenuProps) => {
  return (
    <div
      className={`lg:hidden ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:text-blue-700 hover:bg-gray-50"
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
        
        {/* Mobile Menu Additional Links */}
        <div className="border-t border-gray-200 pt-4 pb-2">
          <div className="flex items-center px-3">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 p-2 inline-flex items-center justify-center"
              aria-label="Search"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="ml-2">Search</span>
            </button>
          </div>
          <div className="flex items-center px-3">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 p-2 inline-flex items-center justify-center"
              aria-label="Account"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="ml-2">Account</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
