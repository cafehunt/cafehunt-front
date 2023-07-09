import { RegisterFormValues } from '../types/RegisterFormValues.type';
import { NewUserAPIResponse } from '../types/User.type';

// const URL = 'http://localhost:8000/auth/register';
const URL = 'https://cafehunt.pp.ua/api/auth/register';

export const postUser = async (
  newUser: RegisterFormValues
): Promise<NewUserAPIResponse> => {
  const apiRes = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });

  if (!apiRes.ok) {
    throw new Error(`User is already exist`);
  }

  return apiRes.json() as Promise<NewUserAPIResponse>;
};
