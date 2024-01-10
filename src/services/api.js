const baseUrl = 'https://messaging-api-twex.onrender.com/api';

const postLoginData = async (formData) => {
  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: { ...formData } }),
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

const postRegisterData = async (formData) => {
  try {
    const response = await fetch(`${baseUrl}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: { ...formData } }),
    });

    return response;
  } catch (err) {
    console.log(err);
  }
};

const getProfile = async (token) => {
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

export { postLoginData, postRegisterData, getProfile };
