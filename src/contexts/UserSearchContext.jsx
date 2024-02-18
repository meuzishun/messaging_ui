import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { getToken } from '../services/localStorage.js';
import { searchUsersWithTokenAndStr } from '../services/api.js';

const UserSearchContext = createContext(null);

function UserSearchProvider({ children }) {
  const [userSearchResults, setUserSearchResults] = useState([]);

  const searchUsers = async (str) => {
    const token = getToken();
    const response = await searchUsersWithTokenAndStr(token, str);
    const data = await response.json();

    setUserSearchResults(data.users);
  };

  return (
    <UserSearchContext.Provider value={{ searchUsers, userSearchResults }}>
      {children}
    </UserSearchContext.Provider>
  );
}

UserSearchProvider.propTypes = {
  children: PropTypes.object,
};

export { UserSearchProvider, UserSearchContext };
