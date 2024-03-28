import useFriends from '../../hooks/useFriends';
import LoadingMsg from '../LoadingMsg/LoadingMsg';
import Friend from '../Friend/Friend';
import styles from './FriendsList.module.scss';

function FriendsList() {
  const { friends, isLoading } = useFriends();

  return (
    <div className={styles['friends-list']}>
      {isLoading ? (
        <LoadingMsg />
      ) : friends?.length > 0 ? (
        friends.map((friend) => <Friend friend={friend} key={friend._id} />)
      ) : (
        <p className={styles['no-friends']}>You have no friends</p>
      )}
    </div>
  );
}

export default FriendsList;
