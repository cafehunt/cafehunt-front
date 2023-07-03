import { FC } from 'react';
import { SlLocationPin } from 'react-icons/sl';

import { LocationStyled } from './Location.styled';

type Props = {
  street: string;
  variant?: string;
  color?: string;
};

export const Location: FC<Props> = ({ street, variant, color }) => {
  return (
    <LocationStyled variant={variant} color={color} href="#">
      <SlLocationPin />
      <span title={street}>{street}</span>
    </LocationStyled>
  );
};
