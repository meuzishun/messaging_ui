import PropTypes from 'prop-types';
import { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { NavLink } from 'react-router-dom';
import styles from './NavLinks.module.scss';

function NavLinks({ navLinks, showLinks, setShowLinks }) {
  const linksList = useRef();

  const closeLinks = () => {
    setShowLinks(false);
  };

  useOnClickOutside(linksList, closeLinks);

  return (
    <ul className={showLinks ? styles.show : styles.hide} ref={linksList}>
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
  setShowLinks: PropTypes.func.isRequired,
};

export default NavLinks;
