export const addToFavourite = async (token: string, cafeId: number) => {
  const URL = `https://cafehunt.pp.ua/api/cafes/${cafeId}/add_delete_favourite/`;
  const apiRes = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${token}`
    },
  });

  if (!apiRes.ok) {
    throw new Error('failed operation');
  }
}