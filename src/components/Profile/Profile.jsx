import { useState, useEffect } from 'react';
import ProfileField from '../ProfileField/ProfileField';
import styles from './Profile.module.scss';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [edited, setEdited] = useState(false);

  const onInputChange = (label, value) => {
    setProfile((prev) => ({ ...prev, [label]: value }));
    setEdited(true);
  };

  const handleSaveClick = () => {
    // TODO: req editProfile to API... setState on res
    setEdited(false);
  };

  const handleUndoClick = () => {
    // TODO: getProfile from API, setState on res
    setProfile({
      name: 'Andrew Smith',
      email: 'asmith@email.com',
      title: 'Super awesome guy',
    });
  };

  useEffect(() => {
    // TODO: Only on initial render, getProfile from API and set to state
    setProfile({
      name: 'Andrew Smith',
      email: 'asmith@email.com',
      title: 'Super awesome guy',
    });
  }, []);

  return (
    <div className={styles['profile']}>
      {profile
        ? Object.entries(profile).map((arr, i) => (
            <ProfileField
              key={i}
              label={arr[0]}
              content={arr[1]}
              onInputChange={onInputChange}
            />
          ))
        : null}
      {edited ? (
        <div className={styles['btn-container']}>
          <button onClick={handleSaveClick}>save</button>
          <button onClick={handleUndoClick}>undo</button>
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
