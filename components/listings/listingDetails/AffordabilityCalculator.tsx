import { useState, useEffect } from 'react';
import { Agent } from '@/app/data/agent';
import Image from 'next/image';

interface AffordabilityProps {
  initialPrice?: number;
  initialNOI?: number;
  initialDownPaymentPercent?: number;
  initialInterestRate?: number;
  initialLoanType?: string;
  agent: Agent;
}

interface InputFieldProps {
  label: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  suffix?: string;
  className?: string;
  readOnly?: boolean;
  min?: number;
  max?: number;
  step?: number;
}

const InputField = ({ 
  label, 
  value, 
  onChange, 
  type = "number", 
  suffix, 
  className = "",
  readOnly = false,
  min,
  max,
  step = 0.01
}: InputFieldProps) => (
  <div className="relative">
    <label className="text-sm text-gray-600 mb-1 block">{label}</label>
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        min={min}
        max={max}
        step={step}
        className={`w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-red-500 focus:border-red-500 ${
          readOnly ? 'bg-gray-50 cursor-not-allowed text-gray-500' : ''
        } ${className}`}
        aria-label={label}
      />
      {suffix && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
          {suffix}
        </span>
      )}
    </div>
  </div>
);

export default function AffordabilityCalculator({
  initialPrice = 4000000,
  initialNOI = 0,
  initialDownPaymentPercent = 50,
  initialInterestRate = 3.8,
  initialLoanType = '30-years fixed',
  agent
}: AffordabilityProps) {
  const [purchasePrice, setPurchasePrice] = useState(initialPrice);
  const [noi, setNoi] = useState(initialNOI);
  const [downPaymentPercent, setDownPaymentPercent] = useState(initialDownPaymentPercent);
  const [interestRate, setInterestRate] = useState(initialInterestRate);
  const [loanType, setLoanType] = useState(initialLoanType);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  // Calculate down payment amount based on percentage
  const downPaymentAmount = (purchasePrice * downPaymentPercent) / 100;

  // Handle numeric input changes with validation
  const handleNumericChange = (setter: (value: number) => void, value: string, min = 0, max?: number) => {
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue >= min && (!max || numValue <= max)) {
      setter(numValue);
    }
  };

  // Calculate monthly payment
  useEffect(() => {
    if (purchasePrice <= 0 || downPaymentPercent <= 0 || interestRate <= 0) {
      setMonthlyPayment(0);
      return;
    }

    const loanAmount = purchasePrice - downPaymentAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanType === '15-years fixed' ? 180 : 
                           loanType === '10-years fixed' ? 120 :
                           loanType === '5-years ARM' ? 60 : 360; // Default to 30 years
    
    if (monthlyRate === 0) {
      setMonthlyPayment(loanAmount / numberOfPayments);
    } else {
      const monthlyPayment = loanAmount * 
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      
      setMonthlyPayment(monthlyPayment || 0);
    }
  }, [purchasePrice, downPaymentAmount, interestRate, loanType, downPaymentPercent]);

  return (
    <div className="space-y-4 px-6 lg:px-8 py-8 bg-gray-50">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-red-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Affordability Calculator</h2>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
        {/* Estimated Payment Section */}
        <div className="mb-8 pb-8 border-b border-gray-100">
          <p className="text-sm text-gray-600 mb-2">Your estimated payment</p>
          <div className="flex items-center justify-between">
            <p className="text-4xl font-bold text-gray-900">
              ${monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              <span className="text-base font-normal text-gray-600 ml-1">/month*</span>
            </p>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-900">Estimated</span>
          </div>
        </div>

        {/* Input Fields Section */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <InputField
              label="Purchase Price"
              value={purchasePrice}
              onChange={(e) => handleNumericChange(setPurchasePrice, e.target.value, 1)}
              suffix="$"
              min={1}
              step={1000}
              className="p-3 text-lg"
            />

            <InputField
              label="Net Operating Income"
              value={noi}
              onChange={(e) => handleNumericChange(setNoi, e.target.value, 0)}
              suffix="$"
              min={0}
              step={100}
              className="p-3 text-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex gap-6">
              <InputField
                label="Down Payment Amount"
                value={downPaymentAmount.toFixed(2)}
                readOnly
                suffix="$"
                className="p-3 text-lg"
              />
              <InputField
                label="Down Payment %"
                value={downPaymentPercent}
                onChange={(e) => handleNumericChange(setDownPaymentPercent, e.target.value, 0, 100)}
                suffix="%"
                min={0}
                max={100}
                step={0.1}
                className="p-3 text-lg"
              />
            </div>

            <InputField
              label="Interest Rate"
              value={interestRate}
              onChange={(e) => handleNumericChange(setInterestRate, e.target.value, 0, 100)}
              suffix="%"
              min={0}
              max={100}
              step={0.1}
              className="p-3 text-lg"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 mb-2 block">Loan Type</label>
            <select
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              className="w-full p-3.5 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
            >
              <option value="30-years fixed">30-years fixed</option>
              <option value="15-years fixed">15-years fixed</option>
              <option value="10-years fixed">10-years fixed</option>
              <option value="5-years ARM">5/1 ARM</option>
            </select>
          </div>
        </div>

        {/* Listing Offered By Section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-red-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Listing Offered By</h2>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-red-200 transition-colors duration-200">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-100 border-2 border-red-100">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
                  <span className="px-2.5 py-1 bg-red-50 text-red-900 text-xs font-medium rounded-full">Featured Agent</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{agent.title}</p>
                <p className="text-xs text-gray-500 mt-1">License #{agent.license}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <a href={`tel:${agent.phone}`} className="flex items-center justify-center gap-2 px-6 py-3.5 bg-red-900 text-white rounded-xl hover:bg-red-800 transition-all duration-200 shadow-sm hover:shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">Call Now</span>
              </a>
              <a href={`mailto:${agent.email}`} className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:border-red-200 hover:bg-red-50/20 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}