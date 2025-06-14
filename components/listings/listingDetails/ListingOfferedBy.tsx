'use client';
import Image from 'next/image';

interface Agent {
  name: string;
  title: string;
  license: string;
  image: string;
  phone: string;
  email: string;
}

interface ListingOfferedByProps {
  agent: Agent;
}

export function ListingOfferedBy({ agent }: ListingOfferedByProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <h2 className="text-2xl font-semibold mb-4">Listing Offered By</h2>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full overflow-hidden relative">
          <Image 
            src={agent.image} 
            alt={agent.name} 
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-medium">{agent.name}</h3>
          <p className="text-gray-600">{agent.title}</p>
          <p className="text-sm text-gray-500">License #{agent.license}</p>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <a
          href={`tel:${agent.phone}`}
          className="w-full block text-center py-2 bg-maroon-700 text-white rounded-lg hover:bg-maroon-800 transition-colors"
        >
          Call Now
        </a>
        <a
          href={`mailto:${agent.email}`}
          className="w-full block text-center py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Email
        </a>
      </div>
    </div>
  );
}
