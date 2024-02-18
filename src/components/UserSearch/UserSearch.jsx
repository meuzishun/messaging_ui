import { useState, useEffect } from 'react';
import useUserSearch from '../../hooks/useUserSearch';
import UsersList from '../UsersList.jsx/UsersList';

function UserSearch() {
  const [input, setInput] = useState('');
  const { searchUsers } = useUserSearch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    searchUsers(input);
  }, [input]);

  return (
    <div>
      <input
        type='search'
        value={input}
        onChange={handleInput}
        autoFocus
        placeholder='Search for user...'
      />
      {input.length > 0 ? <UsersList /> : null}
    </div>
  );
}

export default UserSearch;
