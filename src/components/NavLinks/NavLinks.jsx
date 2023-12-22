import PropTypes from 'prop-types';
import styles from './NavLinks.module.scss';
import NavLink from '../NavLink/NavLink';

function NavLinks({ navLinks, showLinks }) {
  return (
    <ul className={showLinks ? styles.show : styles.hide}>
      {navLinks.map((link, index) => (
        <NavLink
          key={`${link.url}-${index}`}
          textContent={link.textContent}
          url={link.url}
        />
      ))}
    </ul>
  );
}

NavLinks.propTypes = {
  navLinks: PropTypes.array.isRequired,
  showLinks: PropTypes.bool.isRequired,
};

export default NavLinks;
