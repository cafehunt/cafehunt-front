import { FC } from 'react';
import LogoIcon from '../../assets/icons/logo.svg';

export const Logo: FC = () => (
  <a href="/">
    <img src={LogoIcon} width="135" height="20" alt="Cafehunt logo" />
  </a>
);
