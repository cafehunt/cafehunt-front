import { QueryStatus, useQuery } from 'react-query';
import { User } from '../types/User.type';
import { fetchUserRegister } from '../api/fetchUserRegister';
import { FormRequestData } from '../components/SignInUp/SignupDesktops';

export const useUserRegister = (formData: FormRequestData | null) => {
  const results = useQuery(['register', formData], fetchUserRegister);

  return [results?.data ?? [], results.status] as [
    User,
    QueryStatus
  ];
};