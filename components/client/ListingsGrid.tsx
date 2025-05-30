'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
// @ts-ignore
import Masonry from 'react-masonry-css';
import { listings, categories } from '@/app/data/listings';

interface Property {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  price: string;
  location: string;
  type: string;
  status: 'ACTIVE' | 'PENDING' | 'SOLD';
  income: {
    grossOperatingIncome: string;
    netOperatingIncome: string;
    capRate: string;
  };
  details: {
    lotSize: string;
    buildArea: string;
    downPayment: string;
  };
  broker: {
    name: string;
    title: string;
    calBre: string;
    avatar: string;
  };
}

export default function ListingsGrid() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<{[key: string]: { income: boolean; details: boolean }}>({});

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSection = (propertyId: string, section: 'income' | 'details') => {
    setExpandedSections(prev => ({
      ...prev,
      [propertyId]: {
        ...prev[propertyId],
        [section]: !prev[propertyId]?.[section]
      }
    }));
  };

  const filteredListings = useMemo(() => {
    return listings.filter(listing => {
      const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          listing.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || listing.type === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const breakpointCols = {
    default: 3,
    1400: 3,
    1100: 2,
    700: 1
  };
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Search Bar */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between max-w-7xl mx-auto">
            <div className="relative w-full md:max-w-xl">
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pr-12 rounded-xl border border-gray-200
                       bg-white/50 backdrop-blur-sm
                       focus:outline-none focus:border-red-900 focus:ring-2 focus:ring-red-200
                       transition-all duration-300 placeholder:text-gray-400"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium
                              transition-all duration-300 hover:scale-105 transform
                              ${selectedCategory === category
                              ? 'bg-red-900 text-white shadow-lg shadow-red-200/50 ring-2 ring-red-900/20'
                              : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-900 border border-gray-200 hover:border-red-200'
                              }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Masonry
          breakpointCols={breakpointCols}
          className="flex w-auto -ml-4"
          columnClassName="pl-4"
        >
          {filteredListings.map((property) => (
            <motion.div
              key={property.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mb-6"
            >
              <div className="group relative bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={property.backgroundImage}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quick Actions */}
                  <div className="absolute bottom-4 right-4 flex gap-2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:text-red-900 hover:bg-white transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:text-red-900 hover:bg-white transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold 
                      ${property.status === 'ACTIVE' ? 'bg-green-500/90' :
                        property.status === 'PENDING' ? 'bg-amber-500/90' : 'bg-gray-500/90'} 
                      text-white backdrop-blur-sm`}>
                      {property.status}
                    </span>
                  </div>

                  {/* Property Type */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 text-white backdrop-blur-sm">
                      {property.type}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-900 transition-colors duration-300 mb-2">
                        {property.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 text-red-900 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {property.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-900">{property.price}</div>
                    </div>
                  </div>

                  {/* Property Details Grid */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-100">
                    <div>
                      <div className="text-sm text-gray-500">Lot Size</div>
                      <div className="font-semibold">{property.details.lotSize || 'N/A'}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Build Area</div>
                      <div className="font-semibold">{property.details.buildArea || 'N/A'}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Down Payment</div>
                      <div className="font-semibold">{property.details.downPayment || 'N/A'}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Gross Income</div>
                      <div className="font-semibold">{property.income.grossOperatingIncome || 'N/A'}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">NOI</div>
                      <div className="font-semibold">{property.income.netOperatingIncome || 'N/A'}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">CAP Rate</div>
                      <div className="font-semibold">{property.income.capRate || 'N/A'}</div>
                    </div>
                  </div>

                  {/* Broker Section */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-offset-2 ring-red-900">
                        <Image
                          src={property.broker.avatar}
                          alt={property.broker.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{property.broker.name}</div>
                        <div className="text-xs text-gray-500">{property.broker.title}</div>
                        <div className="text-xs text-gray-500">Calbre: {property.broker.calBre}</div>
                      </div>
                    </div>
                    <Link
                      href={`/listings/${property.id}`}
                      className="inline-flex items-center px-4 py-2 bg-red-900 text-white text-sm font-medium rounded-lg 
                               hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900 
                               transition-colors duration-300"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>

        {/* No Results State */}
        {filteredListings.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No properties found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or category filters
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
