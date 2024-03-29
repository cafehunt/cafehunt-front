import { QueryStatus, useQuery } from 'react-query';
import { fetchCafes } from '../api/fetchCafes';
import { APIResponse, Cafe } from '../types/Cafe.type';

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
  },
  token = '',
) => {
  const results = useQuery(['cafes', page, filters, token], fetchCafes, {
    keepPreviousData: true,
  });

  return [results?.data ?? [], results.status] as [
    APIResponse<Cafe>,
    QueryStatus
  ];
};
