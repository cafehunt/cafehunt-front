import { QueryStatus, useQuery } from 'react-query';
import { Cafe } from '../types/Cafe.type';
import { fetchExploreNew } from '../api/fetchExploreNew';

export const useExploreNew = () => {
  const results = useQuery('exploreNew', fetchExploreNew);

  return [results?.data ?? [], results.status] as [
    Cafe[],
    QueryStatus
  ];
};
