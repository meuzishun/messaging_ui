import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { convertCamelcaseToSent } from '../../lib/convertCamelcaseToSent';
import styles from './ProfileField.module.scss';

function ProfileField({ label, content, onInputChange }) {
  const [editMode, setEditMode] = useState(false);
  const fieldInput = useRef(null);

  const handleOkClick = () => {
    setEditMode(false);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    onInputChange(label, e.target.value);
  };

  useEffect(() => {
    if (editMode) {
      fieldInput.current.focus();
    }
  }, [editMode]);

  return (
    <div className={styles['profile-field']}>
      <label>{convertCamelcaseToSent(label)}</label>
      {editMode ? (
        <input
          placeholder={content}
          ref={fieldInput}
          value={content}
          onChange={handleInputChange}
        />
      ) : (
        <p>{content}</p>
      )}
      {editMode ? (
        <button onClick={handleOkClick}>√</button>
      ) : (
        <button onClick={handleEditClick}>/</button>
      )}
    </div>
  );
}

ProfileField.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default ProfileField;
