import { useContext } from "react";
import { PhotosContext } from "../providers/PhotosProvider";
import { Popup } from "./";

export const Gallery = () => {
  const { photos, boi, setPhotos, setSelectedPhotoId, selectedPhotoId } =
    useContext(PhotosContext);

  return (
    <div>
      Gallery
      <button onClick={() => setPhotos([])}>Clear Photos</button>
      <br />
      {photos.map((photo) => (
        <div
          key={photo.id}
          style={{ display: "inline-block" }}
          onClick={() => setSelectedPhotoId(photo.id)}
        >
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
      {selectedPhotoId && <Popup />}
    </div>
  );
};
