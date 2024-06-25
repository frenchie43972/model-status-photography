'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  images: {src: string, alt: string} [];
  currentImageIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({images, currentImageIndex, isOpen, onClose}) => {
  const [currentIndex, setCurrentIndex] = useState(currentImageIndex);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentIndex(currentImageIndex);
  }, [currentImageIndex]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key == 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('keyup', handleKeyPress);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.addEventListener('keyup', handleKeyPress);
      document.addEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <div ref={modalRef} className="relative max-w-4xl w-full p-12 rounded-lg shadow-lg flex">
        <button onClick={onClose} className="absolute top-4 right-4 text-3xl z-10">
          <AiOutlineClose/>
        </button>
        <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl z-10">
          <AiOutlineLeft/>
        </button>
       
        <div className="relative w-full h-0 pb-[75%]">
          <Image 
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            style={{ objectFit: 'contain' }}
            className="rounded-lg"
          />
        </div>
        <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl">
          <AiOutlineRight/>
        </button>
      </div>
    </div> 
  );
};

export default Modal;

