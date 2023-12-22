import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './Nav.module.scss';
import MenuBtn from '../MenuBtn/MenuBtn';
import NavLinks from '../NavLinks/NavLinks';

function Nav({ navLinks }) {
  const [showLinks, setShowLinks] = useState(false);

  const handleNavClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={styles.nav} onClick={handleNavClick}>
      <MenuBtn showLinks={showLinks} />
      <NavLinks showLinks={showLinks} navLinks={navLinks} />
    </nav>
  );
}

Nav.propTypes = {
  navLinks: PropTypes.array.isRequired,
};

export default Nav;
