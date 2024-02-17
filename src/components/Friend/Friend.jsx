import PropTypes from 'prop-types';
import useFriends from '../../hooks/useFriends';

function Friend({ friend }) {
  const { removeFriend } = useFriends();

  const handleRemoveBtnClick = () => {
    removeFriend(friend._id);
  };

  return (
    <div>
      <p>
        {friend.firstName} {friend.lastName}
      </p>
      <button onClick={handleRemoveBtnClick}>remove</button>
    </div>
  );
}

Friend.propTypes = {
  friend: PropTypes.object,
  removeFriend: PropTypes.func,
};

export default Friend;
