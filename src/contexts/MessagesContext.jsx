import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
import useAuth from '../hooks/useAuth';
import useLoadingModal from '../hooks/useLoadingModal';
import { getToken } from '../services/localStorage';
import {
  getMessagesWithToken,
  postMessageWithTokenAndData,
} from '../services/api';
import { getParticipants } from '../lib/getParticipants';

const MessagesContext = createContext(null);

function MessagesProvider({ children }) {
  const LOAD = 'LOAD';
  const INITIALIZE = 'INITIALIZE';
  const DISPLAY_PREVIEWS = 'DISPLAY_PREVIEWS';
  const SELECT_CONVERSATION = 'SELECT_CONVERSATION';
  const ANIMATION_END = 'ANIMATION_END';
  const CREATE_NEW_MSG = 'CREATE_NEW_MSG';
  const EDIT_NEW_MSG_CONTENT = 'EDIT_NEW_MSG_CONTENT';
  const EDIT_NEW_MSG_PARTICIPANTS = 'EDIT_NEW_MSG_PARTICIPANTS';
  const ADD_NEW_MSG_PARTICIPANT = 'ADD_NEW_MSG_PARTICIPANT';
  const REMOVE_NEW_MSG_PARTICIPANT = 'REMOVE_NEW_MSG_PARTICIPANT';

  const initialMessagesState = {
    isInitialized: false,
    isLoading: false,
    conversations: null,
    viewConversation: false,
    selectedConversation: null,
    isAnimating: false,
    newMessage: null,
  };

  const messagesReducer = (state, action) => {
    switch (action.type) {
      case LOAD:
        return {
          ...state,
          isLoading: true,
        };

      case INITIALIZE:
        return {
          ...state,
          isInitialized: true,
          isLoading: false,
          conversations: action.payload.conversations,
        };

      case DISPLAY_PREVIEWS:
        return {
          ...state,
          isAnimating: true,
          viewConversation: false,
        };

      case SELECT_CONVERSATION:
        return {
          ...state,
          viewConversation: true,
          selectedConversation: action.payload.conversation,
          isAnimating: true,
          newMessage: {
            parentId: action.payload.conversation.at(-1)._id,
            participants: getParticipants(action.payload.conversation),
            content: '',
          },
        };

      case ANIMATION_END:
        return {
          ...state,
          selectedConversation: state.viewConversation
            ? state.selectedConversation
            : false,
          newMessage: state.viewConversation ? state.newMessage : null,
          isAnimating: false,
        };

      case CREATE_NEW_MSG:
        return {
          ...state,
          viewConversation: true,
          isAnimating: true,
          selectedConversation: [],
          newMessage: {
            parentId: null,
            participants: [user],
            content: '',
          },
        };

      case EDIT_NEW_MSG_CONTENT:
        return {
          ...state,
          newMessage: {
            ...state.newMessage,
            content: action.payload.content,
          },
        };

      case EDIT_NEW_MSG_PARTICIPANTS:
        return {
          ...state,
          newMessage: {
            ...state.newMessage,
            participants: action.payload.participants,
          },
        };

      case ADD_NEW_MSG_PARTICIPANT:
        return {
          ...state,
          newMessage: {
            ...state.newMessage,
            participants: [
              ...state.newMessage.participants,
              action.payload.participant,
            ],
          },
        };

      case REMOVE_NEW_MSG_PARTICIPANT:
        return {
          ...state,
          newMessage: {
            ...state.newMessage,
            participants: state.newMessage.participants.filter(
              (participant) =>
                participant._id !== action.payload.participant._id
            ),
          },
        };
    }
  };

  const { user } = useAuth();
  const [messagesState, dispatch] = useReducer(
    messagesReducer,
    initialMessagesState
  );

  const { setShowLoadingModal } = useLoadingModal();

  const getMessages = async () => {
    dispatch({
      type: LOAD,
    });
    setShowLoadingModal(true);
    const token = getToken();
    const response = await getMessagesWithToken(token);
    const data = await response.json();
    dispatch({
      type: INITIALIZE,
      payload: {
        conversations: data.messages,
      },
    });
    setShowLoadingModal(false);
  };

  const displayConversation = (conversation) => {
    dispatch({
      type: SELECT_CONVERSATION,
      payload: {
        conversation,
      },
    });
  };

  const displayPreviews = () => {
    dispatch({
      type: DISPLAY_PREVIEWS,
    });
  };

  const handleTransitionEnd = () => {
    dispatch({
      type: ANIMATION_END,
    });
  };

  const createNewMsg = () => {
    dispatch({
      type: CREATE_NEW_MSG,
    });
  };

  const editNewMsgContent = (content) => {
    dispatch({
      type: EDIT_NEW_MSG_CONTENT,
      payload: {
        content,
      },
    });
  };

  const editNewMsgParticipants = (participants) => {
    dispatch({
      type: EDIT_NEW_MSG_PARTICIPANTS,
      payload: {
        participants,
      },
    });
  };

  const addNewMsgParticipant = (participant) => {
    dispatch({
      type: ADD_NEW_MSG_PARTICIPANT,
      payload: {
        participant,
      },
    });
  };
  const removeNewMsgParticipant = (participant) => {
    dispatch({
      type: REMOVE_NEW_MSG_PARTICIPANT,
      payload: {
        participant,
      },
    });
  };

  const sendNewMsg = async () => {
    dispatch({ type: LOAD }); //! This is setting isLoading to true

    const token = getToken();
    const postResponse = await postMessageWithTokenAndData(
      token,
      messagesState.newMessage
    );
    const postData = await postResponse.json();
    const { message: newMessage } = postData;

    const getResponse = await getMessagesWithToken(token);
    const getData = await getResponse.json();

    const { messages } = getData;
    console.log(messages);

    dispatch({
      type: INITIALIZE,
      payload: {
        conversations: messages,
      },
    });

    const foundConvo = messages.find((conversation) =>
      conversation.map((msg) => msg._id).includes(newMessage._id)
    );

    dispatch({
      type: SELECT_CONVERSATION, //! This is setting isAnimating to true
      payload: {
        conversation: foundConvo,
      },
    });

    dispatch({
      type: ANIMATION_END,
    });
  };

  const printMessagesState = () => {
    console.table(messagesState);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <MessagesContext.Provider
      value={{
        ...messagesState,
        displayConversation,
        displayPreviews,
        handleTransitionEnd,
        createNewMsg,
        editNewMsgContent,
        editNewMsgParticipants,
        addNewMsgParticipant,
        removeNewMsgParticipant,
        sendNewMsg,
        printMessagesState,
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
