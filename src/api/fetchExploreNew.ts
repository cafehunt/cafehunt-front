import { QueryFunction } from 'react-query';
import { Cafe } from '../types/Cafe.type';

export const fetchExploreNew: QueryFunction<
  Cafe[],
  ['exploreNew', string]
> = async ({ queryKey }) => {
  const URL = `https://cafehunt.pp.ua/api/cafes/explore_new/`;
  const token = queryKey[1];
  const apiRes = await fetch(URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!apiRes.ok) {
    throw new Error(`Cafes fetch not ok`);
  }

  return apiRes.json();
};
