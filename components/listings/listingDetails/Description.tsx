import Image from 'next/image';
import { useState } from 'react';

interface DescriptionProps {
  highlight: string;
  mainDescription: string;
  infrastructure: {
    title: string;
    items: string[];
  };
  financialHighlights: {
    title: string;
    items: string[];
  };
  currentStatus: string;
  cultivationInfo: {
    description: string;
    items: string[];
  };
  specialRemarks: {
    description: string;
    items: string[];
  };
  floorPlan?: string;
  disclaimer: string;
}

export default function Description({
  highlight,
  mainDescription,
  infrastructure,
  financialHighlights,
  currentStatus,
  cultivationInfo,
  specialRemarks,
  floorPlan,
  disclaimer
}: DescriptionProps) {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [isCultivationOpen, setIsCultivationOpen] = useState(false);
  const [isSpecialRemarksOpen, setIsSpecialRemarksOpen] = useState(false);
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  return (
    <div className="px-8 py-10 bg-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-md bg-red-50">
          <Image src="/file.svg" alt="" width={24} height={24} className="text-red-900" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Description</h2>
      </div>

      <div className="space-y-8">
        {/* Highlight Box */}
        <div className="bg-red-50/50 border border-b rounded-xl p-6">
          <p className="text-lg text-gray-900 font-medium">{highlight}</p>
        </div>

        {/* Main Description */}
        <div className="space-y-6 text-gray-600">
          <p className="leading-relaxed">{mainDescription}</p>

          {/* Property Features */}
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">{infrastructure.title}</h3>
              <ul className="space-y-3">
                {infrastructure.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">{financialHighlights.title}</h3>
              <ul className="space-y-3">
                {financialHighlights.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Current Status */}
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <button 
              onClick={() => setIsStatusOpen(!isStatusOpen)}
              className="w-full p-6 flex justify-between items-center hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">Current Status & Growth Potential</h3>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isStatusOpen ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isStatusOpen && (
              <div className="p-6 pt-0">
                <p className="leading-relaxed text-gray-600">{currentStatus}</p>
              </div>
            )}
          </div>

          {/* Cultivation Info */}
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <button 
              onClick={() => setIsCultivationOpen(!isCultivationOpen)}
              className="w-full p-6 flex justify-between items-center hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">Cultivation Information</h3>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isCultivationOpen ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isCultivationOpen && (
              <div className="p-6 pt-0 space-y-4">
                <p className="leading-relaxed text-gray-600">{cultivationInfo.description}</p>
                <ul className="space-y-3 text-gray-600">
                  {cultivationInfo.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Special Remarks Section */}
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <button 
              onClick={() => setIsSpecialRemarksOpen(!isSpecialRemarksOpen)}
              className="w-full p-6 flex justify-between items-center hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">Special Remarks</h3>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isSpecialRemarksOpen ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isSpecialRemarksOpen && (
              <div className="p-6 pt-0">
                <div className="space-y-4 text-gray-600">
                  <p className="leading-relaxed">{specialRemarks.description}</p>
                  <ul className="space-y-3">
                    {specialRemarks.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-900 mt-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-4 bg-red-50/50 border border-red-100 rounded-lg">
                    <p className="text-red-900 text-sm">
                      We are not permitted to provide any more information without the signed NDA
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Floor Plan Section */}
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <button 
              onClick={() => setIsFloorPlanOpen(!isFloorPlanOpen)}
              className="w-full p-6 flex justify-between items-center hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">Floor Plan</h3>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isFloorPlanOpen ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isFloorPlanOpen && (
              <div className="p-6 pt-0">
                <p className="leading-relaxed text-gray-600">
                  {floorPlan || 'No floor plan available.'}
                </p>
              </div>
            )}
          </div>

          {/* Disclaimer Section */}
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <button 
              onClick={() => setIsDisclaimerOpen(!isDisclaimerOpen)}
              className="w-full p-6 flex justify-between items-center hover:bg-gray-100 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">Disclaimer</h3>
              <svg 
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isDisclaimerOpen ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isDisclaimerOpen && (
              <div className="p-6 pt-0">
                <p className="leading-relaxed text-gray-600">{disclaimer}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
