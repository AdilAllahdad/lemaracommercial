'use client';

import Image from 'next/image';

export default function AgentRegistrationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] w-full flex items-center justify-center">
        <Image
          src="/images/service2.jpg"
          alt="Agent Registration - Lemara Commercial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Agent Registration</h1>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
            Real estate agents are the heart of real estate industry.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-lg text-gray-700">
            Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900">
            Start your registration here!!!
          </h2>
        </div>
      </section>

      {/* Registration Form Section */}      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border-2 border-gray-200/60 shadow-xl rounded-2xl p-1">
            <div className="border border-gray-100 rounded-xl p-8 md:p-12 bg-white/80 backdrop-blur-sm">
              <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                <div>
                  <label htmlFor="email" className="block text-[15px] text-gray-600 mb-2">
                    E-mail Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Required Field"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-[15px] text-gray-600 mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    required
                    placeholder="Required Field"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="firstName" className="block text-[15px] text-gray-600 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    placeholder="Required Field"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-[15px] text-gray-600 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    placeholder="Required Field"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="photo" className="block text-[15px] text-gray-600 mb-2">
                    Photo
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      className="px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-md transition-colors border border-gray-200"
                      onClick={() => document.getElementById('photo')?.click()}
                    >
                      Browse
                    </button>
                    <input
                      type="file"
                      id="photo"
                      accept="image/jpeg,image/png"
                      className="hidden"
                    />
                    <span className="text-sm text-gray-500">77 X 85 jpg/jpeg</span>
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[15px] text-gray-600 mb-2">
                    Phone# <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="Required Field"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="industryRole" className="block text-[15px] text-gray-600 mb-2">
                    Industry Role <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="industryRole"
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                  >
                    <option value="">Select One</option>
                    <option value="agent">Real Estate Agent</option>
                    <option value="broker">Broker</option>
                    <option value="investor">Investor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-[15px] text-gray-600 mb-2">
                    Whatsapp
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 border border-r-0 border-gray-200 bg-gray-50 rounded-l-md text-gray-500">
                      +1
                    </span>
                    <input
                      type="tel"
                      id="whatsapp"
                      placeholder="(201) 555-0123"
                      className="flex-1 px-4 py-2.5 border border-gray-200 rounded-r-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="facebook" className="block text-[15px] text-gray-600 mb-2">
                    Facebook
                  </label>
                  <input
                    type="url"
                    id="facebook"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="twitter" className="block text-[15px] text-gray-600 mb-2">
                    Twitter
                  </label>
                  <input
                    type="url"
                    id="twitter"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-[15px] text-gray-600 mb-2">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="instagram" className="block text-[15px] text-gray-600 mb-2">
                    Instagram
                  </label>                  <input
                    type="url"
                    id="instagram"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  />
                </div>

                <div className="col-span-full">
                  <label htmlFor="association" className="block text-[15px] text-gray-600 mb-2">
                    Select which Association you are a member of <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="association"
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                  >
                    <option value="">-- Select One --</option>
                    <option value="nar">National Association of REALTORS®</option>
                    <option value="car">California Association of REALTORS®</option>
                    <option value="miami">Miami Association of REALTORS®</option>
                    <option value="nyc">Real Estate Board of New York</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="dre" className="block text-[15px] text-gray-600 mb-2">
                    DRE# <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="dre"
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="nmls" className="block text-[15px] text-gray-600 mb-2">
                    NMLS#
                  </label>
                  <input
                    type="text"
                    id="nmls"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  />
                </div>

                <div className="col-span-full">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="agreement"
                      required
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="agreement" className="text-[15px] text-gray-600">
                      Click to view & sign the <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline font-medium">Independent Contractor Agreement</a> terms
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-5 mt-8">
                <button
                  type="submit"
                  className="min-w-[160px] px-10 py-3 bg-red-900 text-white text-[15px] font-medium rounded-lg shadow-sm hover:bg-red-700 hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200"
                >
                  Register Now
                </button>
                <p className="text-sm text-gray-600">
                  Already registered? <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors">Sign in</a>
                </p>
              </div></form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
