import Image from 'next/image';
import { useState } from 'react';

interface GalleryProps {
  images: string[];
  title: string;
  location: string;
}

export default function Gallery({ images, title, location }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <div className="relative">
        <div className="w-full aspect-[21/9] relative overflow-hidden bg-gray-100">
          <Image
            src={images[selectedImage]}
            alt={`${title} - Image ${selectedImage + 1}`}
            width={2100}
            height={900}
            priority={true}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

      {/* Image Navigation */}
      {images.length > 1 && (
        <>
          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2 bg-black bg-opacity-50 rounded-lg p-2">
              {images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 rounded-md overflow-hidden transition-opacity ${
                    selectedImage === index ? 'opacity-100 ring-2 ring-white' : 'opacity-50 hover:opacity-75'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setSelectedImage(prev => (prev > 0 ? prev - 1 : images.length - 1))}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setSelectedImage(prev => (prev < images.length - 1 ? prev + 1 : 0))}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
      </div>

      {/* Title Overlay */}
      <div className="bg-white px-8 py-6 border-b">
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
        <p className="text-xl text-gray-600 mt-2">{location}</p>
      </div>
    </>
  );
}
