import Image from "next/image";
import Link from "next/link";

export default function SBALoansPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/service1.jpg"
          alt="SBA Loans"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">SBA LOANS</h1>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            The SBA offers numerous loan programs to assist small business owners to start, manage and grow their businesses.
          </p>
          <Link
            href="/loan-application"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 mt-8"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Loan Programs Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Our SBA Loan Programs
            </h2>
            <div className="h-1.5 w-32 bg-red-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible financing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SBA Express Program Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-red-50">
                    <Image 
                      src="/financial.svg" 
                      alt="Express Loans" 
                      width={40} 
                      height={40} 
                      className="text-red-900"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">SBA Express Program</h3>
                </div>                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Lower Interest Rates — Rates can be fixed or variable and are tied to the prime rate (as published in The Wall Street Journal), LIBOR, or the optional peg rate (published quarterly in the Federal Register), but they may not exceed SBA maximums</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Flexible repayment options and longer terms than traditional loans</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Borrow up to $350,000</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Maximum SBA Guaranty is 50%</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Quick Turnaround — May receive a response to your application in less than 2 days</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Use the funds for working capital, equipment, inventory, or real estate purchases, or to expand facilities</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/loan-application" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-red-900 hover:bg-red-700 transition duration-300">
                    Apply for Express Program
                  </Link>
                </div>
              </div>
            </div>

            {/* SBA Patriot Express Pilot Loan Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-red-50/80">
                    <Image 
                      src="/images/investment-icon.svg" 
                      alt="Patriot Express" 
                      width={40} 
                      height={40} 
                      className="text-red-900"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">SBA Patriot Express Pilot Loan</h3>
                </div>                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Loans for veterans and members of the military community wanting to establish or expand small businesses</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Line of credit or term loan up to $500,000</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Smaller credit requests, allowing expedited and streamlined application process</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Can be used for: Start up costs, Equipment purchases, Business-occupied real-estate purchases, Inventory, Managing your existing business</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/loan-application" className="inline-flex items-center justify-center px-6 py-3 border border-red-200 rounded-lg text-base font-medium text-red-900 hover:bg-red-50 transition duration-300">
                    Apply for Patriot Express
                  </Link>
                </div>
              </div>
            </div>

            {/* 7(a) General Small Business Loans Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-red-50/60">
                    <Image 
                      src="/images/business-icon.svg" 
                      alt="General Business Loans" 
                      width={40} 
                      height={40} 
                      className="text-red-900"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">7(a) General Small Business Loans</h3>
                </div>                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Ideal for businesses that may not meet the conventional lending collateral or cash flow requirements</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Often provide longer terms than conventional lending</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">SBA guarantee limited to $1.5 million, $5 million maximum on the loan amount</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Proceeds can be used to provide long-term working capital to use to pay operational expenses, accounts payable and/or to purchase inventory or to purchase equipment, machinery, furniture, fixtures, supplies or materials or to construct a new building or refinance existing business debt or even to establish a new business.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Perfect for establishing a new business or expanding an existing one</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/loan-application" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-red-900 hover:bg-red-700 transition duration-300">
                    Apply for 7(a) Loan
                  </Link>
                </div>
              </div>
            </div>

            {/* Real Estate & Equipment Loans Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-red-50/40">
                    <Image 
                      src="/building-class.svg" 
                      alt="Real Estate Loans" 
                      width={40} 
                      height={40} 
                      className="text-red-900"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Real Estate & Equipment Loans: CDC/504</h3>
                </div>                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">This program provides financing for the purchase of fixed assets (real estate, buildings and machinery) at below market rates</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Eligible businesses must have a tangible net worth less than $15 million and an average net income less than $5.0 million after taxes for the preceding two years</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Provides long-term financing for purchasing land, constructing new buildings, expanding facilities, or purchasing long-term machinery and equipment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-900 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Maximum debenture sizes: $5 million for regular and public policy loans, $5.5 million for small manufacturer loans (No working capital permitted)</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/loan-application" className="inline-flex items-center justify-center px-6 py-3 border border-red-200 rounded-lg text-base font-medium text-red-900 hover:bg-red-50 transition duration-300">
                    Apply for CDC/504 Loan
                  </Link>
                </div>
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
                  Ready to Get Your SBA Loan?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Contact our SBA loan advisors, we are just a call away, call us at{' '}
                  <a href="tel:+18005680850" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    (800) 568-0850
                  </a>{' '}
                  or click the button to apply for your loan online.
                </p>
              </div>
              
              <div className="mt-8 lg:mt-0 flex items-center justify-center lg:justify-end">
                <Link
                  href="/loan-application"
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