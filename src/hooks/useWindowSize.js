import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const isClient = typeof window === 'object';
  const [size, setSize] = useState({
    width: isClient ? window.innerWidth : 0,
  });

  useEffect(() => {
    if (!isClient) return;

    const onResize = () => {
      setSize({ width: window.innerWidth });
    };

    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, [isClient]);

  return size;
};

export default useWindowSize;
