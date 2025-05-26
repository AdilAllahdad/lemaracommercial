'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type BlogCardProps = {
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  link: string;
};

export const BlogCard = ({ title, date, category, image, excerpt, link }: BlogCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={link} 
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >      <article className="bg-white rounded-lg overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-[0_15px_60px_rgba(0,0,0,0.3)]">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isHovered ? 'opacity-20' : 'opacity-0'
          }`} />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-red-600">{category}</span>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{excerpt}</p>
          <span className="inline-flex items-center text-red-600 font-medium group-hover:translate-x-2 transition-transform duration-300 mt-auto">
            Read More
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
};
