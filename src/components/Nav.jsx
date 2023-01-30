import { Link } from "react-router-dom";

export const Nav = () => (
  <ul>
    <li>
      <Link to="/posts">Posts</Link>
    </li>
    <li>
      <Link to="/comments">Comments</Link>
    </li>
    <li>
      <Link to="/gallery">Gallery</Link>
    </li>
  </ul>
);
