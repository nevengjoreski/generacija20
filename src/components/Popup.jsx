import { useContext } from "react";
import { PhotosContext } from "../providers/PhotosProvider";

export const Popup = () => {
  const { selectedPhotoId, photos } = useContext(PhotosContext);

  //   const selectedPhoto = photos.find((photo) => photo.id === selectedPhotoId);

  let selectedPhoto = {};
  photos.forEach((element) => {
    if (element.id === selectedPhotoId) {
      selectedPhoto = element;
    }

    // console.log(element);
  });

  const newPhotosArray = photos.map((element) => {
    return { ...element, trtka: "mrtka", title: element.title + "111" };
  });

  console.log(newPhotosArray);

  //   photos.find((element) => {
  //     console.log(element);
  //   });

  //   photos.some((element) => {
  //     console.log(element);
  //   });

  return (
    <div>
      <img src={selectedPhoto.thumbnailUrl} alt={selectedPhoto.title} />
    </div>
  );
};
