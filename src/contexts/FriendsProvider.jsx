import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
import { getToken } from '../services/localStorage.js';
import {
  getFriendsWithToken,
  deleteFriendWithTokenAndId,
} from '../services/api.js';

const INITIALIZE = 'INITIALIZE';
const REMOVE = 'REMOVE';

const initialFriendsState = {
  isInitialized: false,
  friends: null,
};

const friendsReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        isInitialized: true,
        friends: action.payload.friends,
      };

    case REMOVE:
      return {
        ...state,
        friends: action.payload.friends,
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
      payload: { friends },
    });
  };

  const removeFriend = async (id) => {
    const token = getToken();
    const response = await deleteFriendWithTokenAndId(token, id);
    const data = await response.json();
    const friends = data.contacts;

    dispatch({
      type: REMOVE,
      payload: { friends },
    });
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <FriendsContext.Provider value={{ ...friendsState, removeFriend }}>
      {children}
    </FriendsContext.Provider>
  );
}

FriendsProvider.propTypes = {
  children: PropTypes.object,
};

export { FriendsProvider, FriendsContext };
