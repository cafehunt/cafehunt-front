/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { BackButtonStyled } from './BackButton.styled';
import { appRoutes } from '../../routes/Routes';

export const BackButton: FC = () => {
  return (
    <Link to={appRoutes.home}>
      <BackButtonStyled>
        <AiOutlineArrowLeft />
        <span>Back</span>
      </BackButtonStyled>
    </Link>
  );
};
