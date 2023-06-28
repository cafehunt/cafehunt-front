import { QueryStatus, useQuery } from 'react-query';
import { fetchCafes } from '../api/fetchCafes';
import { CafesAPIResponse } from '../types/Cafe.type';

export const useCafesList = (page = 1) => {
  const results = useQuery(['cafes', page], fetchCafes);

  return [results?.data ?? [], results.status] as [
    CafesAPIResponse,
    QueryStatus
  ];
};
