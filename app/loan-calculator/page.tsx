'use client';

import Image from 'next/image';
import { useState } from 'react';
import { LoanCalculatorHero } from '@/components/loan-calculator/LoanCalculatorHero';

interface AmortizationRow {
  paymentDate: string;
  monthlyPayment: number;
  principalAmt: number;
  interestAmt: number;
  balanceAmt: number;
}

export default function LoanCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [payoffDate, setPayoffDate] = useState<string>('--/----');
  const [amortizationSchedule, setAmortizationSchedule] = useState<AmortizationRow[]>([]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const calculateAmortizationSchedule = (
    principal: number,
    annualRate: number,
    months: number
  ): AmortizationRow[] => {
    const monthlyRate = annualRate / 100 / 12;
    const monthlyPmt = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                      (Math.pow(1 + monthlyRate, months) - 1);
    
    let balance = principal;
    const schedule: AmortizationRow[] = [];
    const startDate = new Date();

    for (let i = 0; i < months; i++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyPmt - interestPayment;
      balance -= principalPayment;

      const paymentDate = new Date(startDate);
      paymentDate.setMonth(startDate.getMonth() + i);

      schedule.push({
        paymentDate: `${paymentDate.toLocaleString('default', { month: 'short' })} ${paymentDate.getFullYear()}`,
        monthlyPayment: monthlyPmt,
        principalAmt: principalPayment,
        interestAmt: interestPayment,
        balanceAmt: Math.max(0, balance),
      });
    }

    return schedule;
  };

  const calculateLoan = (e: React.FormEvent) => {
    e.preventDefault();
    
    const principal = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfMonths = parseFloat(loanTerm);

    if (isNaN(principal) || isNaN(monthlyRate) || isNaN(numberOfMonths)) {
      alert('Please enter valid numbers for all fields');
      return;
    }

    // Calculate monthly payment using the loan payment formula
    const monthlyPmt = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) / 
                      (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

    const totalPmt = monthlyPmt * numberOfMonths;
    const totalInt = totalPmt - principal;

    // Calculate payoff date
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + numberOfMonths);
    const payoffDateStr = `${String(endDate.getMonth() + 1).padStart(2, '0')}/${endDate.getFullYear()}`;

    // Calculate amortization schedule
    const schedule = calculateAmortizationSchedule(principal, parseFloat(interestRate), numberOfMonths);

    setMonthlyPayment(monthlyPmt);
    setTotalPayment(totalPmt);
    setTotalInterest(totalInt);
    setPayoffDate(payoffDateStr);
    setAmortizationSchedule(schedule);
  };

  return (
    <main className="min-h-screen bg-white">
      <LoanCalculatorHero />
      
      {/* EMI Explanation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">What is EMI?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Equated Monthly Installment - EMI for short - is the amount payable every month to the bank or any other financial institution until the loan 
              amount is fully paid off. It consists of the interest on loan as well as part of the principal amount to be repaid. The sum of principal amount 
              and interest is divided by the tenure, i.e., number of months, in which the loan has to be repaid. This amount has to be paid monthly.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The interest component of the EMI would be larger during the initial months and gradually reduce with each payment. The exact percentage 
              allocated towards payment of the principal depends on the interest rate. Even though your monthly EMI payment won't change, the 
              proportion of principal and interest components will change with time. With each successive payment, you'll pay more towards the principal 
              and less in interest.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator and Schedule Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Calculator Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Calculator Form */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Loan Calculator</h2>
              
              <form onSubmit={calculateLoan} className="space-y-6">
                <div className="grid gap-4">
                  <div className="relative">
                    <label className="block text-gray-700 mb-1.5 font-medium text-sm" htmlFor="loanAmount">
                      Loan Amount($):
                    </label>
                    <input
                      type="number"
                      id="loanAmount"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-900 bg-gray-50 text-sm"
                      required
                      placeholder="100000"
                    />
                  </div>
                  
                  <div className="relative">
                    <label className="block text-gray-700 mb-1.5 font-medium text-sm" htmlFor="interestRate">
                      Interest Rate(%):
                    </label>
                    <input
                      type="number"
                      id="interestRate"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-900 bg-gray-50 text-sm"
                      required
                      step="0.01"
                      placeholder="10"
                    />
                  </div>
                  
                  <div className="relative">
                    <label className="block text-gray-700 mb-1.5 font-medium text-sm" htmlFor="loanTerm">
                      Loan Terms(months):
                    </label>
                    <input
                      type="number"
                      id="loanTerm"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-900 bg-gray-50 text-sm"
                      required
                      placeholder="60"
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-gray-700 mb-1.5 font-medium text-sm" htmlFor="startDate">
                      Start Date(mm/yyyy):
                    </label>
                    <input
                      type="text"
                      id="startDate"
                      defaultValue="06/2025"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-900 bg-gray-50 text-sm"
                      placeholder="06/2025"
                      readOnly
                    />
                  </div>
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="bg-red-900 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition duration-300 text-sm font-semibold shadow-md hover:shadow-lg"
                  >
                    Calculate
                  </button>
                </div>
              </form>
            </div>

            {/* Results Display */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden p-6">
              <div className="text-center bg-white rounded-lg p-4 shadow mb-6">
                <h4 className="text-sm text-gray-600 mb-1">Monthly Payment (EMI)</h4>
                <p className="text-4xl font-bold text-red-900">
                  ${monthlyPayment ? monthlyPayment.toFixed(2) : '0.00'}
                </p>
              </div>

              <h3 className="text-lg font-bold mb-4 text-gray-800">Your Loan Estimate Details:</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Total Principal:</span>
                  <span className="text-sm font-bold text-gray-800">
                    ${parseFloat(loanAmount || '0').toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Total Interest:</span>
                  <span className="text-sm font-bold text-gray-800">
                    ${totalInterest ? totalInterest.toFixed(2) : '0.00'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Total Payment:</span>
                  <span className="text-sm font-bold text-gray-800">
                    ${totalPayment ? totalPayment.toFixed(2) : '0.00'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Payoff Date:</span>
                  <span className="text-sm font-bold text-gray-800">
                    {payoffDate}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Amortization Schedule Table */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-red-900">
              <h2 className="text-2xl font-bold text-white">Amortization Schedule</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider border-b">
                      Payment Date
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600 uppercase tracking-wider border-b">
                      Monthly Payment
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600 uppercase tracking-wider border-b">
                      Principal Amount
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600 uppercase tracking-wider border-b">
                      Interest Amount
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600 uppercase tracking-wider border-b">
                      Balance Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {amortizationSchedule.length > 0 ? (
                    amortizationSchedule.map((row, index) => (
                      <tr
                        key={index}
                        className={`hover:bg-gray-50 transition-colors ${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }`}
                      >
                        <td className="px-6 py-4 text-left text-sm text-gray-900 font-medium whitespace-nowrap border-b border-gray-200">
                          {row.paymentDate}
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-gray-900 whitespace-nowrap border-b border-gray-200">
                          {formatCurrency(row.monthlyPayment)}
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-gray-900 whitespace-nowrap border-b border-gray-200">
                          {formatCurrency(row.principalAmt)}
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-gray-900 whitespace-nowrap border-b border-gray-200">
                          {formatCurrency(row.interestAmt)}
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-gray-900 font-medium whitespace-nowrap border-b border-gray-200">
                          {formatCurrency(row.balanceAmt)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    // Show example rows when no calculation has been made
                    [...Array(12)].map((_, index) => (
                      <tr
                        key={index}
                        className={`hover:bg-gray-50 transition-colors ${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }`}
                      >
                        <td className="px-6 py-4 text-left text-sm text-gray-400 font-medium whitespace-nowrap border-b border-gray-200">
                          MM/YYYY
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-gray-400 whitespace-nowrap border-b border-gray-200">
                          $0.00
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-gray-400 whitespace-nowrap border-b border-gray-200">
                          $0.00
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-gray-400 whitespace-nowrap border-b border-gray-200">
                          $0.00
                        </td>
                        <td className="px-6 py-4 text-right text-sm text-gray-400 font-medium whitespace-nowrap border-b border-gray-200">
                          $0.00
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
