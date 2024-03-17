import { BsArrowClockwise } from 'react-icons/bs';

import PropTypes from 'prop-types';
import styles from './LoadingMsg.module.scss';

function LoadingMsg({ text, showIcon = true }) {
  return (
    <div className={styles['loading-container']}>
      {showIcon ? (
        <div className={styles['loading-icon']}>
          <BsArrowClockwise />
        </div>
      ) : null}
      <p className={styles['loading-msg']}>{text}</p>
    </div>
  );
}

LoadingMsg.propTypes = {
  text: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
};

export default LoadingMsg;
