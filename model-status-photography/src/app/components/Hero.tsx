'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {src: '/images/skater.jpg', alt: 'Male Skater'},
  {src: '/images/love_love.jpg', alt: 'A Couple Hugging'},
  {src: '/images/maternity.jpg', alt: 'Maternity Photo'},
  {src: '/images/morgan_burlesque.jpg', alt: 'Burlesque Model'},
  {src: '/images/avante_s.jpg', alt: 'Female Model'},
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className="relative w-4/5 h-3/5">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image 
              src={image.src} 
              alt={image.alt} 
              layout='fill' 
              objectFit='cover' 
              className="rounded-ld shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;