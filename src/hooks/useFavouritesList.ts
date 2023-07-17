import { QueryStatus, useQuery } from 'react-query';
import { fetchFavourites } from '../api/fetchFavourites';
import { FavouriteCafe } from '../types/FavouriteCafe';

export const useFavouritesList = (token: string) => {
  const results = useQuery(['favourites', token], fetchFavourites);

  return [results?.data ?? [], results.status] as [
    FavouriteCafe[],
    QueryStatus
  ];
};