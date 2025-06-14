'use client';

import { LoadScript, Libraries } from '@react-google-maps/api';
import { ReactNode, memo, useEffect, useState } from 'react';

const libraries: Libraries = ["places", "geometry", "drawing"];

declare global {
  interface Window {
    google?: typeof google | undefined;
  }
}

export const GoogleMapsWrapper = memo(function GoogleMapsWrapper({ 
  children 
}: { 
  children: ReactNode 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<Error | null>(null);

  useEffect(() => {
    // Cleanup function to remove Google Maps script when component unmounts
    return () => {
      if (window.google) {
        const scripts = document.getElementsByTagName('script');
        for (let i = scripts.length - 1; i >= 0; i--) {
          const script = scripts[i];
          if (script.src.includes('maps.googleapis.com/maps/api')) {
            script.remove();
          }
        }        const w = window as { google?: typeof google };
        delete w.google;
      }
    };
  }, []);

  if (loadError) {
    return <div>Error loading Google Maps: {loadError.message}</div>;
  }

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyCOBUS_ENB_ZGlNqNdRojb05EMne_V8-7o"}
      libraries={libraries}
      loadingElement={<div>Loading Google Maps...</div>}
      onLoad={() => {
        console.log('Google Maps script loaded successfully');
        setIsLoaded(true);
      }}
      onError={(error) => {
        console.error('Error loading Google Maps script:', error);
        setLoadError(error);
      }}
      onUnmount={() => {
        setIsLoaded(false);
      }}
    >
      {isLoaded && children}
    </LoadScript>
  );
});
