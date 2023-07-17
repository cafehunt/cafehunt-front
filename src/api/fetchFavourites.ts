import { QueryFunction } from 'react-query';
import { FavouriteCafe } from '../types/FavouriteCafe';

const URL = 'https://cafehunt.pp.ua/api/cafes/favourite/';

export const fetchFavourites: QueryFunction<
  FavouriteCafe[],
  ['favourites', string]
> = async ({ queryKey }) => {
  const token = queryKey[1];
  const apiRes = await fetch(URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!apiRes.ok) {
    throw new Error('Favourites fetch not ok!');
  }

  return apiRes.json();
};
