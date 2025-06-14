import Image from 'next/image';

interface PropertyQuickStatsProps {
  yearBuilt?: string;
  floors?: string;
  totalSpace?: string;
  buildingClass?: string;
  lotSize?: string;
}

export default function PropertyQuickStats({
  yearBuilt = 'N/A',
  floors = 'N/A',
  totalSpace = 'N/A',
  buildingClass = 'N/A',
  lotSize = '520 Acres'
}: PropertyQuickStatsProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white px-8 py-6 grid grid-cols-2 md:grid-cols-5 gap-6">
      <div className="group p-4 rounded-lg bg-white hover:shadow-lg transition-all duration-200 border border-transparent hover:border-red-900/10">
        <div className="flex items-center gap-2 mb-2">
          <Image src="/year.svg" alt="" width={20} height={20} className="text-red-900" />
          <h3 className="text-sm font-medium text-red-900">Year Built</h3>
        </div>
        <p className="text-lg font-semibold text-gray-900 group-hover:text-red-900 transition-colors">{yearBuilt}</p>
      </div>
      <div className="group p-4 rounded-lg bg-white hover:shadow-lg transition-all duration-200 border border-transparent hover:border-[#296098]/10">
        <div className="flex items-center gap-2 mb-2">
          <Image src="/floors.svg" alt="" width={20} height={20} className="[color:#296098]" />
          <h3 className="text-sm font-medium [color:#296098]">No Of Floors</h3>
        </div>
        <p className="text-lg font-semibold text-gray-900 group-hover:[color:#296098] transition-colors">{floors}</p>
      </div>
      <div className="group p-4 rounded-lg bg-white hover:shadow-lg transition-all duration-200 border border-transparent hover:border-red-900/10">
        <div className="flex items-center gap-2 mb-2">
          <Image src="/space.svg" alt="" width={20} height={20} className="text-red-900" />
          <h3 className="text-sm font-medium text-red-900">Total Space Available</h3>
        </div>
        <p className="text-lg font-semibold text-gray-900 group-hover:text-red-900 transition-colors">{totalSpace}</p>
      </div>
      <div className="group p-4 rounded-lg bg-white hover:shadow-lg transition-all duration-200 border border-transparent hover:border-[#296098]/10">
        <div className="flex items-center gap-2 mb-2">
          <Image src="/building-class.svg" alt="" width={20} height={20} className="[color:#296098]" />
          <h3 className="text-sm font-medium [color:#296098]">Building Class</h3>
        </div>
        <p className="text-lg font-semibold text-gray-900 group-hover:[color:#296098] transition-colors">{buildingClass}</p>
      </div>
      <div className="group p-4 rounded-lg bg-white hover:shadow-lg transition-all duration-200 border border-transparent hover:border-red-900/10">
        <div className="flex items-center gap-2 mb-2">
          <Image src="/lot-size.svg" alt="" width={20} height={20} className="text-red-900" />
          <h3 className="text-sm font-medium text-red-900">Lot Size</h3>
        </div>
        <p className="text-lg font-semibold text-gray-900 group-hover:text-red-900 transition-colors">{lotSize}</p>
      </div>
    </div>
  );
}
