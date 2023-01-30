import { useContext } from "react";
import { PhotosContext } from "../providers/PhotosProvider";

export const Comments = () => {
  const { photos, boi } = useContext(PhotosContext);

  return (
    <div>
      Comments
      <pre>{JSON.stringify(boi, null, 2)}</pre>
      <pre>{JSON.stringify(photos, null, 2)}</pre>
    </div>
  );
};
