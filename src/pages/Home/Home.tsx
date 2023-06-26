import { FC } from 'react';
import {
  HomeHeader,
  HomeHeaderWrapper,
  ExploreList,
  HomeStyled,
  Title,
  HomeExplore,
  HomeExploreWrapper,
  HomeContent,
  CafeResults,
} from './Home.styled';
import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { ItemCardSmall } from '../../components/ItemCardSmall';
import { Filters } from '../../components/Filters';
import { ItemCard } from '../../components/ItemCard';

export const Home: FC = () => {
  const { sm } = useMediaQueries();

  return (
    <HomeStyled>
      <HomeHeader>
        <HomeHeaderWrapper>
          <Logo />
          <Button width={sm ? '200px' : '100px'}>Log in</Button>
        </HomeHeaderWrapper>
      </HomeHeader>
      <HomeExplore>
        <HomeExploreWrapper>
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
        </HomeExploreWrapper>
      </HomeExplore>
      <HomeContent>
        <Filters />
        <CafeResults>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </CafeResults>
      </HomeContent>
    </HomeStyled>
  );
};
