import { FC, useState, ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {
  HomeStyled,
  Title,
  HomeExplore,
  HomeExploreWrapper,
  HomeContent,
  TitleResults,
} from './Home.styled';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { Filters } from '../../components/Filters';
import { Header } from '../../components/Header';
import { CafesList } from '../../components/CafesList';
import { useCafesList } from '../../hooks/useCafesList';
import { FlexContainer } from '../../components/FlexContainer';
import { FiltersType } from '../../types/Filters.type';
import { ExploreList } from '../../components/ExploreList';
import { Loader } from '../../components/Loader';

export const Home: FC = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<FiltersType>({
    city: 0,
    name: '',
    rating: 0,
    averageBill: '',
    hasWiFi: false,
    hasCoworking: false,
    petsAllowed: false,
    hasTerrace: false,
    hasVegan: false,
  });
  const { sm } = useMediaQueries();
  const token = localStorage.getItem('accessToken') || '';
  const [data, status] = useCafesList(page, filters, token);

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
    return <Loader />;
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
        <FlexContainer fd="column" gap="10px" width="100%">
          <TitleResults>{data.total} results match your filters</TitleResults>
          <FlexContainer width="100%" fd="column" ai="center" gap="24px">
            <CafesList cafes={data.items} page={page} filters={filters} />
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
        </FlexContainer>
      </HomeContent>
    </HomeStyled>
  );
};
