import notifyFavorite from '../../utils/notifyFavorite.util';
import Button from '../elements/Button';
import Rating from '../widgets/Rating';

const MovieCard = ({ movie, isFavorite, onToggleFavorite = () => { } }) => {
  const { title, rating, genre, duration, poster, description, showTimes } = movie;

  return (
    <article className="card d-flex f-direction-column">
      <div className="p-relative">
        <img
          src={poster}
          alt={`${title} poster`}
          width="180"
          height="320"
          loading="lazy"
          className="card__image"
        />
        <span className="badge badge--primary interactive p-absolute t-2 l-2 f-weight-700">
          {genre}
        </span>
        <Button
          variant="secondary"
          className="interactive p-absolute t-2 r-2"
          onClick={() => {
            onToggleFavorite(movie);
            notifyFavorite(movie.title, !isFavorite);
          }}
          aria-label={isFavorite ? `Remove ${movie.title}` : `Add ${movie.title}`}
        >
          {isFavorite ? "❤️" : "🤍"}
        </Button>
      </div>
      <div className="card__body f-1 g-2">
        <h3 className="title title--2xs">{title}</h3>
        <div className="d-flex a-items-center g-2">
          <Rating value={rating} />
          <span className="interactive c-secondary">{duration}</span>
        </div>
        <p className="text text--sm c-shadow">{description.slice(0, 128)}...</p>
        <div className="d-flex f-direction-column g-2 m-top-auto">
          <h4 className="subtitle subtitle--2xs c-primary">Today's Showtimes</h4>
          <div className="d-flex f-wrap g-2">
            {showTimes.map((time, index) => (
              <a
                key={index}
                className="button button--outline-primary interactive interactive--sm"
                aria-label={`Show time ${time} for ${title}`}
              >
                {time}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;