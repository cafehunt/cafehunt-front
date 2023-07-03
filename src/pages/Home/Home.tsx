import { FC, useState, ChangeEvent } from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import {
  HomeStyled,
  Title,
  HomeExplore,
  HomeExploreWrapper,
  HomeContent,
} from './Home.styled';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { Filters } from '../../components/Filters';
import { Header } from '../../components/Header';
import { CafesList } from '../../components/CafesList';
import { useCafesList } from '../../hooks/useCafesList';
import { FlexContainer } from '../../components/FlexContainer';
import { ExploreList } from '../../components/ExploreList';

export const Home: FC = () => {
  const [page, setPage] = useState(1);
  const { sm } = useMediaQueries();
  const [data, status] = useCafesList(page);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <HomeStyled>
      <Header />
      <HomeExplore>
        <HomeExploreWrapper>
          {sm && (
            <div>
              <Title>Explore new places</Title>
              <ExploreList />
            </div>
          )}
        </HomeExploreWrapper>
      </HomeExplore>
      <HomeContent>
        <Filters />
        <FlexContainer width="100%" fd="column" ai="center" gap="24px">
          <CafesList cafes={data.items} />
          <Stack spacing={2}>
            <Pagination
              count={data.pages}
              siblingCount={0}
              boundaryCount={1}
              shape="rounded"
              onChange={handleChange}
            />
          </Stack>
        </FlexContainer>
      </HomeContent>
    </HomeStyled>
  );
};
