import useFriends from '../../hooks/useFriends';
import Friend from '../Friend/Friend';

function Friends() {
  const { friends } = useFriends();

  if (!friends) {
    return <div>Loading...</div>;
  }

  if (friends.length < 1) {
    return <p>You have no friends</p>;
  }

  return (
    <div>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend._id} />
      ))}
    </div>
  );
}

export default Friends;
