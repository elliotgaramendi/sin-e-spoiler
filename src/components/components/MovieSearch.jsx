import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';

const MovieSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    onSearch(debouncedQuery.trim());
  }, [debouncedQuery, onSearch]);

  return (
    <form className="form" aria-label="Movie search">
      <input
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="🔍 Search movies..."
        className="form__input interactive"
        aria-label="Search movies"
      />
    </form>
  );
};

export default MovieSearch;