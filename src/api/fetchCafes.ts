import { QueryFunction } from 'react-query';
import { CafesAPIResponse } from '../types/Cafe.type';

import { FiltersType } from '../types/Filters.type';

const URL = 'http://localhost:8000';
const ENDPOINT = 'cafes';
const SIZE = 5;

const createSearchParams = (params: FiltersType) => {
  let searchParams = '';

  if (params.city) {
    searchParams += `&city_id=${params.city}`;
  }

  if (params.name) {
    searchParams += `&name=${params.name}`;
  }

  if (params.rating) {
    searchParams += `&rating=${params.rating}`;
  }

  if (params.averageBill) {
    searchParams += `&average_bill=${params.averageBill}`;
  }

  if (params.hasWiFi) {
    searchParams += '&has_wifi=true';
  }

  if (params.hasCoworking) {
    searchParams += '&has_coworking_place=true';
  }

  if (params.petsAllowed) {
    searchParams += '&can_with_pets=true';
  }

  if (params.hasTerrace) {
    searchParams += '&has_outdoor_seating=true';
  }

  if (params.hasVegan) {
    searchParams += '&has_vegan_menu=true';
  }

  return searchParams;
};

export const fetchCafes: QueryFunction<
  CafesAPIResponse,
  ['cafes', number, FiltersType]
> = async ({ queryKey }) => {
  const page = queryKey[1];
  const filters = queryKey[2];

  const searchParams = createSearchParams(filters);

  console.log('Query key:', queryKey);

  const apiRes = await fetch(
    `${URL}/${ENDPOINT}?page=${page}${searchParams}&size=${SIZE}`
  );

  if (!apiRes.ok) {
    throw new Error('Cafes fetch not ok!');
  }

  return apiRes.json();
};
