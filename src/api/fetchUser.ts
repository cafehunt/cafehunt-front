import { QueryFunction } from 'react-query';
import { NewUserAPIResponse } from '../types/User.type';

// const URL = 'http://localhost:8000/users/me';
const URL = 'https://cafehunt.pp.ua/api/users/me';

export const fetchUser: QueryFunction<
  NewUserAPIResponse,
  ['user', string]
> = async ({ queryKey }) => {
  const token = queryKey[1];

  const apiRes = await fetch(URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!apiRes.ok) {
    throw new Error('Missing token or inactive user');
  }

  return apiRes.json();
};
