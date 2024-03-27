import useMessages from '../../hooks/useMessages';
import ConversationHeader from '../ConversationHeader/ConversationHeader';
import MessagesContainer from '../MessagesContainer/MessagesContainer';
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
          <MessagesContainer />
          <NewMessageInput focus={focus} />
        </>
      ) : (
        <p className={styles['no-msg']}>No message selected</p>
      )}
    </div>
  );
}

export default Conversation;
