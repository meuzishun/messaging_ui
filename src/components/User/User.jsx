import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../services/localStorage';
import { addFriendWithTokenAndId } from '../../services/api';
import { BsPersonPlusFill } from 'react-icons/bs';
import styles from './User.module.scss';

function User({ user }) {
  const navigate = useNavigate();

  const handleAddClick = async () => {
    const token = getToken();
    await addFriendWithTokenAndId(token, user._id);
    navigate('/friends');
  };

  return (
    <div className={styles['user']}>
      <p key={user._id} className={styles['user-name']}>
        {user.firstName} {user.lastName}{' '}
        <span className={styles['email']}>{user.email}</span>
      </p>
      <button onClick={handleAddClick}>
        <BsPersonPlusFill />
      </button>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object,
};

export default User;
