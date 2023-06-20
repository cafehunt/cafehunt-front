import { useMemo, useState, useEffect } from 'react';
import { MEDIA } from '../theme';

const useMediaQuery = (query: string) => {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => {
      setMatch(mediaQuery.matches);
    };
    mediaQuery.addEventListener('change', onChange);

    return () => mediaQuery.removeEventListener('change', onChange);
  }, [mediaQuery]);

  return match;
};

export const useMediaQueries = () => {
  const sm = useMediaQuery(`(min-width: ${MEDIA.tablets})`);
  const md = useMediaQuery(`(min-width: ${MEDIA.desktops})`);
  const lg = useMediaQuery(`(min-width: ${MEDIA.ultraDesktops})`);

  return { sm, md, lg };
};
