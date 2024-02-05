import useMessages from '../../hooks/useMessages';
import { formatClassNames } from '../../lib/formatClassNames';
import Message from '../Message/Message';
import NewMessageInput from '../NewMessageInput/NewMessageInput';
import { BsArrowLeft } from 'react-icons/bs';
import styles from './Conversation.module.scss';

function Conversation() {
  const {
    selectedConversation,
    viewConversation,
    setViewConversation,
    setIsAnimating,
  } = useMessages();

  const handleBackBtnClick = () => {
    setViewConversation(false);
    setIsAnimating(true);
  };

  const classNames = ['conversation'];

  if (!viewConversation) {
    classNames.push('hide');
  }

  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div
      className={formatClassNames(styles, classNames)}
      onTransitionEnd={handleTransitionEnd}
    >
      {selectedConversation ? (
        <>
          <button className={styles['back-btn']} onClick={handleBackBtnClick}>
            <span className={styles['symbol']}>
              <BsArrowLeft />
            </span>
          </button>
          <div className={styles['messages-container']}>
            {selectedConversation.map((message) => (
              <Message key={message._id} message={message} />
            ))}
          </div>
          <NewMessageInput focus={focus} />
        </>
      ) : null}
    </div>
  );
}

export default Conversation;
