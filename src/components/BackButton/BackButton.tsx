/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { BackButtonStyled } from './BackButton.styled';

export const BackButton: FC = () => {
  return (
    <BackButtonStyled href="#">
      <AiOutlineArrowLeft />
      <span>Back</span>
    </BackButtonStyled>
  );
};
