import useMessages from '../../hooks/useMessages';
import ConversationPreview from '../ConversationPreview/ConversationPreview';
import { formatClassNames } from '../../lib/formatClassNames';
import styles from './ConversationsContainer.module.scss';

function ConversationsContainer() {
  const { conversations, viewConversation, isLoading, createNewMsg } =
    useMessages();

  const classNames = ['conversations-container'];

  if (viewConversation) {
    classNames.push('hide');
  }

  if (isLoading) {
    return null;
  }

  return (
    <div className={formatClassNames(styles, classNames)}>
      <button className={styles['new-msg-btn']} onClick={createNewMsg}>
        new message
      </button>
      {conversations?.length < 1 && (
        <div>
          <p className={styles['msg']}>No messages</p>
        </div>
      )}
      {conversations &&
        conversations
          .reverse()
          .map((conversation) => (
            <ConversationPreview
              key={conversation[0]._id}
              conversation={conversation}
            />
          ))}
    </div>
  );
}

export default ConversationsContainer;
