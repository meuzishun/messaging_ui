import PropTypes from 'prop-types';
import styles from './NavLink.module.scss';

function NavLink({ textContent, url }) {
  return (
    <li className={styles.link}>
      <a href={url}>{textContent}</a>
    </li>
  );
}

NavLink.propTypes = {
  textContent: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default NavLink;
