'use client';

import { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";

const photos = [
    {src: '/images/skater.jpg', alt: 'Male Skater', title: 'Skater', description: 'A skater in action'},
    {src: '/images/love_love.jpg', alt: 'A Couple Hugging', title: 'Love', description: 'A couple hugging'},
    {src: '/images/maternity.jpg', alt: 'Maternity Photo', title: 'Maternity', description: 'Maternity photo'},
    {src: '/images/morgan_burlesque.jpg', alt: 'Burlesque Model', title: 'Burlesque', description: 'Burlesque model'},
    {src: '/images/avante_s.jpg', alt: 'Female Model', title: 'Model', description: 'Female model'},
    {src: '/images/skater.jpg', alt: 'Male Skater', title: 'Skater', description: 'A skater in action'},
    {src: '/images/love_love.jpg', alt: 'A Couple Hugging', title: 'Love', description: 'A couple hugging'},
    {src: '/images/maternity.jpg', alt: 'Maternity Photo', title: 'Maternity', description: 'Maternity photo'},
    {src: '/images/morgan_burlesque.jpg', alt: 'Burlesque Model', title: 'Burlesque', description: 'Burlesque model'},
    {src: '/images/avante_s.jpg', alt: 'Female Model', title: 'Model', description: 'Female model'},
    {src: '/images/skater.jpg', alt: 'Male Skater', title: 'Skater', description: 'A skater in action'},
    {src: '/images/love_love.jpg', alt: 'A Couple Hugging', title: 'Love', description: 'A couple hugging'},
    {src: '/images/maternity.jpg', alt: 'Maternity Photo', title: 'Maternity', description: 'Maternity photo'},
    {src: '/images/morgan_burlesque.jpg', alt: 'Burlesque Model', title: 'Burlesque', description: 'Burlesque model'},
    {src: '/images/avante_s.jpg', alt: 'Female Model', title: 'Model', description: 'Female model'},
    {src: '/images/skater.jpg', alt: 'Male Skater', title: 'Skater', description: 'A skater in action'},
    {src: '/images/love_love.jpg', alt: 'A Couple Hugging', title: 'Love', description: 'A couple hugging'},
    {src: '/images/maternity.jpg', alt: 'Maternity Photo', title: 'Maternity', description: 'Maternity photo'},
    {src: '/images/morgan_burlesque.jpg', alt: 'Burlesque Model', title: 'Burlesque', description: 'Burlesque model'},
    {src: '/images/avante_s.jpg', alt: 'Female Model', title: 'Model', description: 'Female model'},
];

const GalleryGrid: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <div key={index} onClick={() => openModal(index)}>
              <Card 
                src={photo.src}
                alt={photo.alt}
                // title={photo.title}
                description={photo.description}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal 
        images={photos}
        currentImageIndex={currentImageIndex}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default GalleryGrid;
