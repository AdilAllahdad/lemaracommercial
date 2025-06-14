import Image from 'next/image';

interface AnalysisGridProps {
  financialAnalysis?: {
    cashOnCashReturn?: string;
    irr?: string;
    capRate?: string;
    grossRentMultiplier?: string;
    operatingExpenseRatio?: string;
    debtCoverageRatio?: string;
  };
  operatingAnalysis?: {
    grossIncome?: string;
    totalExpenses?: string;
    netOperatingIncome?: string;
    annualDebtService?: string;
    cashFlowBeforeTaxes?: string;
  };
  marketAnalysis?: {
    propertyType?: string;
    submarket?: string;
    yearBuilt?: string;
    lotSize?: string;
  };
}

export default function AnalysisGrid({
  financialAnalysis = {
    cashOnCashReturn: 'N/A',
    irr: 'N/A',
    capRate: '0.00%',
    grossRentMultiplier: 'N/A',
    operatingExpenseRatio: 'N/A',
    debtCoverageRatio: '0.00'
  },
  operatingAnalysis = {
    grossIncome: 'N/A',
    totalExpenses: 'N/A',
    netOperatingIncome: 'N/A',
    annualDebtService: '$269,157.39',
    cashFlowBeforeTaxes: 'N/A'
  }
}: AnalysisGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 border-b">
      {/* Financial Analysis */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-white">
            <Image src="/metrics.svg" alt="" width={24} height={24} className="text-red-900" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Financial Analysis</h2>
        </div>
        
        <div className="grid gap-4">
          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">Cash On Cash Return</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{financialAnalysis.cashOnCashReturn}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-900">Annual</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm font-medium text-gray-600">Internal Rate of Return (IRR)</p>
              <p className="text-xl font-bold text-gray-900 mt-1">{financialAnalysis.irr}</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm font-medium text-gray-600">Capitalization Rate</p>
              <p className="text-xl font-bold text-gray-900 mt-1">{financialAnalysis.capRate}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm font-medium text-gray-600">Gross Rent Multiplier</p>
              <p className="text-xl font-bold text-gray-900 mt-1">{financialAnalysis.grossRentMultiplier}</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm font-medium text-gray-600">Operating Expense Ratio</p>
              <p className="text-xl font-bold text-gray-900 mt-1">{financialAnalysis.operatingExpenseRatio}</p>
            </div>
          </div>
          
          <div className="bg-red-900 rounded-xl p-6 text-white">
            <p className="text-sm font-medium">Debt Coverage Ratio (DCR)</p>
            <p className="text-3xl font-bold mt-1">{financialAnalysis.debtCoverageRatio}</p>
            <p className="text-sm mt-2">Minimum ratio required by most lenders: 1.25</p>
          </div>
        </div>
      </div>

      {/* Operating Analysis */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-white">
            <Image src="/operations.svg" alt="" width={24} height={24} className="text-red-900" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Operating Analysis</h2>
        </div>

        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm font-medium text-gray-600">Gross Income</p>
              <p className="text-xl font-bold text-gray-900 mt-1">{operatingAnalysis.grossIncome}</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <p className="text-sm font-medium text-gray-600">Total Expenses</p>
              <p className="text-xl font-bold text-gray-900 mt-1">{operatingAnalysis.totalExpenses}</p>
            </div>
          </div>
          
          <div className="bg-red-900 rounded-xl p-6 text-white">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium">Net Operating Income (NOI)</p>
                <p className="text-3xl font-bold mt-1">{operatingAnalysis.netOperatingIncome}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white">Annual</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
            <p className="text-sm font-medium text-gray-600">Annual Debt Service</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{operatingAnalysis.annualDebtService}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <p className="text-sm text-red-500">Fixed Annual Payment</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6">
            <p className="text-sm font-medium text-gray-600">Cash Flow Before Taxes (CFBT)</p>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-2xl font-bold text-gray-900">{operatingAnalysis.cashFlowBeforeTaxes}</p>
              <p className="text-sm text-gray-500">per year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
