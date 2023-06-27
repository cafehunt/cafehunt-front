import { QueryFunction, QueryFunctionContext } from 'react-query';
import { CafesAPIResponse } from '../types/Cafe.type';

export const fetchCafes: QueryFunction<CafesAPIResponse, 'cafes'> = async (
  context: QueryFunctionContext<'cafes', number>
) => {
  const { pageParam = 1 } = context;

  const apiRes = await fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${pageParam}&count=6`
  );

  if (!apiRes.ok) {
    throw new Error('Users fetch not ok');
  }

  return apiRes.json();
};
