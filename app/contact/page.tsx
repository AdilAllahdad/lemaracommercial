'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <Image
          src="/images/service2.jpg"
          alt="Contact Lemara Commercial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>          <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl">
            Call us at <a href="tel:1-800-568-0850" className="text-red-600">1-800-568-0850</a>
          </p>
        </div>
      </section>      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 border border-gray-100">
            <div className="text-center mb-8">              <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
              <div className="h-1 w-24 bg-red-900 mx-auto my-4"></div>
              <p className="text-gray-600">We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">                    First Name <span className="text-red-900">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900 transition-colors"
                  />
                </div>
                <div>                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900 transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                    E-mail <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900 transition-colors"
                  />
                </div>
                <div>                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900 transition-colors"
                  />
                </div>
              </div>

              <div>                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                  Questions or Comments <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="How can we help you today?"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-2 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-900 focus:ring-1 focus:ring-red-900 transition-colors resize-none"
                ></textarea>
              </div>

              <div>                <label htmlFor="captcha" className="block text-sm font-semibold text-gray-900">
                  Captcha Verification <span className="text-red-600">*</span>
                </label>
                <div className="mt-2">
                  {/* Add your captcha component here */}
                  <div className="bg-gray-50 border border-gray-200 p-4 rounded-md text-center">
                    <span className="text-gray-500">Captcha Verification</span>
                  </div>
                </div>
              </div>              <div className="text-center mt-10">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex justify-center py-4 px-12 border border-transparent text-base font-semibold rounded-md text-white bg-red-900 hover:bg-red-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  {/* Office Information Section */}      
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-transparent hover:border-red-600">
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
            
            <div className="group bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-transparent hover:border-red-600">
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

            <div className="group bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-transparent hover:border-red-600">
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
