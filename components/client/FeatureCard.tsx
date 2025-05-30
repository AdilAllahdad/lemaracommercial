'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface FeatureItem {
  title: string;
  description: string;
  backgroundImage: string;
  link: string;
}

const FeatureCard = ({ title, description, backgroundImage, link }: FeatureItem) => (  <div className="bg-white rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.2)] overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_60px_rgba(0,0,0,0.3)] flex flex-col h-full">
    <div className="relative h-48 w-full">      <Image
        src={backgroundImage}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 384px"
        quality={85}
        loading="lazy"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 flex-grow">
        {description}
      </p>
      <Link 
        href={link}
        className="inline-block bg-red-900 text-white px-6 py-2
                 rounded-md font-semibold hover:bg-red-800 
                 transition-all duration-300 text-center"
      >
        Learn More
      </Link>
    </div>
  </div>
);

export default FeatureCard;
