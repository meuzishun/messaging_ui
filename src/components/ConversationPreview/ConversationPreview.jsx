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

  const handleConversationClick = () => {
    displayConversation(conversation);
  };

  const participantsNames = getParticipantNames(conversation, user);
  const classNames = ['conversation-preview'];

  if (JSON.stringify(selectedConversation) === JSON.stringify(conversation)) {
    classNames.push('selected');
  }

  const mostRecentMessage = conversation.at(-1);

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
