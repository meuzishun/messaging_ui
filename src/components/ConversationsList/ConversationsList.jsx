import useMessages from '../../hooks/useMessages';
import LoadingMsg from '../LoadingMsg/LoadingMsg';
import ConversationPreview from '../ConversationPreview/ConversationPreview';
import styles from './ConversationsList.module.scss';

function ConversationsList() {
  const { conversations, isLoading } = useMessages();

  if (isLoading) {
    return <LoadingMsg text='Loading...' />;
  }

  return (
    <div className={styles['conversations-list']}>
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
