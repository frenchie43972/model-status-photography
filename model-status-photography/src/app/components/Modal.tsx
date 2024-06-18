'use client';

import { useState } from "react";
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

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative max-w-3xl w-full p-4 rounded-lg shadow-lg">
        <button onClick={onClose} className="absolute top-4 right-4 text-3xl">
          <AiOutlineClose/>
        </button>
        <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl">
          <AiOutlineLeft/>
        </button>
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={800}
          height={600}
          className="rounded-lg"
        />
        <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl">
          <AiOutlineRight/>
        </button>
      </div>
    </div>
  );
};

export default Modal;