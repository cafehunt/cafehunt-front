import { RegisterFormValues } from '../types/RegisterFormValues.type';
import { NewUserAPIResponse } from '../types/User.type';

export const postUser = async (
  newUser: RegisterFormValues
): Promise<NewUserAPIResponse> => {
  try {
    const apiRes = await fetch('http://localhost:8000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    return apiRes.json() as Promise<NewUserAPIResponse>;
  } catch (error: any) {
    throw new Error((error as Error).message);
  }
};
