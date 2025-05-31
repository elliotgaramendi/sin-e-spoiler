import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Hero from './components/modules/Hero';
import MovieList from './components/modules/MovieList';
import PremieresSection from './components/modules/PremieresSection';
import { getMovies } from './utils/movie.util';

const FAVORITE_KEY = 'sin-e-favorites';

const App = () => {
  const [allMovies] = useState(getMovies());
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const stored = localStorage.getItem(FAVORITE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  const handleToggleFavorite = movie => {
    setFavoriteMovies(prev =>
      prev.some(favorites => favorites.id === movie.id)
        ? prev.filter(favorites => favorites.id !== movie.id)
        : [...prev, movie]
    );
  };

  const filteredMovies = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="main">
        <Hero data={allMovies.slice(0, 8)} />
        <PremieresSection />
        <MovieList
          id="now-showing"
          title="Now Showing 🎬"
          movies={filteredMovies}
          favorites={favoriteMovies}
          onToggleFavorite={handleToggleFavorite}
          onSearch={setSearchTerm}
        />
        {favoriteMovies.length > 0 && (
          <MovieList
            id="favorites"
            title="❤️ Your Favorites ❤️"
            movies={favoriteMovies}
            favorites={favoriteMovies}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="dark"
      />
    </>
  );
};

export default App;