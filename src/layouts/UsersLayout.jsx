import { Outlet } from "react-router-dom";

import "../css/style.css";

const students = [
  { id: 1, name: "Stavre" },
  { id: 2, name: "Mia" },
  { id: 3, name: "Petko" },
  { id: 4, name: "Trajko" },
];

export const UsersLayout = () => {
  return (
    <div className="ex5">
      <div className="parent">
        <header className="pink section">Header</header>
        <div className="left-side blue section">Left Sidebar</div>
        <main className="section coral">
          <Outlet context={students} />
        </main>
        <div className="right-side yellow section">Right Sidebar</div>
        <footer className="green section">Footer</footer>
      </div>
    </div>
  );
};
