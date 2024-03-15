import useMessages from '../../hooks/useMessages';
import ConversationPreview from '../ConversationPreview/ConversationPreview';
import { formatClassNames } from '../../lib/formatClassNames';
import styles from './ConversationsList.module.scss';

function ConversationsList() {
  const { conversations, isLoading } = useMessages();

  const classNames = ['conversations-list'];

  if (isLoading) {
    return null;
  }

  return (
    <div className={formatClassNames(styles, classNames)}>
      {conversations?.length < 1 ? (
        <div>
          <p className={styles['msg']}>No messages</p>
        </div>
      ) : (
        conversations &&
        conversations
          .reverse()
          .map((conversation) => (
            <ConversationPreview
              key={conversation[0]._id}
              conversation={conversation}
            />
          ))
      )}
    </div>
  );
}

export default ConversationsList;
