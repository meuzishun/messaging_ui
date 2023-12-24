import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Nav from '../Nav/Nav';
import Heading from '../Heading/Heading';
import { preAuthNavLinks, postAuthNavLinks } from '../../constants/navLinks';

function Header({ auth }) {
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
