import { QueryFunction } from 'react-query';
import { Cafe } from '../types/Cafe.type';

export const fetchExploreNew: QueryFunction<
  Cafe[],
  'exploreNew'
> = async () => {
  const apiRes = await fetch(`http://localhost:8000/cafes/explore_new/`);

  if (!apiRes.ok) {
    throw new Error(`Cafes fetch not ok`);
  }

  return apiRes.json();
};