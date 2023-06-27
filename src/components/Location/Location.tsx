import { FC } from 'react';
import { SlLocationPin } from 'react-icons/sl';

import { LocationStyled } from './Location.styled';

type Props = {
  variant?: string;
  color?: string;
};

export const Location: FC<Props> = ({ variant, color }) => {
  return (
    <LocationStyled variant={variant} color={color} href="#">
      <SlLocationPin />
      <span>Velyka Vasylkivska str., Kyiv, Ukraine</span>
    </LocationStyled>
  );
};
