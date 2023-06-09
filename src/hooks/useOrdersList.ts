import { QueryStatus, useQuery } from 'react-query';
import { fetchOrders } from '../api/fetchOrders';
import { APIResponse } from '../types/Cafe.type';
import { Order } from '../types/Order.type';

export const useOrdersList = (token: string, page: number) => {
  const results = useQuery(['orders', token, page], fetchOrders);

  return [results?.data ?? [], results.status] as [
    APIResponse<Order>,
    QueryStatus
  ];
};
