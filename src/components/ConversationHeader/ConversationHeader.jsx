import useMessages from '../../hooks/useMessages';
import { FriendsProvider } from '../../contexts/FriendsContext';
import { BsArrowLeft } from 'react-icons/bs';
import Participants from '../Participants/Participants';
import AddParticipant from '../AddParticipant/AddParticipant';
import styles from './ConversationHeader.module.scss';

function ConversationHeader() {
  const { displayPreviews } = useMessages();

  return (
    <div className={styles['conversation-header']}>
      <button className={styles['back-btn']} onClick={displayPreviews}>
        <BsArrowLeft />
      </button>
      <Participants />
      <FriendsProvider>
        <AddParticipant />
      </FriendsProvider>
    </div>
  );
}

export default ConversationHeader;
