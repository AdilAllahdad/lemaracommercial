'use client';

import Link from 'next/link';

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
};

export const CtaButton = ({ href, children }: CtaButtonProps) => {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center px-8 py-4 
               text-lg font-semibold text-white transition-all duration-300
               overflow-hidden rounded-lg bg-gradient-to-r from-red-600 to-red-500
               hover:from-red-500 hover:to-red-600 transform hover:-translate-y-1
               hover:shadow-lg"
    >
      <span className="relative z-10 flex items-center">
        {children}
        <svg 
          className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-700 to-red-600 
                  transform scale-x-0 group-hover:scale-x-100 transition-transform 
                  duration-300 origin-left">
      </div>
    </Link>
  );
};
