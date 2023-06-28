import { QueryFunction } from 'react-query';
import { CafesAPIResponse } from '../types/Cafe.type';

export const fetchCafes: QueryFunction<
  CafesAPIResponse,
  ['cafes', number]
> = async ({ queryKey }) => {
  const page = queryKey[1];

  const apiRes = await fetch(`http://localhost:8000/cafes?page=${page}&size=5`);

  if (!apiRes.ok) {
    throw new Error(`Cafes fetch not ok, page:${page}`);
  }

  return apiRes.json();
};
