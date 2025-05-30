'use client';
import { useState, use } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { listings } from '@/app/data/listings';
import { Listing } from '@/types/listings';

// Dynamically import client-side components with no SSR
const Map = dynamic(() => import('@/components/listings/Map').then(mod => mod.Map), { 
  ssr: false,
  loading: () => (
    <div className="h-[400px] rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
      <div className="text-gray-500">Loading map...</div>
    </div>
  )
});

const AffordabilityCalculator = dynamic(
  () => import('@/components/listings/AffordabilityCalculator'),
  { ssr: false }
);

export default function ListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const listing = listings.find(l => l.id === id) as Listing;
  const [selectedImage, setSelectedImage] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isCultivationOpen, setIsCultivationOpen] = useState(false);
  const [isSpecialRemarksOpen, setIsSpecialRemarksOpen] = useState(true);
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(true);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(true);

  if (!listing) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-300 mx-2">/</span>
              </li>
              <li>
                <Link href="/listings" className="text-gray-500 hover:text-gray-700">
                  Listings
                </Link>
              </li>
              <li>
                <span className="text-gray-300 mx-2">/</span>
              </li>
              <li>
                <span className="text-gray-900 font-medium">{listing.title}</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Gallery */}
          <div className="relative">            {/* Main Image */}
            <div className="w-full aspect-[21/9] relative overflow-hidden bg-gray-100">
              {!imageError ? (
                <Image
                  src={listing.gallery[selectedImage]}
                  alt={`${listing.title} - Image ${selectedImage + 1}`}
                  width={2100}
                  height={900}
                  priority={true}
                  className="w-full h-full object-cover"
                  onError={() => {
                    console.error('Failed to load image:', listing.gallery[selectedImage]);
                    setImageError(true);
                  }}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p>Image failed to load</p>
                </div>
              )}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2 bg-black bg-opacity-50 rounded-lg p-2">
                {listing.gallery.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-16 h-16 rounded-md overflow-hidden transition-all duration-200 ${
                      selectedImage === index ? 'ring-2 ring-white' : 'opacity-70 hover:opacity-100'
                    }`}
                  >                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      sizes="64px"
                      quality={75}
                      className="object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : listing.gallery.length - 1))}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setSelectedImage((prev) => (prev < listing.gallery.length - 1 ? prev + 1 : 0))}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Title Overlay */}
          <div className="bg-white px-8 py-6 border-b">
            <h1 className="text-4xl font-bold text-gray-900">
              {listing.title}
            </h1>
            <p className="text-xl text-gray-600 mt-2">
              {listing.location}
            </p>
          </div>          {/* Document Types */}
          <div className="bg-white px-8 py-6 border-b">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div className="grid grid-cols-5 gap-8">
                <button className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-1">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors">
                    <Image src="/flyer.svg" alt="Flyer" width={32} height={32} className="text-gray-600 group-hover:[color:#296098] group-hover:scale-110 transition-all" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:[color:#296098]">Flyer</span>
                </button>
                <button className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-1">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-red-50 transition-colors">
                    <Image src="/private-om.svg" alt="Private OM" width={32} height={32} className="text-gray-600 group-hover:text-red-900 group-hover:scale-110 transition-all" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-red-900">Private OM</span>
                </button>
                <button className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-1">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors">
                    <Image src="/financial.svg" alt="Financial" width={32} height={32} className="text-gray-600 group-hover:[color:#296098] group-hover:scale-110 transition-all" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:[color:#296098]">Financial</span>
                </button>
                <button className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-1">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-red-50 transition-colors">
                    <Image src="/due-diligence.svg" alt="Due Diligence" width={32} height={32} className="text-gray-600 group-hover:text-red-900 group-hover:scale-110 transition-all" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-red-900">Due Diligence</span>
                </button>
                <button className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-1">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors">
                    <Image src="/additional-docs.svg" alt="Additional Documents" width={32} height={32} className="text-gray-600 group-hover:[color:#296098] group-hover:scale-110 transition-all" />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:[color:#296098]">Additional Documents</span>
                </button>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-red-900 text-white rounded-md hover:bg-red-800 transition-colors">
                  Submit LOI
                </button>
                <button className="px-6 py-2 [background-color:#296098] text-white rounded-md hover:bg-blue-700 transition-colors">
                  Submit POF
                </button>
              </div>
            </div>
          </div>          {/* Property Quick Stats */}
          <div className="bg-gradient-to-br from-gray-50 to-white px-8 py-6 grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="group p-4 rounded-lg bg-white hover:shadow-lg transition-all duration-200 border border-transparent hover:border-red-900/10">
              <div className="flex items-center gap-2 mb-2">
                <Image src="/year.svg" alt="" width={20} height={20} className="text-red-900" />
                <h3 className="text-sm font-medium text-red-900">Year Build</h3>
              </div>
              <p className="text-lg font-semibold text-gray-900 group-hover:text-red-900 transition-colors">N/A</p>
            </div>
            <div className="group p-4 rounded-lg bg-white hover:shadow-lg transition-all duration-200 border border-transparent hover:border-[#296098]/10">
              <div className="flex items-center gap-2 mb-2">
                <Image src="/floors.svg" alt="" width={20} height={20} className="[color:#296098]" />
                <h3 className="text-sm font-medium [color:#296098]">No Of Floors</h3>
              </div>
              <p className="text-lg font-semibold text-gray-900 group-hover:[color:#296098] transition-colors">N/A</p>
            </div>
            <div className="group p-4 rounded-lg bg-white hover:shadow-lg transition-all duration-200 border border-transparent hover:border-red-900/10">
              <div className="flex items-center gap-2 mb-2">
                <Image src="/space.svg" alt="" width={20} height={20} className="text-red-900" />
                <h3 className="text-sm font-medium text-red-900">Total Space Available</h3>
              </div>
              <p className="text-lg font-semibold text-gray-900 group-hover:text-red-900 transition-colors">N/A</p>
            </div>
            <div className="group p-4 rounded-lg bg-white hover:shadow-lg transition-all duration-200 border border-transparent hover:border-[#296098]/10">
              <div className="flex items-center gap-2 mb-2">
                <Image src="/building-class.svg" alt="" width={20} height={20} className="[color:#296098]" />
                <h3 className="text-sm font-medium [color:#296098]">Building Class</h3>
              </div>
              <p className="text-lg font-semibold text-gray-900 group-hover:[color:#296098] transition-colors">N/A</p>
            </div>
            <div className="group p-4 rounded-lg bg-white hover:shadow-lg transition-all duration-200 border border-transparent hover:border-red-900/10">
              <div className="flex items-center gap-2 mb-2">
                <Image src="/lot-size.svg" alt="" width={20} height={20} className="text-red-900" />
                <h3 className="text-sm font-medium text-red-900">Lot Size</h3>
              </div>
              <p className="text-lg font-semibold text-gray-900 group-hover:text-red-900 transition-colors">520 Acres</p>
            </div>
          </div>

          {/* Financial Quick Stats */}
          <div className="bg-white px-8 py-6 grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-b">
            <div className="group p-4 rounded-lg hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100/50 transition-all duration-200">
              <div className="flex items-center gap-2 mb-2">
                <Image src="/price.svg" alt="" width={20} height={20} className="text-red-900" />
                <h3 className="text-sm font-medium text-red-900">Purchase Price</h3>
              </div>
              <p className="text-lg font-semibold text-gray-900 group-hover:text-red-900 transition-colors">$9,990,000</p>
            </div>
            <div className="group p-4 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100/50 transition-all duration-200">
              <div className="flex items-center gap-2 mb-2">
                <Image src="/income.svg" alt="" width={20} height={20} className="[color:#296098]" />
                <h3 className="text-sm font-medium [color:#296098]">Gross Income / MO</h3>
              </div>
              <p className="text-lg font-semibold text-gray-900 group-hover:[color:#296098] transition-colors">N/A</p>
            </div>
            <div className="group p-4 rounded-lg hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100/50 transition-all duration-200">
              <div className="flex items-center gap-2 mb-2">
                <Image src="/cash-flow.svg" alt="" width={20} height={20} className="text-red-900" />
                <h3 className="text-sm font-medium text-red-900">Monthly Cash Flow</h3>
              </div>
              <p className="text-lg font-semibold text-gray-900 group-hover:text-red-900 transition-colors">$--</p>
            </div>
            <div className="group p-4 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100/50 transition-all duration-200">
              <div className="flex items-center gap-2 mb-2">
                <Image src="/return.svg" alt="" width={20} height={20} className="[color:#296098]" />
                <h3 className="text-sm font-medium [color:#296098]">Cash On Cash Return</h3>
              </div>
              <p className="text-lg font-semibold text-gray-900 group-hover:[color:#296098] transition-colors">N/A</p>
            </div>
          </div>
          {/* Analysis Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 border-b">
            {/* Financial Analysis */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-white">
                  <Image src="/metrics.svg" alt="" width={24} height={24} className="text-red-900" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Financial Analysis</h2>
              </div>
              
              <div className="grid gap-4">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Cash On Cash Return</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">N/A</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-900">Annual</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6">
                    <p className="text-sm font-medium text-gray-600">Internal Rate of Return (IRR)</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">N/A</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <p className="text-sm font-medium text-gray-600">Capitalization Rate</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">0.00%</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6">
                    <p className="text-sm font-medium text-gray-600">Gross Rent Multiplier</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">N/A</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <p className="text-sm font-medium text-gray-600">Operating Expense Ratio</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">N/A</p>
                  </div>
                </div>
                
                <div className="bg-red-900 rounded-xl p-6 text-white">
                  <p className="text-sm font-medium">Debt Coverage Ratio (DCR)</p>
                  <p className="text-3xl font-bold mt-1">0.00</p>
                  <p className="text-sm mt-2">Minimum ratio required by most lenders: 1.25</p>
                </div>
              </div>
            </div>

            {/* Operating Analysis */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-white">
                  <Image src="/operations.svg" alt="" width={24} height={24} className="text-red-900" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Operating Analysis</h2>
              </div>

              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6">
                    <p className="text-sm font-medium text-gray-600">Gross Income</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">N/A</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <p className="text-sm font-medium text-gray-600">Total Expenses</p>
                    <p className="text-xl font-bold text-gray-900 mt-1">N/A</p>
                  </div>
                </div>
                
                <div className="bg-red-900 rounded-xl p-6 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">Net Operating Income (NOI)</p>
                      <p className="text-3xl font-bold mt-1">N/A</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white">Annual</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                  <p className="text-sm font-medium text-gray-600">Annual Debt Service</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">$269,157.39</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <p className="text-sm text-red-500">Fixed Annual Payment</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <p className="text-sm font-medium text-gray-600">Cash Flow Before Taxes (CFBT)</p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <p className="text-2xl font-bold text-gray-900">N/A</p>
                    <p className="text-sm text-gray-500">per year</p>
                  </div>                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="px-8 py-10 bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-md bg-red-50">
                <Image src="/file.svg" alt="" width={24} height={24} className="text-red-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Description</h2>
            </div>

            <div className="space-y-8">
              {/* Highlight Box */}
              <div className="bg-red-50/50 border border-b rounded-xl p-6">
                <p className="text-lg text-gray-900 font-medium">
                  Opportunity to buy 520 Acres of Mixed licensed Greenhouse & outdoor cultivation!
                </p>
              </div>

              {/* Main Description */}
              <div className="space-y-6 text-gray-600">
                <p className="leading-relaxed">
                  Mixed Licensed Greenhouse Farm & Outdoor In SLO County. 520 acres, 4 separate Parcels. 10,000 sq. Ft existing cultivation and in application with the county for an additional acre of outdoor and 12,000 of dep. Ultimately it could have 3 acres of cultivation. Roughly 2 miles from Lake Nacimiento.
                </p>

                {/* Property Features */}
                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Infrastructure</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                        <span>Well: 90 gals/min well with 10,000 storage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                        <span>BARN: 30×50 barn/shop with 10' overhangs on each side</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                        <span>Standalone bathroom with a shower</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                        <span>Small solar system to power everything</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Financial Highlights</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                        <span>Approximately 500k profit from 10k sq. Ft</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                        <span>Gross sales potential: 1.2 -1.5 Million</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                        <span>Net approximately $500,000</span>
                      </li>
                    </ul>
                  </div>
                </div>
                                {/* Current Status */}
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setIsStatusOpen(!isStatusOpen)}
                    className="w-full p-6 flex justify-between items-center hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900">Current Status & Growth Potential</h3>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isStatusOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isStatusOpen && (
                    <div className="p-6 pt-0">
                      <p className="leading-relaxed text-gray-600">
                        Currently have state provisional for 10,000 sq. ft outdoor. Application for 27,000 sq. ft mixed light greenhouse and 1 acre of outdoor light dep hoops. Should be County approved by March. The county is allowing the owner to apply to the state in parallel because they are so close. After this approval Seller is applying for two more 27,000 sq. ft greenhouses and 2 more acres of hoops on the other two eligible parcels as well a large processing building to accommodate the additional cultivation. The county knows this is coming, but we want to get through the first app. The seller has also applied to bring power out to the site.
                      </p>
                    </div>
                  )}
                </div>

                {/* Cultivation Info */}
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setIsCultivationOpen(!isCultivationOpen)}
                    className="w-full p-6 flex justify-between items-center hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900">Cultivation Information</h3>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isCultivationOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isCultivationOpen && (
                    <div className="p-6 pt-0 space-y-4">
                      <p className="leading-relaxed text-gray-600">
                        Cannabis is the only annual plant with distinct genders: male, female, and hermaphrodite. You only use the female plant for its flower, but you still use male plants for pollinating/reproducing. Separate select males and keep them far away from the female plants. If you keep male and hermaphrodite plants near your females, your yield will still be fully flowered, yet rife with seeds.
                      </p>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                          <span>Each plant can yield one to ten pounds of flower and trim</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                          <span>Plants can grow up to 15 feet tall depending on strain and maintenance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                          <span>Recommended planting with Humboldt Legends: March for mid-October harvest</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Special Remarks Section */}
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setIsSpecialRemarksOpen(!isSpecialRemarksOpen)}
                    className="w-full p-6 flex justify-between items-center hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900">Special Remarks</h3>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isSpecialRemarksOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isSpecialRemarksOpen && (
                    <div className="p-6 pt-0">
                      <div className="space-y-4 text-gray-600">
                        <p className="leading-relaxed">
                          To receive more information please provide the following items:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                            <span>Signed NDA</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                            <span>PROOF OF FUNDS</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                            <span>LOI</span>
                          </li>
                        </ul>
                        <div className="mt-4 p-4 bg-red-50/50 border border-red-100 rounded-lg">
                          <p className="text-red-900 text-sm">
                            We are not permitted to provide any more information without the signed NDA
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>


               {/*Floor Plan Section */}
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setIsFloorPlanOpen(!isFloorPlanOpen)}
                    className="w-full p-6 flex justify-between items-center hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900">Floor Plan</h3>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isFloorPlanOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isFloorPlanOpen && (
                    <div className="p-6 pt-0">
                      <p className="leading-relaxed text-gray-600">
                       No floor plan available.
                      </p>
                    </div>
                  )}
                </div>


    {/*Disclaimer Section */}
                <div className="bg-gray-50 rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setIsDisclaimerOpen(!isDisclaimerOpen)}
                    className="w-full p-6 flex justify-between items-center hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900">Disclaimer</h3>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isDisclaimerOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isDisclaimerOpen && (
                    <div className="p-6 pt-0">
                      <p className="leading-relaxed text-gray-600">
                       The financial information was supplied by the seller and has not been verified and will not be verified by the broker. The broker makes no representation about the accuracy or completeness of the information and does not guarantee future performance. It is the responsibility of a prospective buyer to make their own inspection of all financial and other business records and to seek independent financial and legal counsel regarding any purchase of this business and/or real estate.
                      </p>
                    </div>
                  )}
                </div>




                
              </div>
               {/* Affordability & Listing Contact Section */}
          <div className="space-y-8 p-8 bg-white border-b border-t">
            {/* Affordability Section */}
            <AffordabilityCalculator />

            {/* Listing Offered By Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-red-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Listing Offered By</h2>
              </div><div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:border-red-200 transition-colors duration-200">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-200 border-2 border-red-100">
                    <Image
                      src="/images/slide3.jpg"
                      alt="AJ Rana"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-900">AJ Rana</h3>
                      <span className="px-2 py-0.5 bg-red-50 text-red-900 text-xs font-medium rounded-full">Featured Agent</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Broker</p>
                    <p className="text-xs text-gray-500 mt-1">CALBRE: 01724170</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <a href="tel:+1234567890" className="flex items-center justify-center gap-2 px-4 py-3 bg-red-900 text-white rounded-lg hover:bg-red-800 transition-all duration-200 shadow-sm hover:shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium">Call Now</span>
                  </a>
                  <a href="mailto:ajrana@example.com" className="flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:border-red-200 hover:bg-red-50/20 transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Email</span>
                  </a>
                </div>
              </div>
            </div>              </div>
            </div>
          </div>

          {/* Location Map Section */}
          <div className="px-8 py-10 bg-white border-t">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-md bg-red-50">
                <Image src="/globe.svg" alt="" width={24} height={24} className="text-red-900" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Location</h2>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <Map
                location={listing.location}
                listing={{
                  title: listing.title,
                  price: listing.price
                }}
              />
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="px-8 py-12 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Contact Us About This Property
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Investment Amount */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Investment Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="number"
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900/20 focus:border-red-900 transition-all duration-200"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>

                  {/* Purchase Timeframe */}
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Purchase Timeframe (Months)
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900/20 focus:border-red-900 transition-all duration-200 appearance-none bg-white"
                    >
                      <option value="">Select timeframe</option>
                      <option value="3">1-3 months</option>
                      <option value="6">4-6 months</option>
                      <option value="9">7-9 months</option>
                      <option value="12">10-12 months</option>
                      <option value="12+">12+ months</option>
                    </select>
                    <div className="absolute right-4 top-[41px] pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-900/20 focus:border-red-900 transition-all duration-200 resize-none"
                    placeholder="Share any specific requirements or questions..."
                  ></textarea>
                  <div className="absolute bottom-3 right-3 text-sm text-gray-400">
                    <span className="group-focus-within:text-red-900 transition-colors">Optional</span>
                  </div>
                </div>

                {/* Contact Preferences */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="relative flex items-center justify-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-red-900/20 transition-all group">
                      <input type="radio" name="contact" value="email" className="absolute opacity-0" />
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-500 group-hover:text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium group-hover:text-red-900">Email</span>
                      </div>
                    </label>
                    <label className="relative flex items-center justify-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-red-900/20 transition-all group">
                      <input type="radio" name="contact" value="phone" className="absolute opacity-0" />
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-500 group-hover:text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm font-medium group-hover:text-red-900">Phone</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-red-900 text-white rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-900/20 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}