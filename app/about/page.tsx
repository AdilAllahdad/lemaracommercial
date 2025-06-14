'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/service1.jpg"
          alt="About Lemara Commercial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">WE ARE WHAT WE DO</h1>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Lemara Commercial is a commercial real estate firm located in Campbell, California, focusing on providing customized, strategic brokerage solutions.
          </p>
        </div>
      </section>
      {/* Services Overview Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our Professional Services
            </h2>
            <div className="h-1.5 w-32 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering exceptional real estate solutions with expertise and dedication
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-red-50 to-red-100 group-hover:scale-110 transition-transform duration-300">
                  <Image src="/images/building-icon.svg" alt="Commercial" width={32} height={32} className="text-red-900" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-red-900 transition-colors">Commercial Real Estate</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Expert brokerage services for buying, selling, and leasing commercial properties, tailored to meet your business objectives.</p>
            </div>
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-red-50 to-red-100 group-hover:scale-110 transition-transform duration-300">
                  <Image src="/images/investment-icon.svg" alt="Multi-family" width={32} height={32} className="text-red-900" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-red-900 transition-colors">Multi-Family Units</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Specialized services for apartment buildings and multi-family investment properties, maximizing returns for investors.</p>
            </div>
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-red-50 to-red-100 group-hover:scale-110 transition-transform duration-300">
                  <Image src="/images/business-icon.svg" alt="Retail" width={32} height={32} className="text-red-900" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-red-900 transition-colors">Retail Business</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">Comprehensive solutions for retail centers and business transactions, ensuring successful commercial outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Strategic Approach</h2>
              <div className="h-1 w-24 bg-red-900"></div>
              <p className="text-lg text-gray-600">
                Created on a foundation of knowledge and integrity, Lemara Commercial focuses on providing customized, strategic brokerage solutions for our private and institutional clients.
              </p>
              <p className="text-lg text-gray-600">
                Our structured services platform allows our clients to focus on their own business operations, knowing that Lemara Commercial's team of real estate and retail business experts is taking care of all of the strategic and operational real estate and business details.
              </p>
              <p className="text-lg text-gray-600">
                The end result is custom-tailored real estate and buy-sell business solutions that fulfill your business objectives and maximize your cost-savings.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/service2.jpg"
                alt="Strategic Approach"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Full-Service Model Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Full-Service Strategic and Corporate Model</h2>
            <div className="h-1 w-24 bg-red-900 mx-auto my-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/images/slide3.jpg"
                alt="Full-Service Model"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                Our knowledge and expertise in all areas of buy-sell business, multi-family apartment buildings, and commercial real estate provides our clients with a comprehensive approach to their business and real estate needs.
              </p>
              <p className="text-lg text-gray-600">
                Lemara Commercial is composed of a diverse group of entrepreneurs with backgrounds in commercial real estate, retail business, and multi-family investment properties. Through collaboration, our team works to achieve each client's goals, regardless of the asset type.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block bg-red-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-800 transition-all duration-300"
                >
                  Work With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you're interested in an investment property, acquiring an industrial property, or any other commercial purchase, let's discuss how we can help achieve your goals
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
