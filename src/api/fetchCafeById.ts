import { QueryFunction } from 'react-query';
import { Cafe } from '../types/Cafe.type';

export const fetchCafeById: QueryFunction<Cafe, ['cafe', number, string]> = async ({
  queryKey,
}) => {
  const cafeId = queryKey[1];
  const token = queryKey[2];
  // const apiRes = await fetch(`http://localhost:8000/cafes/${cafeId}`);

  // const apiRes = await fetch(`https://cafehunt.pp.ua/api/cafes/${cafeId}`);

  const apiRes = await fetch(
    `https://cafehunt.pp.ua/api/cafes/${cafeId}`,
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  );

  if (!apiRes.ok) {
    throw new Error(`Cafes fetch not ok`);
  }

  return apiRes.json();
};
