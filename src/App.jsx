import { useState } from 'react';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Hero from './components/modules/Hero';
import MovieList from './components/modules/MovieList';
import { getMovies } from './utils/movie.utils';

const FAVORITE_KEY = 'sin-e-favorites';

const App = () => {
  const [movies] = useState(getMovies());
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem(FAVORITE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleFavorite = movie => {
    setFavorites(prev => {
      const exists = prev.some(favorite => favorite.id === movie.id);
      const updated = exists
        ? prev.filter(favorite => favorite.id !== movie.id)
        : [...prev, movie];
      localStorage.setItem(FAVORITE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const filteredMovies = movies.filter(m =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="main">
        <Hero handleEvent={setSearchTerm} />
        <MovieList
          id="now-showing"
          title="Now Showing 🎬"
          movies={filteredMovies}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
        {favorites.length > 0 && (
          <MovieList
            id="favorites"
            title="❤️ Your Favorites ❤️"
            movies={favorites}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default App;