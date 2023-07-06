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
import { FiltersType } from '../../types/Filters.type';
import { ExploreList } from '../../components/ExploreList';

export const Home: FC = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<FiltersType>();
  const { sm } = useMediaQueries();
  const [data, status] = useCafesList(page, filters);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleFiltersChange = (newFilters: FiltersType) => {
    setFilters((currentFilters) => {
      setPage(1);

      return { ...currentFilters, ...newFilters };
    });
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
        <Filters onFiltersChange={handleFiltersChange} />
        <FlexContainer width="100%" fd="column" ai="center" gap="24px">
          <CafesList cafes={data.items} />
          <Stack spacing={2}>
            <Pagination
              count={data.pages}
              defaultPage={1}
              siblingCount={2}
              boundaryCount={1}
              shape="rounded"
              page={page}
              onChange={handlePageChange}
            />
          </Stack>
        </FlexContainer>
      </HomeContent>
    </HomeStyled>
  );
};
