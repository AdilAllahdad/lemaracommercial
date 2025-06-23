'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface NewApplicantData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  businessName: string;
  loanAmount: string;
  loanPurpose: string;
  propertyType: string;
  propertyAddress: string;
  message: string;
}

interface ExistingApplicantData {
  email: string;
  password: string;
}

export default function LoanApplicationPage() {
  const [activeTab, setActiveTab] = useState<'new' | 'existing'>('new');  const [newApplicantData, setNewApplicantData] = useState<NewApplicantData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    businessName: '',
    loanAmount: '',
    loanPurpose: '',
    propertyType: '',
    propertyAddress: '',
    message: ''
  });
  const [existingApplicantData, setExistingApplicantData] = useState<ExistingApplicantData>({
    email: '',
    password: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const handleNewApplicantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(newApplicantData);
  };

  const handleExistingApplicantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(existingApplicantData);
  };

  const handleNewApplicantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewApplicantData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      checkPasswordStrength(value);
    }
    if (name === 'confirmPassword' || name === 'password') {
      setPasswordMatch(
        name === 'password' 
          ? value === newApplicantData.confirmPassword
          : newApplicantData.password === value
      );
    }
  };

  const handleExistingApplicantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExistingApplicantData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Styled consistently with About page */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/Loan_RealEstate_a.jpg"
          alt="Commercial Loan Application"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">COMMERCIAL LOAN APPLICATION</h1>
          <div className="h-1 w-24 bg-red-900 mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            Take the first step towards securing your commercial financing with Lemara Commercial
          </p>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            {/* Tabs */}
            <div className="flex">
              <button
                onClick={() => setActiveTab('new')}
                className={`flex-1 py-6 px-6 text-lg font-semibold transition-all duration-300 relative overflow-hidden ${
                  activeTab === 'new'
                    ? 'text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {activeTab === 'new' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#0A3254]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">New Applicant</span>
              </button>
              <button
                onClick={() => setActiveTab('existing')}
                className={`flex-1 py-6 px-6 text-lg font-semibold transition-all duration-300 relative overflow-hidden ${
                  activeTab === 'existing'
                    ? 'text-white'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {activeTab === 'existing' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#0A3254]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Existing Applicant</span>
              </button>
            </div>

            <div className="p-8">
              {activeTab === 'new' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-2xl mx-auto"
                >
                  <form onSubmit={handleNewApplicantSubmit} className="space-y-8">
                    <div className="space-y-6">
                      {/* Name Input */}
                      <div className="relative">
                        <motion.label
                          className={`absolute left-3 transition-all duration-200 ${
                            focusedField === 'name' || newApplicantData.name
                              ? '-top-2.5 text-xs text-[#0A3254] bg-white px-2'
                              : 'top-2.5 text-gray-500'
                          }`}
                          initial={false}
                          animate={{ y: 0 }}
                        >
                          Name
                        </motion.label>
                        <input
                          type="text"
                          name="name"
                          value={newApplicantData.name}
                          onChange={handleNewApplicantChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 border-2 rounded-xl focus:border-[#0A3254] outline-none transition-all duration-200"
                          required
                        />
                      </div>

                      {/* Email Input */}
                      <div className="relative">
                        <motion.label
                          className={`absolute left-3 transition-all duration-200 ${
                            focusedField === 'email' || newApplicantData.email
                              ? '-top-2.5 text-xs text-[#0A3254] bg-white px-2'
                              : 'top-2.5 text-gray-500'
                          }`}
                          initial={false}
                          animate={{ y: 0 }}
                        >
                          Email
                        </motion.label>
                        <input
                          type="email"
                          name="email"
                          value={newApplicantData.email}
                          onChange={handleNewApplicantChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 border-2 rounded-xl focus:border-[#0A3254] outline-none transition-all duration-200"
                          required
                        />
                      </div>

                      {/* Password Input */}
                      <div className="relative">
                        <motion.label
                          className={`absolute left-3 transition-all duration-200 ${
                            focusedField === 'password' || newApplicantData.password
                              ? '-top-2.5 text-xs text-[#0A3254] bg-white px-2'
                              : 'top-2.5 text-gray-500'
                          }`}
                          initial={false}
                          animate={{ y: 0 }}
                        >
                          Password
                        </motion.label>
                        <input
                          type="password"
                          name="password"
                          value={newApplicantData.password}
                          onChange={handleNewApplicantChange}
                          onFocus={() => setFocusedField('password')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 border-2 rounded-xl focus:border-[#0A3254] outline-none transition-all duration-200"
                          required
                        />
                        {newApplicantData.password && (
                          <div className="mt-2">
                            <div className="flex gap-1 h-1">
                              {[1, 2, 3, 4].map((level) => (
                                <motion.div
                                  key={level}
                                  className="flex-1 rounded-full"
                                  initial={{ scaleX: 0 }}
                                  animate={{ 
                                    scaleX: passwordStrength >= level ? 1 : 0,
                                    backgroundColor: 
                                      passwordStrength === 1 ? '#ef4444' :
                                      passwordStrength === 2 ? '#f97316' :
                                      passwordStrength === 3 ? '#eab308' :
                                      passwordStrength === 4 ? '#22c55e' : '#e5e7eb'
                                  }}
                                  transition={{ duration: 0.2 }}
                                />
                              ))}
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              {passwordStrength === 0 && 'Enter a password'}
                              {passwordStrength === 1 && 'Weak password'}
                              {passwordStrength === 2 && 'Fair password'}
                              {passwordStrength === 3 && 'Good password'}
                              {passwordStrength === 4 && 'Strong password'}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Confirm Password Input */}
                      <div className="relative">
                        <motion.label
                          className={`absolute left-3 transition-all duration-200 ${
                            focusedField === 'confirmPassword' || newApplicantData.confirmPassword
                              ? '-top-2.5 text-xs text-[#0A3254] bg-white px-2'
                              : 'top-2.5 text-gray-500'
                          }`}
                          initial={false}
                          animate={{ y: 0 }}
                        >
                          Confirm Password
                        </motion.label>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={newApplicantData.confirmPassword}
                          onChange={handleNewApplicantChange}
                          onFocus={() => setFocusedField('confirmPassword')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 ${
                            newApplicantData.confirmPassword
                              ? passwordMatch
                                ? 'border-green-500'
                                : 'border-red-500'
                              : 'focus:border-[#0A3254]'
                          }`}
                          required
                        />
                        {newApplicantData.confirmPassword && !passwordMatch && (
                          <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-4 justify-center pt-6">
                      <motion.button
                        type="submit"
                        className="bg-[#0A3254] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:bg-[#0c3d66] disabled:opacity-50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={!passwordMatch}
                      >
                        Create Account
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={() => setActiveTab('existing')}
                        className="bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:bg-gray-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Cancel
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-md mx-auto"
                >
                  <form onSubmit={handleExistingApplicantSubmit} className="space-y-6">
                    <div className="relative">
                      <motion.label
                        className={`absolute left-3 transition-all duration-200 ${
                          focusedField === 'existingEmail' || existingApplicantData.email
                            ? '-top-2.5 text-xs text-[#0A3254] bg-white px-2'
                            : 'top-2.5 text-gray-500'
                        }`}
                        initial={false}
                        animate={{ y: 0 }}
                      >
                        Email
                      </motion.label>
                      <input
                        type="email"
                        name="email"
                        value={existingApplicantData.email}
                        onChange={handleExistingApplicantChange}
                        onFocus={() => setFocusedField('existingEmail')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border-2 rounded-xl focus:border-[#0A3254] outline-none transition-all duration-200"
                        required
                      />
                    </div>

                    <div className="relative">
                      <motion.label
                        className={`absolute left-3 transition-all duration-200 ${
                          focusedField === 'existingPassword' || existingApplicantData.password
                            ? '-top-2.5 text-xs text-[#0A3254] bg-white px-2'
                            : 'top-2.5 text-gray-500'
                        }`}
                        initial={false}
                        animate={{ y: 0 }}
                      >
                        Password
                      </motion.label>
                      <input
                        type="password"
                        name="password"
                        value={existingApplicantData.password}
                        onChange={handleExistingApplicantChange}
                        onFocus={() => setFocusedField('existingPassword')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 border-2 rounded-xl focus:border-[#0A3254] outline-none transition-all duration-200"
                        required
                      />
                    </div>

                    <div className="flex justify-center pt-6">
                      <motion.button
                        type="submit"
                        className="w-full bg-[#0A3254] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 hover:bg-[#0c3d66]"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Sign In
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
