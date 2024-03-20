import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
import useLoadingModal from '../hooks/useLoadingModal';
import {
  clearUserDataAndToken,
  getToken,
  setUser,
  storeUserDataAndToken,
} from '../services/localStorage.js';
import {
  postRegisterData,
  postLoginData,
  getProfileWithToken,
} from '../services/api.js';

const INITIALIZE = 'INITIALIZE';
const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialAuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };
    case REGISTER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);
  const { setShowLoadingModal } = useLoadingModal();

  const initialize = async () => {
    console.log('Auth initializing...');
    setShowLoadingModal(true);
    const token = getToken();

    if (!token) {
      console.log('No token');
      dispatch({
        type: INITIALIZE,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
      setShowLoadingModal(false);
      return;
    }

    const response = await getProfileWithToken(token);

    if (!response.ok) {
      console.log('Something went wrong');
      dispatch({
        type: INITIALIZE,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
      setShowLoadingModal(false);
      return;
    }

    const data = await response.json();
    setUser(data);

    dispatch({
      type: INITIALIZE,
      payload: {
        isAuthenticated: true,
        user: data.user,
      },
    });
    setShowLoadingModal(false);
  };

  const register = async (formData) => {
    console.log('Registering...');
    setShowLoadingModal(true);
    const response = await postRegisterData(formData);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    storeUserDataAndToken(data);

    dispatch({
      type: REGISTER,
      payload: {
        user: data.user,
      },
    });
    setShowLoadingModal(false);
  };

  const login = async (formData) => {
    console.log('Logging in...');
    setShowLoadingModal(true);
    const response = await postLoginData(formData);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    storeUserDataAndToken(data);

    dispatch({
      type: LOGIN,
      payload: {
        user: data.user,
      },
    });
    setShowLoadingModal(false);
  };

  const logout = () => {
    console.log('Logging out...');
    setShowLoadingModal(true);
    clearUserDataAndToken();

    dispatch({
      type: LOGOUT,
    });
    setShowLoadingModal(false);
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { AuthProvider, AuthContext };
