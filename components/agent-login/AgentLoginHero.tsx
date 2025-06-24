'use client';

import React from 'react';

const AgentLoginHero = () => {
  return (
    <div className="relative bg-gray-900 py-24">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/Herobg.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          opacity: '0.5'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Agent Login
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Welcome back! Access your agent dashboard to manage your listings and client interactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentLoginHero;
