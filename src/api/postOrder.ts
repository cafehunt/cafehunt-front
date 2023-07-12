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

    if (apiRes.status === 422) {
      throw new Error(`Order was not created: ${(await res).detail[0].msg}`);
    }
  }

  return apiRes.json() as Promise<OrderValues>;
};
