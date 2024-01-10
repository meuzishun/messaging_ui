import PropTypes from 'prop-types';
import { createContext, useEffect } from 'react';
import {
  clearUserDataAndToken,
  getToken,
  setUser,
} from '../services/localStorage.js';
import { getProfileWithToken } from '../services/api.js';

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const initialize = async () => {
    console.log('Auth initializing...');
    const token = getToken();

    if (!token) {
      console.log('No token');
      return;
    }

    const response = await getProfileWithToken(token);

    if (!response.ok) {
      console.log('Something went wrong');
      return;
    }

    const data = await response.json();

    console.log(data);

    setUser(data);
  };

  function register() {
    console.log('Registering...');
  }

  function login() {
    console.log('Logging in...');
  }

  const logout = () => {
    console.log('Logging out...');
    clearUserDataAndToken();
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export { AuthProvider, AuthContext };
