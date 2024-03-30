import PropTypes from 'prop-types';
import useFriends from '../../hooks/useFriends';
import { BsChatText, BsFillPersonXFill } from 'react-icons/bs';
import styles from './Friend.module.scss';

function Friend({ friend }) {
  const { removeFriend } = useFriends();

  const handleRemoveBtnClick = () => {
    removeFriend(friend._id);
  };

  return (
    <div className={styles['friend']}>
      <p key={friend._id} className={styles['friend-name']}>
        {friend.firstName} {friend.lastName}{' '}
        <span className={styles['email']}>{friend.email}</span>
      </p>
      <button className={styles['message-btn']}>
        <BsChatText />
      </button>
      <button className={styles['remove-btn']} onClick={handleRemoveBtnClick}>
        <BsFillPersonXFill />
      </button>
    </div>
  );
}

Friend.propTypes = {
  friend: PropTypes.object,
};

export default Friend;
