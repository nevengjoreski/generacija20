import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { PHOTOS_LIMIT, API_URL } from "../utils/constants";
// create context

export const PhotosContext = createContext(null);

// create provider

export const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(API_URL + "/photos?_limit=" + PHOTOS_LIMIT)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  const boi = ["zelena", "crvema"];
  const value = {
    photos,
    boi,
    setPhotos
  };

  return (
    <PhotosContext.Provider value={value}>{children}</PhotosContext.Provider>
  );
};
