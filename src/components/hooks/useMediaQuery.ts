import { useState, useEffect } from 'react';

export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
      console.log(matches);
    };
    media.addListener(listener);
    return () => {
      media.removeListener(listener);
    };
  }, [matches, query]);

  return matches;
}
