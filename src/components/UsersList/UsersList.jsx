import useUserSearch from '../../hooks/useUserSearch';
import useFriends from '../../hooks/useFriends';
import useAuth from '../../hooks/useAuth';
import LoadingMsg from '../LoadingMsg/LoadingMsg';
import User from '../User/User';
import { filterUserAndFriends } from '../../lib/filterUserAndFriends';
import styles from './UsersList.module.scss';

function UsersList() {
  const { user } = useAuth();
  const { friends } = useFriends();
  const { isLoading, userSearchResults } = useUserSearch();

  const filteredUsers = filterUserAndFriends(userSearchResults, friends, user);

  if (isLoading) {
    return <LoadingMsg text='loading' />;
  }

  return (
    <div className={styles['users-list']}>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => <User key={user._id} user={user} />)
      ) : (
        <p className={styles['empty-list']}>No results</p>
      )}
    </div>
  );
}

export default UsersList;
