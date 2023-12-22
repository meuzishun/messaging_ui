import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Nav from '../Nav/Nav';
import Heading from '../Heading/Heading';

function Header({ auth }) {
  const preAuthNavLinks = [
    { textContent: 'welcome', url: '#home' },
    { textContent: 'register', url: '#home' },
    { textContent: 'login', url: '#home' },
  ];

  const postAuthNavLinks = [
    { textContent: 'dashboard', url: '#home' },
    { textContent: 'profile', url: '#home' },
    { textContent: 'friends', url: '#home' },
  ];

  return (
    <header className={styles.header}>
      <Heading />
      <Nav navLinks={auth ? postAuthNavLinks : preAuthNavLinks} />
    </header>
  );
}

Header.propTypes = {
  auth: PropTypes.bool.isRequired,
};

export default Header;
