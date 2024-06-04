import { useRouter } from "next/router";


const GenrePage: React.FC = () => {
  const router = useRouter();
  const {genre} = router.query;

  return (
    <div className="container mx-auto p-4">
      <h1 className="texct 3xl font-bold mb-4">{genre} Photography</h1>
      <p>Gallery of {genre} photos</p>
    </div>
  );
}

export default GenrePage;
