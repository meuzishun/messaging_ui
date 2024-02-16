import useFriends from '../../hooks/useFriends';

function Friends() {
  const { friends } = useFriends();
  console.log(friends);
  return <div>Friends</div>;
}

export default Friends;
