import { Link, useOutletContext } from "react-router-dom";

export const Users = () => {
  const students = useOutletContext();

  return (
    <div>
      <h1>Users Page</h1>

      {students.map((student) => (
        <li key={student.id}>
          <Link to={`/users/${student.id}`}>{student.name}</Link>
        </li>
      ))}
    </div>
  );
};
