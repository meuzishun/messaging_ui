import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';
import { getToken } from '../services/localStorage';
import { getMessagesWithToken } from '../services/api';

const MessagesContext = createContext(null);

function MessagesProvider({ children }) {
  const [conversations, setConversations] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [viewConversation, setViewConversation] = useState(false);

  const getMessages = async () => {
    const token = getToken();
    const response = await getMessagesWithToken(token);
    const data = await response.json();
    setConversations(data.messages);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <MessagesContext.Provider
      value={{
        conversations,
        selectedConversation,
        setSelectedConversation,
        viewConversation,
        setViewConversation,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
}

MessagesProvider.propTypes = {
  children: PropTypes.object,
};

export { MessagesProvider, MessagesContext };
