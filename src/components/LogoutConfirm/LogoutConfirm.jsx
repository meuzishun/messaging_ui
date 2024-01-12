import Button from '../Button/Button';
import styles from './LogoutConfirm.module.scss';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function LogoutConfirm() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Logout btn clicked...');
    logout();
    navigate('/');
  };
  return (
    <div className={styles['logout-confirm']}>
      <p>Are you sure you want to logout?</p>
      <Button
        type='button'
        textContent='logout'
        clickHandler={handleClick}
        classNames={['btn', 'btn-warning']}
      />
    </div>
  );
}

export default LogoutConfirm;
