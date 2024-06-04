'use client';

import { useParams } from 'next/navigation';
import { NextPage } from 'next';


const GenrePage: React.FC = () => {
  const {genre} = useParams();

  return (
    <div className="container mx-auto p-4">
      <h1 className="texct 3xl font-bold mb-4">{genre} Photography</h1>
      <p>Gallery of {genre} photos</p>
    </div>
  );
}

export default GenrePage;
