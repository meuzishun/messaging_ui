import useDashboard from '../../hooks/useDashboard';
import { BsArrowLeft } from 'react-icons/bs';
import Participants from '../Participants/Participants';
import AddParticipant from '../AddParticipant/AddParticipant';
import styles from './ConversationHeader.module.scss';

function ConversationHeader() {
  const { displayPreviews } = useDashboard();

  return (
    <div className={styles['conversation-header']}>
      <button className={styles['back-btn']} onClick={displayPreviews}>
        <BsArrowLeft />
      </button>
      <Participants />
      <AddParticipant />
    </div>
  );
}

export default ConversationHeader;
