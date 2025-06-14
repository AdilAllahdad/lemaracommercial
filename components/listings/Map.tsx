'use client';

import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect, useCallback, useRef } from 'react';

export interface MapProps {
  location: string;
  listing: {
    title: string;
    price: string;
  };
  center?: { lat: number; lng: number };
}

const mapContainerStyle = {
  height: '400px',
  width: '100%'
};

const defaultCenter = { lat: 36.9741, lng: -122.0308 };

const mapOptions = {
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }
  ],
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: true,
};

export const Map = ({ location = '', listing }: MapProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
    setMap(null);
  }, []);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const geocodeLocation = async () => {
      if (!location?.trim()) {
        if (isMounted) {
          setMapCenter(defaultCenter);
          setIsLoading(false);
        }
        return;
      }

      // Make sure Google Maps is loaded
      if (typeof window === 'undefined' || !window.google?.maps) {
        timeoutId = setTimeout(geocodeLocation, 1000); // Retry after 1 second
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const geocoder = new window.google.maps.Geocoder();
          const geocodeResult = await new Promise<{ lat: number; lng: number }>((resolve, reject) => {
          geocoder.geocode({ address: location }, (
            results: google.maps.GeocoderResult[] | null,
            status: google.maps.GeocoderStatus
          ) => {
            if (status === 'OK' && Array.isArray(results) && results.length > 0) {
              const loc = results[0].geometry?.location;
              if (loc) {
                resolve({
                  lat: loc.lat(),
                  lng: loc.lng()
                });
              } else {
                reject(new Error('No location data in geocoding result'));
              }
            } else {
              reject(new Error(`Geocoding failed: ${status}`));
            }
          });
        });

        if (isMounted) {
          setMapCenter(geocodeResult);
          setError(null);

          if (mapRef.current) {
            mapRef.current.panTo(geocodeResult);
          }
        }
      } catch (err) {
        if (isMounted) {
          console.error('Geocoding error:', err);
          setError((err as Error).message || 'Failed to load location');
          setMapCenter(defaultCenter);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    geocodeLocation();

    return () => {
      isMounted = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [location]);

  if (isLoading) {
    return (
      <div className="h-[400px] w-full flex items-center justify-center bg-gray-100">
        <div className="animate-pulse">Loading map...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[400px] w-full flex items-center justify-center bg-gray-100">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={mapCenter}
        zoom={13}
        options={mapOptions}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {mapCenter && (
          <Marker
            position={mapCenter}
            onClick={() => setIsOpen(true)}
          >
            {isOpen && (
              <InfoWindow 
                position={mapCenter}
                onCloseClick={() => setIsOpen(false)}
              >
                <div className="text-sm">
                  <h3 className="font-bold mb-1">{listing.title}</h3>
                  <p className="text-gray-600">{location}</p>
                  <p className="text-red-900 font-semibold mt-1">{listing.price}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        )}
      </GoogleMap>
    </div>
  );
};
