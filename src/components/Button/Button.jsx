import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import { formatClassNames } from '../../lib/formatClassNames';

function Button({ type, textContent, clickHandler, classNames }) {
  return (
    <button
      className={classNames ? formatClassNames(styles, classNames) : null}
      type={type}
      onClick={clickHandler}
    >
      {textContent}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  textContent: PropTypes.string,
  clickHandler: PropTypes.func,
  className: PropTypes.string,
  classNames: PropTypes.array,
};

export default Button;
