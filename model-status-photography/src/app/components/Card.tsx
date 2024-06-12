import Image from "next/image";

interface CardProps {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({src, alt, title, description}) => {
  return (
    <div className="relative w-full h-full bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative w-full h-48">
        <Image 
          src={src}
          alt={alt}
          fill
          style={{
            objectFit: 'cover',
          }}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        {description && <p className="mt-2 text-sm text-gray-600">{description}</p>}
      </div>
    </div>
  );
};

export default Card;