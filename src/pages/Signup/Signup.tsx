import { FC } from 'react';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { SignupPhones } from '../../components/SignInUp/SignupPhones';
import { SignupDesktops } from '../../components/SignInUp/SignupDesktops';

export const Signup: FC = () => {
  const { md } = useMediaQueries();

  if (md) {
    return <SignupDesktops />;
  }

  return <SignupPhones />;
};
