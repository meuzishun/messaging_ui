import { useRef, useEffect } from 'react';
import useMessages from '../../hooks/useMessages';
import { BsSendFill } from 'react-icons/bs';
import styles from './NewMessageInput.module.scss';

function NewMessageInput() {
  const inputRef = useRef(null);

  const {
    isAnimating,
    viewConversation,
    newMessage,
    editNewMsgContent,
    sendNewMsg,
  } = useMessages();

  const handleInput = (e) => {
    editNewMsgContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendNewMsg();
    editNewMsgContent('');
  };

  useEffect(() => {
    if (
      !isAnimating &&
      viewConversation &&
      newMessage.participants.length > 1
    ) {
      inputRef.current.focus();
    }
  }, [isAnimating, viewConversation]);

  return (
    <form className={styles['new-msg-input']} onSubmit={handleSubmit}>
      <input
        value={newMessage.content}
        onChange={handleInput}
        type='text'
        ref={inputRef}
      />
      <button type='submit'>
        <BsSendFill />
      </button>
    </form>
  );
}

export default NewMessageInput;
