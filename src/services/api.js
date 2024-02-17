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

const getFriendsWithToken = async (token) => {
  const response = await fetch(`${baseUrl}/contacts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

const postMessageWithTokenAndData = async (token, formData) => {
  const response = await fetch(`${baseUrl}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ data: { ...formData } }),
  });

  return response;
};

const editProfileWithTokenAndData = async (token, formData) => {
  const response = await fetch(`${baseUrl}/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ data: { ...formData } }),
  });

  return response;
};

const deleteFriendWithTokenAndId = async (token, id) => {
  const response = await fetch(`${baseUrl}/contacts/${id}`, {
    method: 'DELETE',
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
  getFriendsWithToken,
  postMessageWithTokenAndData,
  editProfileWithTokenAndData,
  deleteFriendWithTokenAndId,
};
