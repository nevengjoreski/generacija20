import { useParams, useOutletContext } from "react-router-dom";

export const User = () => {
  const { id } = useParams();
  const students = useOutletContext();

  const student = students.find((student) => student.id.toString() === id);

  return (
    <div>
      <h2>User Page</h2>
      <p>ID : {id}</p>
      <p>Name : {student.name}</p>
    </div>
  );
};
