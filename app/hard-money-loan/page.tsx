import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hard Money Loans | Lemara Commercial',
  description: 'Explore hard money loan options for your commercial property. Get flexible financing solutions with quick approval through Lemara Commercial.',
};

export default function HardMoneyLoansPage() {
  return (
    <main>
      <div className="relative py-24 md:py-32 bg-gray-900">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/Loan_Conventional_a.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Title and Navigation */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Hard Money Loans
              </h1>
              <div className="flex justify-center space-x-4 text-white/90">
                <a href="/" className="hover:text-white">Home</a>
                <span>/</span>
                <a href="/commercial-loans" className="hover:text-white">Commercial Loans</a>
                <span>/</span>
                <span className="text-primary">Hard Money Loans</span>
              </div>
            </div>

            {/* Call to Action Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto transform hover:scale-[1.02] transition-all duration-300">
              <h2 className="text-2xl md:text-3xl text-white mb-6 font-semibold">
                Loan Needs
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-gray-200">
                  Contact our mortgage advisors, we are just a call away, call us at{' '}
                  <a href="tel:8005680850" className="text-white hover:text-blue-200 font-semibold underline decoration-2 underline-offset-4">
                    (800) 568-0850
                  </a>{' '}
                  or click the button below to apply loan online.
                </p>
                <div className="pt-4">
                  <a
                    href="#apply"
                    className="inline-block bg-[#00238C] hover:bg-blue-800 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
