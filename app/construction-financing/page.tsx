import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Construction Financing | Lemara Commercial',
  description: 'Get flexible construction financing solutions for your commercial projects. Expert guidance and competitive rates with Lemara Commercial.',
};

export default function ConstructionFinancingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/service1.jpg"
          alt="Construction Financing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">CONSTRUCTION FINANCING</h1>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Steady cash flow is the blood line for any commercial construction project whether you are building an office building, retail center, industrial building, or any other type of income-producing property.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Introduction Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  We have a range of loans for construction of commercial property to fit your unique requirements.
                </p>
                <p className="text-lg text-gray-700">
                  Our seasoned commercial lending officers have years of expertise in construction financing.
                </p>
                <p className="text-lg text-gray-700">
                  Our team of commercial construction experts includes accountants, engineers, and other principals who make sure you achieve your desired goals.
                </p>
                  <p className="text-lg text-gray-700 mb-8">
                A construction loan is a loan that help the borrower to build, expand, rehabilitate, or reposition a property. In most cases loans to finance a real estate development project fall under two broad categories, although sometimes these two loans will also be combined into one:
              </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="/images/Loan_Construction_a.jpg"
                  alt="Construction Site Team"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Loan Description */}
            <div className="mb-12">
            

              {/* Financing Types Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Short Term Financing</h3>
                  <p className="text-gray-700">
                    This caters the financing needs for the construction and lease up phase of the project.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Long Term Permanent Financing</h3>
                  <p className="text-gray-700">
                    Once a project becomes stabilize and leases up to the market level of occupancy, the construction loan is "taken out" by longer term permanent financing.
                  </p>
                </div>
              </div>
            </div>

            {/* Decision Factors Section */}
            <div className="bg-blue-50 rounded-xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Factors in Commercial Construction Loan Decisions
              </h3>
              <div className="space-y-4">
                {[
                  'Value of the finished project must be more than the cost of construction',
                  'Loan-to-Value Ratio',
                  'Loan-to-Cost Ratio',
                  'Debt Service Coverage Ratio',
                  'Net-Worth-to-Loan-Size Ratio'
                ].map((factor, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">{factor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" aria-hidden="true">
          <div className="absolute inset-0 bg-grid-gray-900/[0.03] bg-[size:20px_20px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative z-10 p-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:p-16">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Start Your Construction Project?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Contact our construction financing advisors, we are just a call away, call us at{' '}
                  <a href="tel:+18005680850" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    (800) 568-0850
                  </a>{' '}
                  or click the button to apply for your financing online.
                </p>
              </div>
              
              <div className="mt-8 lg:mt-0 flex items-center justify-center lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-red-900 hover:bg-red-800 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Apply Now
                  <svg
                    className="ml-3 -mr-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 lg:translate-x-1/2 xl:translate-x-1/6">
              <div className="h-48 w-48 bg-gradient-to-br from-blue-600 to-blue-800 opacity-10 rounded-full" />
            </div>
            <div className="absolute top-0 left-0 transform -translate-y-1/2 -translate-x-1/2">
              <div className="h-48 w-48 bg-gradient-to-br from-red-600 to-red-800 opacity-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
