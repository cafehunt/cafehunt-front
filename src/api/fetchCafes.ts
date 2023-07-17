import { QueryFunction } from 'react-query';
import { APIResponse, Cafe } from '../types/Cafe.type';

import { FiltersType } from '../types/Filters.type';

// const URL = 'http://localhost:8000';
const URL = 'https://cafehunt.pp.ua/api';
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
  APIResponse<Cafe>,
  ['cafes', number, FiltersType, string]
> = async ({ queryKey }) => {
  const page = queryKey[1];
  const filters = queryKey[2];
  const token = queryKey[3];

  const searchParams = createSearchParams(filters);

  const apiRes = await fetch(
    `${URL}/${ENDPOINT}?page=${page}${searchParams}&size=${SIZE}`,
    {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  );

  if (!apiRes.ok) {
    throw new Error('Cafes fetch not ok!');
  }

  return apiRes.json();
};
