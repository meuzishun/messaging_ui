import PropTypes from 'prop-types';
import useProfile from '../../hooks/useProfile';
import { convertCamelcaseToSent } from '../../lib/convertCamelcaseToSent';
import { BsPencilSquare, BsCheckCircle } from 'react-icons/bs';
import styles from './ProfileField.module.scss';

function ProfileField({ label, content }) {
  const { setEditField, editProfile, editField } = useProfile();

  const handleOkClick = () => {
    setEditField(null);
  };

  const handleEditClick = () => {
    setEditField(label);
  };

  const handleInputChange = (e) => {
    editProfile(label, e.target.value);
  };

  return (
    <div className={styles['profile-field']}>
      <label>{convertCamelcaseToSent(label)}</label>
      {editField === label ? (
        <input value={content} onChange={handleInputChange} autoFocus />
      ) : (
        <p>{content}</p>
      )}
      {editField === label ? (
        <button className={styles['ok-btn']} onClick={handleOkClick}>
          <BsCheckCircle />
        </button>
      ) : (
        <button className={styles['edit-btn']} onClick={handleEditClick}>
          <BsPencilSquare />
        </button>
      )}
    </div>
  );
}

ProfileField.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ProfileField;
