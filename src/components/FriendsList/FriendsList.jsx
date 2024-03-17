import useFriends from '../../hooks/useFriends';
import Friend from '../Friend/Friend';
import LoadingMsg from '../LoadingMsg/LoadingMsg';
import styles from './FriendsList.module.scss';

function FriendsList() {
  const { friends, isLoading } = useFriends();

  if (isLoading) {
    return (
      <div className={styles['friends-list']}>
        <LoadingMsg text='Loading...' />
      </div>
    );
  }

  return (
    <div className={styles['friends-list']}>
      {!isLoading && friends?.length > 0 ? (
        friends.map((friend) => <Friend friend={friend} key={friend._id} />)
      ) : (
        <p className={styles['no-friends']}>You have no friends</p>
      )}
    </div>
  );
}

export default FriendsList;
