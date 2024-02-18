import useUserSearch from '../../hooks/useUserSearch';
import User from '../User/User';

function UsersList() {
  const { userSearchResults } = useUserSearch();

  if (userSearchResults.length < 1) {
    //! We get an error when a space is searched...
    return null;
  }

  return (
    <div>
      {userSearchResults.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
