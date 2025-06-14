'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
// @ts-ignore
import Masonry from 'react-masonry-css';
import { listings, categories } from '@/app/data/listings';

export default function ListingsGrid() {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const filteredAndSortedListings = useMemo(() => {
    let result = listings.filter(listing => {
      const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        listing.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || listing.type === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return result.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, ''));
        case "capRate":
          return parseFloat(b.income.capRate) - parseFloat(a.income.capRate);
        default:
          return 0;
      }
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const breakpointCols = {
    default: 3,
    1400: 3,
    1100: 2,
    700: 1
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Enhanced Search Bar */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between max-w-7xl mx-auto">
            <div className="relative w-full md:max-w-xl group">
              <motion.input
                type="text"
                placeholder="Search by title, description, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pr-12 rounded-xl border border-gray-200
                         bg-white/50 backdrop-blur-sm
                         focus:outline-none focus:border-red-900 focus:ring-2 focus:ring-red-200
                         transition-all duration-300 placeholder:text-gray-400
                         group-hover:shadow-lg"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                animate={{ rotate: searchQuery ? 90 : 0 }}
              >
                <svg
                  className="h-5 w-5 text-gray-400 group-hover:text-red-900 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.div>
            </div>
            
            {/* Enhanced Filter and Sort Controls */}
            <div className="flex flex-wrap gap-4 w-full md:w-auto justify-start md:justify-end items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-xl text-sm font-medium bg-white border border-gray-200
                        hover:border-red-200 focus:border-red-900 focus:ring-2 focus:ring-red-200
                        transition-all duration-300"
              >
                <option value="price">Sort by Price (Low to High)</option>
                <option value="capRate">Sort by CAP Rate (High to Low)</option>
              </select>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium
                              transition-all duration-300 hover:scale-105 transform
                              ${selectedCategory === category
                              ? 'bg-red-900 text-white shadow-lg shadow-red-200/50 ring-2 ring-red-900/20'
                              : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-900 border border-gray-200 hover:border-red-200'
                              }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Enhanced Cards */}
      <div className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {isLoading ? (
            // Optimized Loading Skeleton
            <motion.div
              key="skeleton"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm animate-pulse">
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </motion.div>
          ) : (
            <Masonry
              breakpointCols={breakpointCols}
              className="flex w-auto -ml-4"
              columnClassName="pl-4"
            >
              {filteredAndSortedListings.map((property) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mb-6"
                >
                  <Link href={`/listings/${property.id}`} className="block">
                    <div className="group relative bg-white overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
                      {/* Image Section */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={property.gallery?.[0] || property.backgroundImage}
                          alt={property.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:filter group-hover:brightness-95"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        
                        {/* Status Badge */}
                        <motion.div 
                          className="absolute top-4 right-4"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold 
                            ${property.status === 'ACTIVE' ? 'bg-green-500/90' :
                              property.status === 'PENDING' ? 'bg-amber-500/90' : 'bg-gray-500/90'} 
                            text-white backdrop-blur-sm shadow-lg`}>
                            {property.status}
                          </span>
                        </motion.div>

                        {/* Property Type */}
                        <motion.div 
                          className="absolute top-4 left-4"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 text-white backdrop-blur-sm shadow-lg">
                            {property.type}
                          </span>
                        </motion.div>
                      </div>                      {/* Content Section */}
                      <div className="p-6 space-y-4">
                        {/* Header with Title, Location & Price */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-900 transition-colors duration-300 mb-2 line-clamp-2">
                              {property.title}
                            </h3>
                            <div className="flex items-center text-sm text-gray-500">
                              <svg className="w-4 h-4 text-red-900 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="truncate">{property.location}</span>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-red-900 flex-shrink-0">{property.price}</div>
                        </div>

                        {/* Property Metrics Grid */}
                        <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
                          {/* Income Section */}
                          <div className="space-y-4">
                            <div className="bg-red-50/50 rounded-lg p-3">
                              <div className="text-xs font-medium text-red-900 mb-2 uppercase tracking-wide">Income Details</div>
                              <div className="space-y-2">
                                <div>
                                  <div className="text-xs text-gray-500">Gross Operating Income</div>
                                  <div className="text-sm font-bold text-gray-900">{property.income.grossOperatingIncome}</div>
                                </div>
                                <div>
                                  <div className="text-xs text-gray-500">Net Operating Income</div>
                                  <div className="text-sm font-bold text-gray-900">{property.income.netOperatingIncome}</div>
                                </div>
                                <div className="pt-1 border-t border-red-100/50">
                                  <div className="text-xs text-gray-500">CAP Rate</div>
                                  <div className="text-sm font-bold text-red-900">{property.income.capRate}</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Property Details Section */}
                          <div className="space-y-4">
                            <div className="bg-blue-50/50 rounded-lg p-3">
                              <div className="text-xs font-medium text-blue-900 mb-2 uppercase tracking-wide">Property Details</div>
                              <div className="space-y-2">
                                <div>
                                  <div className="text-xs text-gray-500">Lot Size</div>
                                  <div className="text-sm font-bold text-gray-900">{property.details.lotSize}</div>
                                </div>
                                <div>
                                  <div className="text-xs text-gray-500">Build Area</div>
                                  <div className="text-sm font-bold text-gray-900">{property.details.buildArea}</div>
                                </div>
                                <div className="pt-1 border-t border-blue-100/50">
                                  <div className="text-xs text-gray-500">Down Payment</div>
                                  <div className="text-sm font-bold text-gray-900">{property.details.downPayment || 'N/A'}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Broker & CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center">
                            <div className="relative w-10 h-10 mr-3">
                              <Image
                                src={property.broker.avatar}
                                alt={property.broker.name}
                                fill
                                className="object-cover rounded-full ring-2 ring-red-100"
                              />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{property.broker.name}</div>
                              <div className="text-xs text-gray-500">{property.broker.title}</div>
                            </div>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-red-900 text-white text-sm font-medium rounded-lg 
                                   hover:bg-red-800 transition-colors duration-300 shadow-sm hover:shadow-md"
                          >
                            View Details
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </Masonry>
          )}
        </AnimatePresence>

        {/* Enhanced No Results State */}
        <AnimatePresence>
          {filteredAndSortedListings.length === 0 && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center py-16"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                No properties found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search or category filters
              </p>
              <motion.button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-2 bg-red-900 text-white rounded-lg hover:bg-red-800 
                         transition-colors duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset Filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}