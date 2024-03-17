import { NavLink } from 'react-router-dom';
// import useFriends from '../../hooks/useFriends';
// import Friend from '../Friend/Friend';
import FriendsList from '../FriendsList/FriendsList';
import styles from './Friends.module.scss';

function Friends() {
  // const { friends } = useFriends();

  // if (!friends) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className={styles['friends']}>
      <NavLink to={'/search'}>find friend</NavLink>
      {/* {friends.length > 0 ? (
        friends.map((friend) => <Friend friend={friend} key={friend._id} />)
      ) : (
        <p>You have no friends</p>
      )} */}
      <FriendsList />
    </div>
  );
}

export default Friends;
