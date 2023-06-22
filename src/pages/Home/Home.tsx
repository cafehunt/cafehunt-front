import { FC } from 'react';
import { Container, HomeHeader, HomeStyled } from './Home.styled';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { useMediaQueries } from '../../hooks/useMediaQueries';

export const Home: FC = () => {
  const { sm } = useMediaQueries();

  return (
    <HomeStyled>
      <HomeHeader>
        <Container>
          <Logo />
          <Button width={sm ? '200px' : '100px'}>Log in</Button>
        </Container>
      </HomeHeader>
    </HomeStyled>
  );
};
