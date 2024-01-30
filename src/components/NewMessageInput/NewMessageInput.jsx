import { useState, useRef, useEffect } from 'react';
import useMessages from '../../hooks/useMessages';
import { getToken } from '../../services/localStorage';
import { postMessageWithTokenAndData } from '../../services/api';
import styles from './NewMessageInput.module.scss';

function NewMessageInput() {
  const [content, setContent] = useState('');
  const inputRef = useRef(null);
  const { selectedConversation, viewConversation, isAnimating } = useMessages();
  const { participants, _id: parentId } = selectedConversation.at(-1);

  const handleInput = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      content,
      participants,
      parentId,
    };

    const token = getToken();
    postMessageWithTokenAndData(token, formData);
    setContent('');
  };

  useEffect(() => {
    if (!isAnimating && viewConversation) {
      inputRef.current.focus();
    }
  }, [isAnimating]);

  return (
    //? Should we try and use Form component?
    //? What about FormInput and Button components?
    <form className={styles['new-msg-input']} onSubmit={handleSubmit}>
      <input
        value={content}
        onChange={handleInput}
        type='text'
        ref={inputRef}
      />
      <button type='submit'>Send</button>
    </form>
  );
}

export default NewMessageInput;
