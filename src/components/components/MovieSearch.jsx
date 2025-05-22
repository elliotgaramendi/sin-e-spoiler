import { useEffect, useState } from "react";

const MovieSearch = ({ onSearch }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(input.trim());
    }, 500);

    return () => clearTimeout(handler);
  }, [input, onSearch]);

  return (
    <form className="form" aria-label="Movie search">
      <input
        type="search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search movies..."
        className="form__input interactive interactive--xl t-align-center"
        aria-label="Search movies"
      />
    </form>
  );
};

export default MovieSearch;