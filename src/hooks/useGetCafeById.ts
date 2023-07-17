import { QueryStatus, useQuery } from 'react-query';
import { Cafe } from '../types/Cafe.type';
import { fetchCafeById } from '../api/fetchCafeById';

export const useGetGafeById = (id = 0, token = '') => {
  const results = useQuery(['cafe', id, token], fetchCafeById);

  return [results?.data ?? [], results.status] as [
    Cafe,
    QueryStatus
  ];
};
