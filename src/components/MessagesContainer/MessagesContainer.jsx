import useMessages from '../../hooks/useMessages';
import Message from '../Message/Message';
import styles from './MessagesContainer.module.scss';

function MessagesContainer() {
  const { selectedConversation } = useMessages();

  return (
    <div className={styles['messages-container']}>
      {selectedConversation.length > 0
        ? selectedConversation.map((message) => (
            <Message key={message._id} message={message} />
          ))
        : null}
    </div>
  );
}

export default MessagesContainer;
