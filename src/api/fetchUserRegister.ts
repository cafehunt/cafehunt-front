import { QueryFunction } from 'react-query';
import { User } from '../types/User.type';
import { FormRequestData } from '../components/SignInUp/SignupDesktops';

// const URL = 'http://localhost:8000/auth/register';
const URL = 'https://cafehunt.pp.ua/api/auth/register';

export const fetchUserRegister: QueryFunction<
  User,
  ['register', FormRequestData | null]
> = async ({ queryKey }) => {
  const formData = queryKey[1];

  if (formData === null) {
    return;
  }

  const apiRes = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!apiRes.ok) {
    throw new Error(`Registration failed`);
  }

  return apiRes.json();
};
