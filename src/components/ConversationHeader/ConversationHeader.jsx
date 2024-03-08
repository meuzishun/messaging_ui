import useMessages from '../../hooks/useMessages';
import { BsArrowLeft } from 'react-icons/bs';
import Participants from '../Participants/Participants';
import styles from './ConversationHeader.module.scss';
import AddParticipant from '../AddParticipant/AddParticipant';
import { FriendsProvider } from '../../contexts/FriendsContext';

function ConversationHeader() {
  const { displayPreviews } = useMessages();

  return (
    <div className={styles['conversation-header']}>
      <button className={styles['back-btn']} onClick={displayPreviews}>
        <span className={styles['symbol']}>
          <BsArrowLeft />
        </span>
      </button>
      <Participants />
      <FriendsProvider>
        <AddParticipant />
      </FriendsProvider>
    </div>
  );
}

export default ConversationHeader;
