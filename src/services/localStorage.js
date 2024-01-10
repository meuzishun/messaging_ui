const storeUserDataAndToken = (data) => {
  const { user, token } = data;
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', JSON.stringify(token));
  console.table(localStorage);
};

const getToken = () => {
  const token = localStorage.getItem('token');
  const parsedToken = JSON.parse(token);
  return parsedToken;
};

export { storeUserDataAndToken, getToken };
