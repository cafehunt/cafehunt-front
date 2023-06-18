import { FC } from 'react';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { SignupPhones } from '../../components/SignupPhones';
import { SignupDesktops } from '../../components/SignupDesktops';

export const Signup: FC = () => {
  const { md } = useMediaQueries();

  if (md) {
    return <SignupDesktops />;
  }

  return <SignupPhones />;
};
