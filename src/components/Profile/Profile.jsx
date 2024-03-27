import useProfile from '../../hooks/useProfile';
import ProfileField from '../ProfileField/ProfileField';
import Button from '../Button/Button';
import styles from './Profile.module.scss';

function Profile() {
  const { profile, isEdited, saveProfile, revertProfile } = useProfile();

  const excludedProps = ['_id', '__v', 'friends'];

  if (!profile) {
    return null;
  }

  return (
    <div className={styles['profile']}>
      <h2>Profile</h2>
      {Object.entries(profile).reduce((results, [label, content], i) => {
        if (!excludedProps.includes(label)) {
          results.push(
            <ProfileField key={i} label={label} content={content} />
          );
        }
        return results;
      }, [])}
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
