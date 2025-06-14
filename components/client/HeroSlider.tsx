"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ['/images/slider1.jpg', '/images/slider2.jpg', '/images/slider3.jpg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      {/* Background Image Slider */}
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            fill
            sizes="100vw"
            quality={85}
            className="object-cover"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </>
  )
}

export default HeroSlider
