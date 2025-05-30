import { useState, useEffect } from 'react';

interface AffordabilityProps {
  initialPrice?: number;
  initialNOI?: number;
  initialDownPaymentPercent?: number;
  initialInterestRate?: number;
  initialLoanType?: string;
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
  initialLoanType = '30-years fixed'
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
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-md bg-red-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Affordability</h2>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
          <div>
            <p className="text-sm text-gray-600">Your estimated payment</p>
            <p className="text-3xl font-bold text-gray-900">
              ${monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              <span className="text-sm font-normal text-gray-600">/month*</span>
            </p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-900">Estimated</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Purchase Price"
            value={purchasePrice}
            onChange={(e) => handleNumericChange(setPurchasePrice, e.target.value, 1)}
            suffix="$"
            min={1}
            step={1000}
          />

          <InputField
            label="Net Operating Income"
            value={noi}
            onChange={(e) => handleNumericChange(setNoi, e.target.value, 0)}
            suffix="$"
            min={0}
            step={100}
          />

          <div className="flex gap-4">
            <InputField
              label="Down Payment Amount"
              value={downPaymentAmount.toFixed(2)}
              readOnly
              suffix="$"
            />
            <InputField
              label="Down Payment %"
              value={downPaymentPercent}
              onChange={(e) => handleNumericChange(setDownPaymentPercent, e.target.value, 0, 100)}
              suffix="%"
              min={0}
              max={100}
              step={0.1}
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
          />

          <div className="col-span-2">
            <label className="text-sm text-gray-600 mb-1 block">Loan Type</label>
            <select
              value={loanType}
              onChange={(e) => setLoanType(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-red-500 focus:border-red-500"
            >
              <option value="30-years fixed">30-years fixed</option>
              <option value="15-years fixed">15-years fixed</option>
              <option value="10-years fixed">10-years fixed</option>
              <option value="5-years ARM">5/1 ARM</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}