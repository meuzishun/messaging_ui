import { useState, useEffect } from 'react';
import { getToken } from '../../services/localStorage';
import {
  getProfileWithToken,
  editProfileWithTokenAndData,
} from '../../services/api';
import ProfileField from '../ProfileField/ProfileField';
import Button from '../Button/Button';
import LoadingMsg from '../LoadingMsg/LoadingMsg';
import styles from './Profile.module.scss';

function Profile() {
  const [profile, setProfile] = useState(null);
  const [edited, setEdited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = (label, value) => {
    setProfile((prev) => ({ ...prev, [label]: value }));
    setEdited(true);
  };

  const handleSaveClick = async () => {
    const token = getToken();
    await editProfileWithTokenAndData(token, profile);
    setEdited(false);
  };

  const handleUndoClick = () => {
    initializeProfile();
    setEdited(false);
  };

  const initializeProfile = async () => {
    setIsLoading(true);
    const token = getToken();
    const response = await getProfileWithToken(token);
    const data = await response.json();
    setProfile(data.user);
    setIsLoading(false);
  };

  useEffect(() => {
    initializeProfile();
  }, []);

  if (isLoading) {
    return <LoadingMsg text='Loading...' />;
  }

  return (
    <div className={styles['profile']}>
      <h2>Profile</h2>
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
