'use client';

import { useState } from 'react';

interface ContactFormProps {
  propertyTitle?: string;
}

export default function ContactForm({ propertyTitle }: ContactFormProps) {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [message, setMessage] = useState('');
  const [contactMethod, setContactMethod] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log({
      investmentAmount,
      timeframe,
      message,
      contactMethod,
      propertyTitle
    });
  };

  return (
    <div className="px-8 py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Contact Us About This Property
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
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
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)}
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
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
                <input 
                  type="radio" 
                  name="contact" 
                  value="email" 
                  className="absolute opacity-0" 
                  checked={contactMethod === 'email'}
                  onChange={(e) => setContactMethod(e.target.value)}
                />
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm font-medium group-hover:text-red-900">Email</span>
                </div>
              </label>
              <label className="relative flex items-center justify-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-red-900/20 transition-all group">
                <input 
                  type="radio" 
                  name="contact" 
                  value="phone" 
                  className="absolute opacity-0" 
                  checked={contactMethod === 'phone'}
                  onChange={(e) => setContactMethod(e.target.value)}
                />
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
  );
}
