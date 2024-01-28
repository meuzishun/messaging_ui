import useMessages from '../../hooks/useMessages';
import { formatClassNames } from '../../lib/formatClassNames';
import Message from '../Message/Message';
import styles from './Conversation.module.scss';

function Conversation() {
  const { selectedConversation, viewConversation, setViewConversation } =
    useMessages();

  const handleBackBtnClick = () => {
    setViewConversation(false);
  };

  const classNames = ['conversation'];

  if (!viewConversation) {
    classNames.push('hide');
  }

  return (
    <div className={formatClassNames(styles, classNames)}>
      {selectedConversation ? (
        <>
          <button className={styles['back-btn']} onClick={handleBackBtnClick}>
            <span className={styles['symbol']}>&#8592;</span>
            <span className={styles['text']}>back</span>
          </button>
          {selectedConversation.map((message) => (
            <Message key={message._id} message={message} />
          ))}
        </>
      ) : null}
    </div>
  );
}

export default Conversation;
