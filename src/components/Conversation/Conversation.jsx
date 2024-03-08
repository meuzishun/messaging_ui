import useMessages from '../../hooks/useMessages';
import ConversationHeader from '../ConversationHeader/ConversationHeader';
import Message from '../Message/Message';
import NewMessageInput from '../NewMessageInput/NewMessageInput';
import { formatClassNames } from '../../lib/formatClassNames';
import styles from './Conversation.module.scss';

function Conversation() {
  const { selectedConversation, viewConversation, handleTransitionEnd } =
    useMessages();

  const classNames = ['conversation'];

  if (!viewConversation) {
    classNames.push('hide');
  }

  return (
    <div
      className={formatClassNames(styles, classNames)}
      onTransitionEnd={handleTransitionEnd}
    >
      {selectedConversation ? (
        <>
          <ConversationHeader />
          <div className={styles['messages-container']}>
            {selectedConversation.length > 0
              ? selectedConversation.map((message) => (
                  <Message key={message._id} message={message} />
                ))
              : null}
          </div>
          <NewMessageInput focus={focus} />
        </>
      ) : null}
    </div>
  );
}

export default Conversation;
