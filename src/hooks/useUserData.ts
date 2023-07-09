import { QueryStatus, useQuery } from 'react-query';
import { fetchUser } from '../api/fetchUser';
import { NewUserAPIResponse } from '../types/User.type';

export const useUserData = (token = '') => {
  const results = useQuery(['user', token], fetchUser);

  localStorage.setItem('user', JSON.stringify(results?.data));

  return [results?.data ?? [], results.status] as [
    NewUserAPIResponse,
    QueryStatus
  ];
};
