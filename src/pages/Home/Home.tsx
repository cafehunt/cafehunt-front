import { FC } from 'react';
import {
  Container,
  HomeHeader,
  ExploreList,
  HomeStyled,
  Title,
  HomeExplore,
} from './Home.styled';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { ItemCardSmall } from '../../components/ItemCardSmall';

export const Home: FC = () => {
  const { sm } = useMediaQueries();

  return (
    <HomeStyled>
      <HomeHeader>
        <Logo />
        <Button width={sm ? '200px' : '100px'}>Log in</Button>
      </HomeHeader>
      <HomeExplore>
        {sm && (
          <div>
            <Title>Explore new places</Title>
            <ExploreList>
              <ItemCardSmall />
              <ItemCardSmall />
              <ItemCardSmall />
              <ItemCardSmall />
            </ExploreList>
          </div>
        )}
      </HomeExplore>
    </HomeStyled>
  );
};
