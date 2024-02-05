import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from 'react';
import { getToken } from '../services/localStorage';
import { getMessagesWithToken } from '../services/api';

const MessagesContext = createContext(null);

function MessagesProvider({ children }) {
  const [conversations, setConversations] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [viewConversation, setViewConversation] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getMessages = async () => {
    setIsLoading(true);
    const token = getToken();
    const response = await getMessagesWithToken(token);
    const data = await response.json();
    setConversations(data.messages);
    setIsLoading(false);
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
        isAnimating,
        setIsAnimating,
        isLoading,
        setIsLoading,
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
