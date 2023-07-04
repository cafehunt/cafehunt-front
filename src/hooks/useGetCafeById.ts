import { QueryStatus, useQuery } from 'react-query';
import { Cafe } from '../types/Cafe.type';
import { fetchCafeById } from '../api/fetchCafeById';

export const useGetGafeById = (id = 0) => {
  const results = useQuery(['cafe', id], fetchCafeById);

  return [results?.data ?? [], results.status] as [
    Cafe,
    QueryStatus
  ];
};
