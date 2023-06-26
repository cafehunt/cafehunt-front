/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';

import { useMediaQueries } from '../../hooks/useMediaQueries';
import { LoginPhones } from '../../components/SignInUp/LoginPhones';
import { LoginDesktops } from '../../components/SignInUp/LoginDesktops';

export const Login: FC = () => {
  const { md } = useMediaQueries();

  if (md) {
    return <LoginDesktops />;
  }

  return <LoginPhones />;
};
