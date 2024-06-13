'use client';

import { useParams } from 'next/navigation';
import { NextPage } from 'next';
import GalleryGrid from '@/app/components/GalleryGrid';


const GenrePage: NextPage = () => {
  const {genre} = useParams();

  return (
    <div className="container mx-auto p-4">
      <h1 className="texct 3xl font-bold mb-4">{genre} Photography</h1>
      <p>Gallery of {genre} photos</p>
      <GalleryGrid/>
    </div>
  );
}

export default GenrePage;
