import { toast } from 'react-toastify';

const notifyFavorite = (movieTitle, isAdded) => {
  const message = isAdded
    ? `❤️ "${movieTitle}" added to favorites!`
    : `💔 "${movieTitle}" removed from favorites`;
  const toastType = isAdded ? 'success' : 'info';
  toast[toastType](message, { position: 'top-right', autoClose: 2500 });
};

export default notifyFavorite;