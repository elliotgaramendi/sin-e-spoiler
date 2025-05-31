import { useEffect, useRef, useState } from 'react';
import { getMovies } from '../utils/movie.util';

const usePremieres = (delayMs = 500) => {
  const [premieresList, setPremieresList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const timerRef = useRef();

  useEffect(() => {
    setIsLoading(true);

    timerRef.current = setTimeout(() => {
      try {
        setLoadError(false);
        const allMovies = getMovies();
        setPremieresList(allMovies.slice(0, 10));
      } catch (error) {
        setLoadError(error);
      } finally {
        setIsLoading(false);
      }
    }, delayMs);

    return () => clearTimeout(timerRef.current);
  }, [delayMs]);

  return { premieresList, isLoading, loadError };
};

export default usePremieres;