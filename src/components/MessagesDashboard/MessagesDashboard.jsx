import ConversationsList from '../ConversationsList/ConversationsList';
import Conversation from '../Conversation/Conversation';
import styles from './MessagesDashboard.module.scss';

function MessagesDashboard() {
  return (
    <div className={styles['messages-dashboard']}>
      <ConversationsList />
      <Conversation />
    </div>
  );
}

export default MessagesDashboard;
