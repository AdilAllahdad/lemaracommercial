'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

export interface MapProps {
  location: string;
  listing: {
    title: string;
    price: string;
  };
  center?: [number, number]; // Optional prop to override the default center
}

export const Map = ({ location, listing, center = [36.9741, -122.0308] }: MapProps) => {
  return (
    <div className="h-[400px] rounded-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={13}
        className="h-full w-full"
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            <div className="text-sm">
              <h3 className="font-bold mb-1">{listing.title}</h3>
              <p className="text-gray-600">{location}</p>
              <p className="text-red-900 font-semibold mt-1">{listing.price}</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
