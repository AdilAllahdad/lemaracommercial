import Image from 'next/image';

interface FinancialQuickStatsProps {
  purchasePrice?: string;
  grossIncome?: string;
  monthlyCashFlow?: string;
  cashOnCashReturn?: string;
}

export default function FinancialQuickStats({
  purchasePrice = '$9,990,000',
  grossIncome = 'N/A',
  monthlyCashFlow = '$--',
  cashOnCashReturn = 'N/A'
}: FinancialQuickStatsProps) {
  return (
    <div className="bg-white px-8 py-6 grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-b">
      <div className="group p-4 rounded-lg hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100/50 transition-all duration-200">
        <div className="flex items-center gap-2 mb-2">
          <Image src="/price.svg" alt="" width={20} height={20} className="text-red-900" />
          <h3 className="text-sm font-medium text-red-900">Purchase Price</h3>
        </div>
        <p className="text-lg font-semibold text-gray-900 group-hover:text-red-900 transition-colors">{purchasePrice}</p>
      </div>
      <div className="group p-4 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100/50 transition-all duration-200">
        <div className="flex items-center gap-2 mb-2">
          <Image src="/income.svg" alt="" width={20} height={20} className="[color:#296098]" />
          <h3 className="text-sm font-medium [color:#296098]">Gross Income / MO</h3>
        </div>
        <p className="text-lg font-semibold text-gray-900 group-hover:[color:#296098] transition-colors">{grossIncome}</p>
      </div>
      <div className="group p-4 rounded-lg hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100/50 transition-all duration-200">
        <div className="flex items-center gap-2 mb-2">
          <Image src="/cash-flow.svg" alt="" width={20} height={20} className="text-red-900" />
          <h3 className="text-sm font-medium text-red-900">Monthly Cash Flow</h3>
        </div>
        <p className="text-lg font-semibold text-gray-900 group-hover:text-red-900 transition-colors">{monthlyCashFlow}</p>
      </div>
      <div className="group p-4 rounded-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100/50 transition-all duration-200">
        <div className="flex items-center gap-2 mb-2">
          <Image src="/return.svg" alt="" width={20} height={20} className="[color:#296098]" />
          <h3 className="text-sm font-medium [color:#296098]">Cash On Cash Return</h3>
        </div>
        <p className="text-lg font-semibold text-gray-900 group-hover:[color:#296098] transition-colors">{cashOnCashReturn}</p>
      </div>
    </div>
  );
}
