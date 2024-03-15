import ConversationsContainer from '../ConversationsContainer/ConversationsContainer';
import Conversation from '../Conversation/Conversation';
import styles from './MessagesDashboard.module.scss';

function MessagesDashboard() {
  return (
    <div className={styles['messages-dashboard']}>
      <ConversationsContainer />
      <Conversation />
    </div>
  );
}

export default MessagesDashboard;
