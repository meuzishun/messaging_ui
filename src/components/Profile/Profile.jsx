import useProfile from '../../hooks/useProfile';
import ProfileField from '../ProfileField/ProfileField';
import Button from '../Button/Button';
import LoadingMsg from '../LoadingMsg/LoadingMsg';
import styles from './Profile.module.scss';

function Profile() {
  const { isLoading, profile, isEdited, saveProfile, revertProfile } =
    useProfile();

  if (isLoading) {
    return <LoadingMsg text='Loading...' />;
  }

  return (
    <div className={styles['profile']}>
      <h2>Profile</h2>
      {profile
        ? Object.entries(profile).map(([label, content], i) => (
            <ProfileField key={i} label={label} content={content} />
          ))
        : null}
      {isEdited ? (
        <div className={styles['btn-container']}>
          <Button
            type='button'
            textContent='save'
            clickHandler={saveProfile}
            classNames={['btn', 'btn-submit']}
          />
          <Button
            type='button'
            textContent='undo'
            clickHandler={revertProfile}
            classNames={['btn']}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
