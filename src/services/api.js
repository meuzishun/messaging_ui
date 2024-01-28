const baseUrl = 'https://messaging-api-twex.onrender.com/api';

const postLoginData = async (formData) => {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: { ...formData } }),
  });

  return response;
};

const postRegisterData = async (formData) => {
  const response = await fetch(`${baseUrl}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: { ...formData } }),
  });

  return response;
};

const getProfileWithToken = async (token) => {
  try {
    const response = await fetch(`${baseUrl}/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

const getMessagesWithToken = async (token) => {
  const response = await fetch(`${baseUrl}/messages`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export {
  postLoginData,
  postRegisterData,
  getProfileWithToken,
  getMessagesWithToken,
};
