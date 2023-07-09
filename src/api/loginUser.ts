import { LoginFormValues } from '../types/LoginFormValues.type';
import { LoginUserAPIResponse } from '../types/User.type';

// const URL = 'http://localhost:8000/auth/jwt/login';
const URL = 'https://cafehunt.pp.ua/api/auth/jwt/login';

export const loginUser = async (
  userData: LoginFormValues
): Promise<LoginUserAPIResponse> => {
  const data = new URLSearchParams();
  data.append('username', userData.username);
  data.append('password', userData.password);

  const apiRes = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data.toString(),
  });

  if (!apiRes.ok) {
    throw new Error('Login failed');
  }

  return apiRes.json() as Promise<LoginUserAPIResponse>;
};
