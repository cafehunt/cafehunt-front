import { OrderError, OrderValues } from '../types/BookingFormValues';

// const URL = 'http://localhost:8000/orders';
const URL = 'https://cafehunt.pp.ua/api/orders';

export const postOrder = async (
  orderData: OrderValues
): Promise<OrderValues> => {
  const token = localStorage.getItem('accessToken') || '';

  const apiRes = await fetch(URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });

  if (!apiRes.ok) {
    const res = (await apiRes.json()) as Promise<OrderError>;

    throw new Error(`Order was not created: ${(await res).detail}`);
  }

  return apiRes.json() as Promise<OrderValues>;
};
