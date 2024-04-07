import PropTypes from 'prop-types';
import useMessages from '../../hooks/useMessages';
import useAuth from '../../hooks/useAuth';
import { convertHtmlEntitiesToText } from '../../lib/convertHtmlEntitiesToText';
import { convertListToString } from '../../lib/convertListToString';
import { formatTimestamp } from '../../lib/formatTimestamp';
import { formatClassNames } from '../../lib/formatClassNames';
import { getParticipantNames } from '../../lib/getParticipantNames';
import styles from './ConversationPreview.module.scss';

function ConversationPreview({ conversation }) {
  const { displayConversation, selectedConversation } = useMessages();
  const { user } = useAuth();

  const conversationIsSelected =
    JSON.stringify(selectedConversation) === JSON.stringify(conversation);
  const mostRecentMessage = conversation.at(-1);
  const participantsNames = getParticipantNames(conversation, user);
  const classNames = ['conversation-preview'];

  const handleConversationClick = () => {
    displayConversation(conversation);
  };

  if (conversationIsSelected) {
    classNames.push('selected');
  }

  return (
    <div
      onClick={handleConversationClick}
      className={formatClassNames(styles, classNames)}
    >
      <p className={styles['author-list']}>
        {convertListToString(participantsNames)}
      </p>
      <p className={styles['timestamp']}>
        {formatTimestamp(mostRecentMessage.timestamp)}
      </p>
      <p className={styles['last-message']}>
        {convertHtmlEntitiesToText(mostRecentMessage.content)}
      </p>
    </div>
  );
}

ConversationPreview.propTypes = {
  conversation: PropTypes.array.isRequired,
};

export default ConversationPreview;
