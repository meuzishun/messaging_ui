import styles from './Header.module.scss';
import Nav from '../Nav/Nav';
import Heading from '../Heading/Heading';
import { preAuthNavLinks, postAuthNavLinks } from '../../constants/navLinks';
import useAuth from '../../hooks/useAuth';

function Header() {
  const { isAuthenticated } = useAuth();
  return (
    <header className={styles.header}>
      <Heading />
      <Nav navLinks={isAuthenticated ? postAuthNavLinks : preAuthNavLinks} />
    </header>
  );
}

export default Header;
