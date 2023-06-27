import { FC, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router';

type Props = {
  children: ReactNode;
};

export const ScrollToTop: FC<Props> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};
