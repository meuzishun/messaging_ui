import { NavLink } from 'react-router-dom';
import useFriends from '../../hooks/useFriends';
import Friend from '../Friend/Friend';

function Friends() {
  const { friends } = useFriends();

  if (!friends) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {friends.length > 0 ? (
        friends.map((friend) => <Friend friend={friend} key={friend._id} />)
      ) : (
        <p>You have no friends</p>
      )}
      <NavLink to={'/search'}>find friend</NavLink>
    </div>
  );
}

export default Friends;
