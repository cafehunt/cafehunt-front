import { FC } from 'react';

import {
  ExploreList,
  HomeStyled,
  Title,
  HomeExplore,
  HomeExploreWrapper,
  HomeContent,
  CafeResults,
} from './Home.styled';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { ItemCardSmall } from '../../components/ItemCardSmall';
import { Filters } from '../../components/Filters';
import { ItemCard } from '../../components/ItemCard';
import { Header } from '../../components/Header';

export const Home: FC = () => {
  const { sm } = useMediaQueries();

  return (
    <HomeStyled>
      <Header />
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
