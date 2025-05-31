import MovieCard from '../components/MovieCard';
import MovieSearch from '../components/MovieSearch';

const MovieList = ({ id, title, movies, favorites = [], onToggleFavorite, onSearch }) => {
  return (
    <section className="section" id={id}>
      <div className="container d-flex f-direction-column g-8">
        <div className="flexbox flexbox--centered-spacing flexbox--responsive g-4">
          <h2 className="title c-primary">{title}</h2>
          {onSearch && <MovieSearch onSearch={onSearch} />}
        </div>
        {movies.length === 0 ? (
          <p className="text text--lg t-align-center">No movies found 😞</p>
        ) : (
          <div className="g-layout g-layout--auto-fit-columns g-8">
            {movies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={favorites.some(favorite => favorite.id === movie.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieList;