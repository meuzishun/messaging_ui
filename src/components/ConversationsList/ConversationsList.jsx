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
  }, [isAnimating, viewConversation]); //? should this include viewConversation?

  if (isLoading) {
    return null;
  }

  return (
    <div className={formatClassNames(styles, classNames)}>
      {!isLoading && conversations?.length < 1 && (
        <div className={formatClassNames(styles, classNames)}>
          <p className={styles['msg']}>No messages</p>
        </div>
      )}
      {reversedConversations &&
        reversedConversations.map((conversation) => (
          <ConversationPreview
            key={conversation[0]._id}
            conversation={conversation}
          />
        ))}
    </div>
  );
}

export default ConversationsList;
