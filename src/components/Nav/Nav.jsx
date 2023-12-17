import { useState } from 'react';
import styles from './Nav.module.scss';
import { BiMenu, BiX } from 'react-icons/bi';

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleNavClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={styles.nav}>
      {showLinks ? (
        <>
          <BiX onClick={handleNavClick} />
          <ul>
            <li>
              <a>Welcome</a>
            </li>
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>Register</a>
            </li>
          </ul>
        </>
      ) : (
        <BiMenu onClick={handleNavClick} />
      )}
    </nav>
  );
}

export default Nav;
