import { QueryFunction } from 'react-query';
import { City } from '../types/City.type';

export const fetchCities: QueryFunction<City[], ['cities']> = async () => {
  // const apiRes = await fetch('http://localhost:8000/cities');
  const apiRes = await fetch('https://cafehunt.pp.ua/api/cities');

  if (!apiRes.ok) {
    throw new Error(`Cities fetch not ok.`);
  }

  return apiRes.json();
};
