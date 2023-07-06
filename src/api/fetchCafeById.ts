import { QueryFunction } from 'react-query';
import { Cafe } from '../types/Cafe.type';

export const fetchCafeById: QueryFunction<Cafe, ['cafe', number]> = async ({
  queryKey,
}) => {
  const cafeId = queryKey[1];
  // const apiRes = await fetch(`http://localhost:8000/cafes/${cafeId}`);

  const apiRes = await fetch(`https://cafehunt.pp.ua/api/cafes/${cafeId}`);

  if (!apiRes.ok) {
    throw new Error(`Cafes fetch not ok`);
  }

  return apiRes.json();
};
