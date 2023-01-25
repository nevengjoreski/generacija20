import { Navigation } from "./components/Navigation";
import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { User } from "./pages/User";
import { NotFound } from "./pages/NotFound";
import { Users } from "./pages/Users";
import { NewUser } from "./pages/NewUser";
import { UsersLayout } from "./layouts/UsersLayout";

const App = () => {
  return (
    <>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* 
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/users/new" element={<NewUser />} /> 
          */}

          <Route path="/users" element={<UsersLayout />}>
            <Route index element={<Users />} />
            <Route path=":id" element={<User />} />
            <Route path="new" element={<NewUser />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
