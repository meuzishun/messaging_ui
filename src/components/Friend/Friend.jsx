import PropTypes from 'prop-types';
import useFriends from '../../hooks/useFriends';
import { BsFillXCircleFill } from 'react-icons/bs';
import styles from './Friend.module.scss';

function Friend({ friend }) {
  const { removeFriend } = useFriends();

  const handleRemoveBtnClick = () => {
    removeFriend(friend._id);
  };

  return (
    <div className={styles['friend']}>
      <p>
        {friend.firstName} {friend.lastName}
      </p>
      <button onClick={handleRemoveBtnClick}>
        <BsFillXCircleFill />
      </button>
    </div>
  );
}

Friend.propTypes = {
  friend: PropTypes.object,
};

export default Friend;
