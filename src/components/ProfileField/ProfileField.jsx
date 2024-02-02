import { useState, useRef, useEffect } from 'react';
import styles from './ProfileField.module.scss';

function ProfileField({ label, content, onInputChange }) {
  const [editMode, setEditMode] = useState(false);
  const fieldInput = useRef(null);

  const handleBtnClick = () => {
    setEditMode((prev) => !prev);
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
      <label>{label}</label>
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
      <button onClick={handleBtnClick}>{editMode ? '√' : '/'}</button>
    </div>
  );
}

export default ProfileField;
