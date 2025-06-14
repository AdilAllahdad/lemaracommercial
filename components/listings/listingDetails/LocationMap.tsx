import Image from 'next/image';
import { Map } from '@/components/listings';
import { GoogleMapsWrapper } from '@/components/listings/GoogleMapsWrapper';

interface LocationMapProps {
  location: string;
  listing: {
    title: string;
    price: string;
  };
}

export default function LocationMap({ location, listing }: LocationMapProps) {
  return (
    <div className="px-8 py-10 bg-white border-t">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-md bg-red-50">
          <Image src="/globe.svg" alt="" width={24} height={24} className="text-red-900" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Location</h2>
      </div>

      <div className="rounded-xl overflow-hidden shadow-lg">
        <GoogleMapsWrapper>
          <Map
            location={location}
            listing={listing}
          />
        </GoogleMapsWrapper>
      </div>
    </div>
  );
}
