import { QueryStatus, useQuery } from 'react-query';
import { fetchCities } from '../api/fetchCities';
import { City } from '../types/City.type';

export const useCitiesList = () => {
  const results = useQuery(['cities'], fetchCities);

  return [results?.data ?? [], results.status] as [City[], QueryStatus];
};
