import Profile from '../components/Profile/Profile';
import styles from './ProfilePage.module.scss';

function ProfilePage() {
  return (
    <div className={styles['profile-page']}>
      <Profile />
    </div>
  );
}

export default ProfilePage;
