import { useContext } from "react";
import { PhotosContext } from "../providers/PhotosProvider";

export const Gallery = () => {
  const { photos, boi, setPhotos } = useContext(PhotosContext);

  return (
    <div>
      Gallery
      <button onClick={() => setPhotos([])}>Clear Photos</button>
      <pre>{JSON.stringify(boi, null, 2)}</pre>
      <pre>{JSON.stringify(photos, null, 2)}</pre>
    </div>
  );
};
