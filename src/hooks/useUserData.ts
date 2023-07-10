import { QueryStatus, useQuery } from 'react-query';
import { fetchUser } from '../api/fetchUser';
import { NewUserAPIResponse, User } from '../types/User.type';

export const useUserData = (token = '') => {
  const results = useQuery(['user', token], fetchUser);

  const userStorageData: Pick<User, 'first_name' | 'last_name'> = {
    first_name: results.data?.first_name || 'Name',
    last_name: results.data?.last_name || 'LastName',
  };

  localStorage.setItem('user', JSON.stringify(userStorageData));

  return [results?.data ?? [], results.status] as [
    NewUserAPIResponse,
    QueryStatus
  ];
};
