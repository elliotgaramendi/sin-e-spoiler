import { tmdbNowPlayingMock } from '../data/movies.data';

export const getImageUrl = (size = 'w342', path) => {
  if (!path) return `https://picsum.photos/${size === 'w342' ? '342/513' : '780/439'}?random`;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const genres = {
  12: 'Adventure',
  14: 'Fantasy',
  28: 'Action',
  35: 'Comedy',
  53: 'Thriller',
  80: 'Crime',
  878: 'Sci-Fi',
  10751: 'Family',
  10752: 'War',
  18: 'Drama',
  9648: 'Mystery',
  27: 'Horror',
  10749: 'Romance',
  37: 'Western'
};

export const mapTmdbToMovie = tmdbMovie => {
  const {
    id,
    title,
    overview,
    release_date,
    vote_average,
    genre_ids,
    poster_path,
    backdrop_path
  } = tmdbMovie;

  return {
    id,
    title,
    description: overview,
    duration: '120 min',
    releaseDate: release_date,
    rating: Math.round(vote_average) / 2,
    genre: genres[genre_ids[0]] || '🎞️',
    poster: getImageUrl('w342', poster_path),
    backdrop: getImageUrl('w1280', backdrop_path),
    showTimes: ['2:30 PM', '5:45 PM', '9:00 PM', '11:30 PM'],
  };
};

export const getMovies = () =>
  tmdbNowPlayingMock.results.map(mapTmdbToMovie);
