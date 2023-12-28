const storeUserDataAndToken = (data) => {
  const { user, token } = data;
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', JSON.stringify(token));
  console.log(localStorage);
};

export { storeUserDataAndToken };
