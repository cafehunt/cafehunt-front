import { QueryFunction } from 'react-query';
import { APIResponse } from '../types/Cafe.type';
import { Order } from '../types/Order.type';

// const URL = 'http://localhost:8000/orders';
const URL = 'https://cafehunt.pp.ua/api/orders';

export const fetchOrders: QueryFunction<
  APIResponse<Order>,
  ['orders', string]
> = async ({ queryKey }) => {
  const token = queryKey[1];

  const apiRes = await fetch(URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!apiRes.ok) {
    throw new Error('Orders fetch not ok!');
  }

  return apiRes.json();
};
