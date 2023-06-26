import { FC } from 'react';
import { Link } from 'react-router-dom';

import { appRoutes } from '../../routes/Routes';
import { useMediaQueries } from '../../hooks/useMediaQueries';

import { HeaderStyled, HeaderWrapper } from './Header.styled';
import { Logo } from '../Logo';
import { Button } from '../Button';

export const Header: FC = () => {
  const { sm } = useMediaQueries();

  return (
    <HeaderStyled>
      <HeaderWrapper>
        <Logo />
        <Link to={appRoutes.login}>
          <Button width={sm ? '200px' : '100px'}>Log in</Button>
        </Link>
      </HeaderWrapper>
    </HeaderStyled>
  );
};
