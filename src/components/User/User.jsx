import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../services/localStorage';
import { addFriendWithTokenAndId } from '../../services/api';

function User({ user }) {
  const navigate = useNavigate();

  const handleAddClick = async () => {
    const token = getToken();
    await addFriendWithTokenAndId(token, user._id);
    navigate('/friends');
  };

  return (
    <>
      <p key={user._id}>
        <span>
          {user.firstName} {user.lastName} ({user.email})
        </span>
        <button onClick={handleAddClick}>add</button>
      </p>
    </>
  );
}

User.propTypes = {
  user: PropTypes.object,
};

export default User;
