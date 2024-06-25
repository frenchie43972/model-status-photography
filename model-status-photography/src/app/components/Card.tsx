import Image from "next/image";

interface CardProps {
  src: string;
  alt: string;
  // title?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({src, alt, description}) => {
  return (
    <div className="relative  bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div 
        className="relative w-full h-0 pb-[75%]">
        <Image 
          src={src}
          alt={alt}
          fill
          style={{
            objectFit: 'cover',
          }}
          className="absolute inset-0 rounded-t-lg"
        />
      </div>
     
      {/* <div className="p-4">
        {description && <p className="mt-2 items-center text-sm text-gray-600">{description}</p>}
      </div> */}
    </div>
  );
};

export default Card;
