const URL = 'https://cafehunt.pp.ua/api/auth/jwt/logout';

export const logOut = async (token: string) => {
  const apiRes = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `bearer ${token}`
    },
  });

  if (!apiRes.ok) {
    throw new Error('logout failed');
  }

  localStorage.removeItem('accessToken');
}