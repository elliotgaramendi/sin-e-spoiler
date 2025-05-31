import { useEffect, useState } from 'react';

const useDebounce = (inputValue, delayMs = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => setDebouncedValue(inputValue), delayMs);
    return () => clearTimeout(timeoutId);
  }, [inputValue, delayMs]);

  return debouncedValue;
};

export default useDebounce;