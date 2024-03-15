import useMessages from '../../hooks/useMessages';
import { formatClassNames } from '../../lib/formatClassNames';
import ConversationsList from '../ConversationsList/ConversationsList';
import styles from './ConversationsContainer.module.scss';

function ConversationsContainer() {
  const { viewConversation, createNewMsg } = useMessages();

  const classNames = ['conversations-container'];

  if (viewConversation) {
    classNames.push('hide');
  }

  return (
    <div className={formatClassNames(styles, classNames)}>
      <button className={styles['new-msg-btn']} onClick={createNewMsg}>
        new message
      </button>
      <ConversationsList />
    </div>
  );
}

export default ConversationsContainer;
