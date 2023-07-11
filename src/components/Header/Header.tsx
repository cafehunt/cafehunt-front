import { FC } from 'react';
import { Link } from 'react-router-dom';

import { appRoutes } from '../../routes/Routes';
import { useMediaQueries } from '../../hooks/useMediaQueries';

import { HeaderStyled, HeaderWrapper } from './Header.styled';
import { Logo } from '../Logo';
import { Button } from '../Button';
import { useUserData } from '../../hooks/useUserData';
import { LoginUser } from '../LoginUser';

export const Header: FC = () => {
  const { sm } = useMediaQueries();
  const token = localStorage.getItem('accessToken');
  const [userData, status] = useUserData(token || '');

  return (
    <HeaderStyled>
      <HeaderWrapper>
        <Logo />
        {userData.id ? (
          <Link to={appRoutes.account}>
            <LoginUser
              firstName={userData.first_name}
              lastName={userData.last_name}
            />
          </Link>
        ) : (
          <Link to={appRoutes.login}>
            <Button width={sm ? '200px' : '100px'}>Log in</Button>
          </Link>
        )}
      </HeaderWrapper>
    </HeaderStyled>
  );
};
