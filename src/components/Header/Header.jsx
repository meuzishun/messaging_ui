import { preAuthNavLinks, postAuthNavLinks } from '../../constants/navLinks';
import useAuth from '../../hooks/useAuth';
import Heading from '../Heading/Heading';
import Nav from '../Nav/Nav';
import styles from './Header.module.scss';

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
