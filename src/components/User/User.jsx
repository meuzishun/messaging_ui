import PropTypes from 'prop-types';

function User({ user }) {
  const handleAddClick = () => {
    console.log(user._id);
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
