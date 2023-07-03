import { QueryStatus, useQuery } from 'react-query';
import { fetchCafes } from '../api/fetchCafes';
import { CafesAPIResponse } from '../types/Cafe.type';

export const useCafesList = (
  page = 1,
  filters = {
    city: 0,
    name: '',
    rating: 0,
    averageBill: '',
    hasWiFi: false,
    hasCoworking: false,
    petsAllowed: false,
    hasTerrace: false,
    hasVegan: false,
  }
) => {
  const results = useQuery(['cafes', page, filters], fetchCafes, {
    keepPreviousData: true,
  });

  console.log('Filters:', filters);

  return [results?.data ?? [], results.status] as [
    CafesAPIResponse,
    QueryStatus
  ];
};
