import PropTypes from 'prop-types';
import styles from './NavLinks.module.scss';
// import NavLink from '../NavLink/NavLink';
import { NavLink } from 'react-router-dom';

function NavLinks({ navLinks, showLinks }) {
  return (
    <ul className={showLinks ? styles.show : styles.hide}>
      {navLinks.map((link, index) => (
        <li key={`${link.url}-${index}`}>
          <NavLink to={link.url}>{link.textContent}</NavLink>
        </li>
      ))}
    </ul>
  );
}

NavLinks.propTypes = {
  navLinks: PropTypes.array.isRequired,
  showLinks: PropTypes.bool.isRequired,
};

export default NavLinks;
