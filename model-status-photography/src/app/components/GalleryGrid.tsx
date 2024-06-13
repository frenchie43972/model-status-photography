import Card from "./Card";

const photos = [
    {src: '/images/skater.jpg', alt: 'Male Skater', title: 'Skater', description: 'A skater in action'},
    {src: '/images/love_love.jpg', alt: 'A Couple Hugging', title: 'Love', description: 'A couple hugging'},
    {src: '/images/maternity.jpg', alt: 'Maternity Photo', title: 'Maternity', description: 'Maternity photo'},
    {src: '/images/morgan_burlesque.jpg', alt: 'Burlesque Model', title: 'Burlesque', description: 'Burlesque model'},
    {src: '/images/avante_s.jpg', alt: 'Female Model', title: 'Model', description: 'Female model'},
];

const GalleryGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <Card 
            key={index}
            src={photo.src}
            alt={photo.alt}
            title={photo.title}
            description={photo.description}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;