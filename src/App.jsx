import { Nav, Comments, Gallery, Posts } from "./components";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { API_URL } from "./utils/constants";
import { useState } from "react";
import { PhotosProvider } from "./providers/PhotosProvider";

const App = () => {
  //napravi povvik kon /posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const callPost = async () => {
      const fetchData = await fetch(API_URL + "/posts");
      const data = await fetchData.json();
      // await new Promise((r) => setTimeout(r, 5000));
      setPosts(data);
    };

    // fetch(API_URL + "/posts")
    //   .then((res) => res.json())
    //   .then((data) => setPosts(data));

    callPost();
    callPost();
  }, []);

  return (
    <>
      <div>
        <Nav />

        <PhotosProvider>
          <Routes>
            {/* send data through props */}
            <Route path="/posts" element={<Posts posts={posts} />} />

            {/* get data in component itself */}
            <Route path="/comments" element={<Comments />} />

            {/* use a context provider */}
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </PhotosProvider>
      </div>
    </>
  );
};

export default App;
