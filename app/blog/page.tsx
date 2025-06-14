'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  imageUrl?: string;
  tags?: string[];
  readingTime?: number;
}



// Mock data - in a real app, this would come from an API or database
const allBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Check if Your Commercial Real Estate Broker Is Trustworthy',
    excerpt: 'Trust is a crucial part of the whole process of dealing with your real estate broker. Since you are working...',
    date: 'January 29, 2020',
    category: 'Uncategorized',
    slug: 'how-to-check-broker-trustworthy'
  },
  {
    id: '2',
    title: 'The Difference between A, B, and C Class Buildings',
    excerpt: 'The rise of offices across most of the states within the US means that there are now numerous classifications in...',
    date: 'January 29, 2020',
    category: 'Uncategorized',
    slug: 'difference-building-classes'
  },
  {
    id: '3',
    title: 'Understanding Commercial Real Estate Investment Strategies',
    excerpt: 'Commercial real estate investment requires careful planning and strategy. Learn about the key factors...',
    date: 'June 1, 2025',
    category: 'Investment',
    slug: 'commercial-real-estate-investment-strategies'
  },
  {
    id: '4',
    title: 'Top 5 Factors in Commercial Property Valuation',
    excerpt: 'Understanding how commercial properties are valued is crucial for both buyers and sellers...',
    date: 'May 28, 2025',
    category: 'Commercial',
    slug: 'commercial-property-valuation-factors'
  },
  {
    id: '5',
    title: 'Guide to Commercial Lease Agreements',
    excerpt: 'Navigate the complexities of commercial lease agreements with our comprehensive guide...',
    date: 'May 25, 2025',
    category: 'Commercial',
    slug: 'commercial-lease-agreements-guide'
  },
  {
    id: '6',
    title: 'Commercial Real Estate Market Trends 2025',
    excerpt: 'Stay informed about the latest trends shaping the commercial real estate market...',
    date: 'May 20, 2025',
    category: 'Market Analysis',
    slug: 'commercial-real-estate-trends-2025'
  }
];



const BlogCard = ({ post }: { post: BlogPost }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-red-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {post.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {post.category}
          </span>
          <span className="text-gray-500 text-sm">{post.readingTime} min read</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-blue-600 transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{post.date}</span>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex space-x-2"
            >
              <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Share on Twitter">
                <FaTwitter className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Share on LinkedIn">
                <FaLinkedin className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Share on Facebook">
                <FaFacebook className="w-4 h-4 text-gray-600" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allBlogPosts);

  const categories = ['all', ...new Set(allBlogPosts.map(post => post.category))];

  useEffect(() => {
    const filtered = allBlogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setFilteredPosts(filtered);
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/service3.jpg"
          alt="Lemara Commercial Blog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Stay updated with the latest insights in commercial real estate
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-transparent"
                />
                <FaSearch className="absolute right-3 top-3 text-gray-400" />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-red-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <AnimatePresence>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max"
            >
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Office Information Section */}      
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-transparent hover:border-blue-500">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 rounded-xl group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-red-900 transition-colors">Our Office</h2>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Lemara Commercial<br />
                  <span className="text-gray-500">Campbell, California</span>
                </p>
              </div>
            </div>
            
            <div className="group bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-transparent hover:border-blue-500">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 rounded-xl group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-red-900 transition-colors">Contact</h2>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600 text-lg">
                  Phone: <a href="tel:1-800-568-0850" className="text-red-900 hover:text-red-700 font-medium transition-colors">1-800-568-0850</a>
                </p>
                <p className="text-gray-600 text-lg">
                  Email: <a href="mailto:info@lemaracommercial.com" className="text-red-900 hover:text-red-700 font-medium transition-colors">info@lemaracommercial.com</a>
                </p>
              </div>
            </div>

            <div className="group bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-transparent hover:border-blue-500">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 rounded-xl group-hover:scale-110 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-red-900 transition-colors">Business Hours</h2>
              </div>
              <div className="space-y-3">
                <div className="text-gray-600 text-lg">
                  <span className="font-medium text-gray-700">Monday - Friday:</span><br />
                  <span className="text-gray-500">9:00 AM - 5:00 PM</span>
                </div>
                <div className="text-gray-600 text-lg">
                  <span className="font-medium text-gray-700">Saturday - Sunday:</span><br />
                  <span className="text-gray-500">By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
