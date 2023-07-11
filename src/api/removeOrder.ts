const URL = 'https://cafehunt.pp.ua/api/orders/';

export const removeOrder = async (token: string, orderId: number) => {
  const apiRes = await fetch(`${URL}${orderId}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `bearer ${token}`,
    },
  });

  if (!apiRes.ok) {
    throw new Error('Order is not deleted');
  }

  return apiRes.json();
};
