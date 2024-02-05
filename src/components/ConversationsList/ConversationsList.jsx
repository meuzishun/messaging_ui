import { useEffect } from 'react';
import useMessages from '../../hooks/useMessages';
import { formatClassNames } from '../../lib/formatClassNames';
import { reverseArray } from '../../lib/reverseArray';
import ConversationPreview from '../ConversationPreview/ConversationPreview';
import styles from './ConversationsList.module.scss';

function ConversationsList() {
  const {
    conversations,
    viewConversation,
    setSelectedConversation,
    isAnimating,
    isLoading,
  } = useMessages();

  const reversedConversations = conversations
    ? reverseArray(conversations)
    : null;

  const classNames = ['conversations-list'];

  if (viewConversation) {
    classNames.push('hide');
  }

  useEffect(() => {
    if (!isAnimating && !viewConversation) {
      setSelectedConversation(null);
    }
  }, [isAnimating, viewConversation]); //? should this also include viewConversation?

  return (
    <div className={formatClassNames(styles, classNames)}>
      {isLoading ? (
        <p className={styles['loading-msg']}>Loading...</p>
      ) : reversedConversations && reversedConversations.length > 0 ? (
        reversedConversations.map((conversation) => {
          return (
            <ConversationPreview
              key={conversation[0]._id}
              conversation={conversation}
            />
          );
        })
      ) : (
        <p className={styles['msg']}>No messages</p>
      )}
    </div>
  );
}

export default ConversationsList;
