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
  }, [isAnimating]);

  return (
    <div className={formatClassNames(styles, classNames)}>
      {reversedConversations ? (
        reversedConversations.map((conversation) => {
          return (
            <ConversationPreview
              key={conversation[0]._id}
              conversation={conversation}
            />
          );
        })
      ) : (
        <p className={styles['loading-msg']}>Loading...</p>
      )}
    </div>
  );
}

export default ConversationsList;
