'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CommercialLoansPage() {
  const [isToggleOpen, setIsToggleOpen] = useState(true);
  const [isLendingOpen, setIsLendingOpen] = useState(true);
  const [isDecisionFactorsOpen, setIsDecisionFactorsOpen] = useState(true);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/service2.jpg"
          alt="Commercial Loans"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">COMMERCIAL LOANS</h1>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Secure the financing you need for your commercial real estate ventures
          </p>
        </div>
      </section>
      {/* Apartment Loans Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Apartment Loans
            </h2>
            <div className="h-1.5 w-32 bg-red-900 mx-auto"></div>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl font-stretch-50% max-w-4xl mx-auto">
                "If you are planning to purchase an apartment building, a condominium or any multifamily residential complex, we are here to assist. In most cases, we can get a multifamily loan approved for you for 85% of the total value of the property."
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <div className="space-y-3">
                <p className="text-gray-700">
                  We are an apartment mortgage company offering a wide variety of financing options for apartment loans nationwide. We offer aggressively priced apartment loans.
                </p>

                <p className="text-gray-700">
                  Our company has partnered with Fannie Mae, Freddie Mac, HUD, FHA, REITs, Conduit, banks, and selective institutional investors.
                </p>

                <p className="text-gray-700">
                  We are an apartment mortgage solution provider offering highly customized solutions to help meet the investment needs and requirements of our clients.
                </p>

                <p className="text-gray-700">
                  Whether you need a purchase loan for multifamily apartments or an apartment loan refinance we can help you by providing the lowest possible rates and a hassle free process. Our goal is to make the process of getting your multifamily loan quicker and easier than ever. We provide the most comprehensive apartment financing programs available. Whether you're looking for a conduit, traditional, or stated income apartment loan, we will meet both your individual and professional investment objectives. We can help you in getting:
                </p>
              </div>

              {/* Image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/Loan_Apartment1a.jpg"
                  alt="Apartment Building"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Toggle Section */}
            <div className="mt-16 mx-auto">
              <button
                onClick={() => setIsToggleOpen(!isToggleOpen)}
                className="w-full flex items-center justify-between bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900">Key Features & Benefits</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    isToggleOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isToggleOpen && (
                <div className="mt-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Low rates for apartment purchase loans or to refinance apartment loans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Up to 85% financing for apartments and multifamily properties of all types</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Terms for fixed rates from 5 – 7 years</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Apartment Loan amortization up to 25 years in some cases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Low and flexible prepayment penalties with the ability to buy down the term</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Low overall loan costs and -0- due diligence fees!</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Loan Amounts from $500,000 to $50,000,000</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Lending Programs Toggle Section */}
            <div className="mt-8 mx-auto">
              <button
                onClick={() => setIsLendingOpen(!isLendingOpen)}
                className="w-full flex items-center justify-between bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900">Our Lending Programs</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    isLendingOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isLendingOpen && (
                <div className="mt-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="grid gap-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">Small Apartment Loans</h4>
                      <p className="text-gray-700">Multifamily mortgages ($1-$5 Million)</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">Mid-balance Apartment Loans</h4>
                      <p className="text-gray-700">Multifamily mortgages ($5-$25 Million)</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">Large Apartment Loans</h4>
                      <p className="text-gray-700">Multifamily mortgages (No Maximum)</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>      {/* Commercial Real Estate Loans Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Commercial Real Estate Loans
            </h2>
            <div className="h-1.5 w-32 bg-red-900 mx-auto"></div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl font-stretch-50% max-w-4xl mx-auto">
                "If you have a commercial financing need, our company has a program for you. Whether you desire to purchase, refinance, or construct a commercial building, we are your best source for financing."
              </p>
            </div>            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/images/Loan_RealEstate_a.jpg"
                  alt="Commercial Real Estate Financing"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">
                  We have an unlimited nationwide financial network available so a loan package can be tailored to suit your specific needs.
                </p>
                <p className="text-gray-700">
                  Most loans are asset-based, relying on the property income potential and value, which enables us to provide financing for a wider variety of projects than most lenders.
                </p>
                <p className="text-gray-700">
                  Competitive rates for all types of income property financing. A wide variety of property types and credit quality can be considered for the commercial mortgage financing program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Office Buildings Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Office Buildings
            </h2>
            <div className="h-1.5 w-32 bg-red-900 mx-auto"></div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl font-stretch-50% max-w-4xl mx-auto">
                "Steady cash flow is the blood line for any commercial construction project whether you are building an office building, retail center, industrial building, or any other type of income-producing property."
              </p>
            </div>            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-3">
                <p className="text-gray-700">
                  We have a range of loans for construction of commercial property to fit your unique requirements.
                </p>
                <p className="text-gray-700">
                  Our seasoned commercial lending officers have years of expertise in construction financing.
                </p>
                <p className="text-gray-700">
                  Our team of commercial construction experts includes accountants, engineers, and other principals who make sure you achieve your desired goals.
                </p>
                <p className="text-gray-700">
                  A construction loan is a loan that help the borrower to build, expand, rehabilitate, or reposition a property. In most cases loans to finance a real estate development project fall under two broad categories, although sometimes these two loans will also be combined into one:
                </p>
                <div className="space-y-4 mt-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Short term financing</h4>
                    <p className="text-gray-700">This caters the financing needs for the construction and lease up phase of the project.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Long term permanent financing</h4>
                    <p className="text-gray-700">Once a project becomes stabilize and leases up to the market level of occupancy, the construction loan is "taken out" by longer term permanent financing.</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] w-full">
                <Image
                  src="/images/Loan_Construction_a.jpg"
                  alt="Commercial Construction Financing"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>            {/* Decision Factors Toggle Section */}
            <div className="mt-16 mx-auto">
              <button
                onClick={() => setIsDecisionFactorsOpen(!isDecisionFactorsOpen)}
                className="w-full flex items-center justify-between bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900">Key Decision Factors</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    isDecisionFactorsOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDecisionFactorsOpen && (
                <div className="mt-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Value of the finished project must be more than the cost of construction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Loan-to-Value Ratio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Loan-to-Cost Ratio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Debt Service Coverage Ratio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Net-Worth-to-Loan-Size Ratio</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
