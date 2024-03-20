import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
import { getToken } from '../services/localStorage.js';
import {
  getFriendsWithToken,
  addFriendWithTokenAndId,
  deleteFriendWithTokenAndId,
} from '../services/api.js';

const INITIALIZE = 'INITIALIZE';
const LOAD = 'LOAD';
const ADD = 'ADD';
const REMOVE = 'REMOVE';

const initialFriendsState = {
  isInitialized: false,
  isLoading: false,
  friends: null,
};

const friendsReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        isInitialized: true,
        isLoading: false,
        friends: action.payload.friends,
      };

    case LOAD:
      return {
        ...state,
        isLoading: true,
      };

    case ADD:
      return {
        ...state,
        isLoading: false,
        friends: action.payload.friends,
      };

    case REMOVE:
      return {
        ...state,
        isLoading: false,
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
    dispatch({ type: LOAD });

    const token = getToken();
    const response = await getFriendsWithToken(token);
    const data = await response.json();
    const friends = data.contacts;

    dispatch({
      type: INITIALIZE,
      payload: { friends },
    });
  };

  const addFriend = async (id) => {
    dispatch({ type: LOAD });

    const token = getToken();
    const response = await addFriendWithTokenAndId(token, id);
    const data = await response.json();
    const friends = data.contacts;

    dispatch({
      type: ADD,
      payload: { friends },
    });
  };

  const removeFriend = async (id) => {
    dispatch({ type: LOAD });

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
    <FriendsContext.Provider
      value={{ ...friendsState, addFriend, removeFriend }}
    >
      {children}
    </FriendsContext.Provider>
  );
}

FriendsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { FriendsProvider, FriendsContext };
