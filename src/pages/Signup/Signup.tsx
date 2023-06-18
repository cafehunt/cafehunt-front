import { FC } from 'react';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { SignupPhones } from '../../components/SignupPhones';

export const Signup: FC = () => {
  const { md } = useMediaQueries();

  // if (md) {
  //   return <LoginDesktops />;
  // }

  return <SignupPhones />;
};
