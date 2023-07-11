import { QueryStatus, useQuery } from 'react-query';
import { fetchUser } from '../api/fetchUser';
import { NewUserAPIResponse, User } from '../types/User.type';

export const useUserData = (token = '') => {
  const results = useQuery(['user', token], fetchUser);

  const userStorageData =
    {
      first_name: results.data?.first_name,
      last_name: results.data?.last_name,
    } || ({} as Pick<User, 'first_name' | 'last_name'>);

  localStorage.setItem('user', JSON.stringify(userStorageData));

  return [results?.data ?? [], results.status] as [
    NewUserAPIResponse,
    QueryStatus
  ];
};
