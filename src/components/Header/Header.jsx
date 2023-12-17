import styles from './Header.module.scss';
import Nav from '../Nav/Nav';
import Heading from '../Heading/Heading';

function Header() {
  return (
    <header className={styles.header}>
      <Heading />
      <Nav />
    </header>
  );
}

export default Header;
