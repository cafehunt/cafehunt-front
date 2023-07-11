/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { BackButtonStyled } from './BackButton.styled';
import { appRoutes } from '../../routes/Routes';
import { useNavigate } from 'react-router-dom';

export const BackButton: FC = () => {
  const navigate = useNavigate();

  return (
    <BackButtonStyled onClick={() => navigate(-1)}>
      <AiOutlineArrowLeft />
      <span>Back</span>
    </BackButtonStyled>
  );
};
