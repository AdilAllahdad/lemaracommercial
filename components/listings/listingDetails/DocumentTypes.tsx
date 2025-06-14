import Image from 'next/image';

export default function DocumentTypes() {
  return (
    <div className="bg-white px-8 py-6 border-b">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="grid grid-cols-5 gap-8">
          <button className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors">
              <Image src="/flyer.svg" alt="Flyer" width={32} height={32} className="text-gray-600 group-hover:[color:#296098] group-hover:scale-110 transition-all" />
            </div>
            <span className="text-sm text-gray-600 group-hover:[color:#296098]">Flyer</span>
          </button>
          <button className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-red-50 transition-colors">
              <Image src="/private-om.svg" alt="Private OM" width={32} height={32} className="text-gray-600 group-hover:text-red-900 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-sm text-gray-600 group-hover:text-red-900">Private OM</span>
          </button>
          <button className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors">
              <Image src="/financial.svg" alt="Financial" width={32} height={32} className="text-gray-600 group-hover:[color:#296098] group-hover:scale-110 transition-all" />
            </div>
            <span className="text-sm text-gray-600 group-hover:[color:#296098]">Financial</span>
          </button>
          <button className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-red-50 transition-colors">
              <Image src="/due-diligence.svg" alt="Due Diligence" width={32} height={32} className="text-gray-600 group-hover:text-red-900 group-hover:scale-110 transition-all" />
            </div>
            <span className="text-sm text-gray-600 group-hover:text-red-900">Due Diligence</span>
          </button>
          <button className="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-200 hover:-translate-y-1">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors">
              <Image src="/additional-docs.svg" alt="Additional Documents" width={32} height={32} className="text-gray-600 group-hover:[color:#296098] group-hover:scale-110 transition-all" />
            </div>
            <span className="text-sm text-gray-600 group-hover:[color:#296098]">Additional Documents</span>
          </button>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-red-900 text-white rounded-md hover:bg-red-800 transition-colors">
            Submit LOI
          </button>
          <button className="px-6 py-2 [background-color:#296098] text-white rounded-md hover:bg-blue-700 transition-colors">
            Submit POF
          </button>
        </div>
      </div>
    </div>
  );
}
