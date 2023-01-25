import { useParams } from "react-router-dom";

export const NewUser = () => {
  const { id } = useParams();

  return <div>User Page {id}</div>;
};
