import { useRef, useEffect } from 'react';
import useMessages from '../../hooks/useMessages';
import styles from './NewMessageInput.module.scss';

function NewMessageInput() {
  const inputRef = useRef(null);

  const {
    isAnimating,
    viewConversation,
    newMessage,
    editNewMsgContent,
    sendNewMsg,
    // printMessagesState,
  } = useMessages();
  // printMessagesState();

  const handleInput = (e) => {
    editNewMsgContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendNewMsg();
    editNewMsgContent('');
    // printMessagesState();
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
    //? Should we try and use Form component?
    //? What about FormInput and Button components?
    <form className={styles['new-msg-input']} onSubmit={handleSubmit}>
      <input
        value={newMessage.content}
        onChange={handleInput}
        type='text'
        ref={inputRef}
      />
      <button type='submit'>Send</button>
    </form>
  );
}

export default NewMessageInput;
