import { useState } from "react";
import { useEffect } from "react";

export const NotFound = () => {
  const [quote, setQuote] = useState();

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.content));
  }, []);

  return (
    <div>
      <p>{quote}</p>
    </div>
  );
};
