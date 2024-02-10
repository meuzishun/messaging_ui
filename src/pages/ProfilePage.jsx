import { ProfileProvider } from '../contexts/ProfileContext';
import Profile from '../components/Profile/Profile';
import styles from './ProfilePage.module.scss';

function ProfilePage() {
  return (
    <div className={styles['profile-page']}>
      <ProfileProvider>
        <Profile />
      </ProfileProvider>
    </div>
  );
}

export default ProfilePage;
