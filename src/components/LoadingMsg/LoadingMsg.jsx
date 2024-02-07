import { BsArrowClockwise } from 'react-icons/bs';

import PropTypes from 'prop-types';
import styles from './LoadingMsg.module.scss';

function LoadingMsg({ text }) {
  return (
    <div className={styles['loading-container']}>
      <div className={styles['loading-icon']}>
        <BsArrowClockwise />
      </div>
      <p className={styles['loading-msg']}>{text}</p>
    </div>
  );
}

LoadingMsg.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LoadingMsg;
