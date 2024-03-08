import useMessages from '../../hooks/useMessages';
import ConversationPreview from '../ConversationPreview/ConversationPreview';
import { formatClassNames } from '../../lib/formatClassNames';
import styles from './ConversationsList.module.scss';

function ConversationsList() {
  const { conversations, viewConversation, isLoading, createNewMsg } =
    useMessages();

  const classNames = ['conversations-list'];

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
        <div className={formatClassNames(styles, classNames)}>
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

export default ConversationsList;
