import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
import { getToken } from '../services/localStorage.js';
import { getFriendsWithToken } from '../services/api.js';

const INITIALIZE = 'INITIALIZE';

const initialFriendsState = {
  isInitialized: false,
  friends: null,
};

const friendsReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        isLoading: false,
        isInitialized: true,
        profile: action.payload.profile,
      };

    default:
      return state;
  }
};

const FriendsContext = createContext(null);

function FriendsProvider({ children }) {
  const [friendsState, dispatch] = useReducer(
    friendsReducer,
    initialFriendsState
  );

  const initialize = async () => {
    const token = getToken();
    const response = await getFriendsWithToken(token);
    const data = await response.json();
    const friends = data.contacts;
    dispatch({
      type: INITIALIZE,
      payload: friends,
    });
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <FriendsContext.Provider value={friendsState}>
      {children}
    </FriendsContext.Provider>
  );
}

FriendsProvider.propTypes = {
  children: PropTypes.object,
};

export { FriendsProvider, FriendsContext };
