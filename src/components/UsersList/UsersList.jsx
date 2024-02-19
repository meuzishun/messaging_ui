import useUserSearch from '../../hooks/useUserSearch';
import useFriends from '../../hooks/useFriends';
import useAuth from '../../hooks/useAuth';
import LoadingMsg from '../LoadingMsg/LoadingMsg';
import User from '../User/User';
import styles from './UsersList.module.scss';

function UsersList() {
  const { user } = useAuth();
  const { friends } = useFriends();
  const { isLoading, userSearchResults } = useUserSearch();

  if (isLoading) {
    return <LoadingMsg text='loading' />;
  }

  return (
    <div className={styles['users-list']}>
      {userSearchResults.length > 0 ? (
        userSearchResults
          .filter(
            ({ _id }) =>
              !friends.map((friend) => friend._id).includes(_id) &&
              user._id !== _id
          )
          .map((user) => <User key={user._id} user={user} />)
      ) : (
        <p>No results</p>
      )}
    </div>
  );
}

export default UsersList;
