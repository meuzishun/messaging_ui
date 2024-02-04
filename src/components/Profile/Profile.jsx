import { useState, useEffect } from 'react';
import ProfileField from '../ProfileField/ProfileField';
import Button from '../Button/Button';
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
          <Button
            type='button'
            textContent='save'
            clickHandler={handleSaveClick}
            classNames={['btn', 'btn-submit']}
          />
          <Button
            type='button'
            textContent='undo'
            clickHandler={handleUndoClick}
            classNames={['btn']}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
