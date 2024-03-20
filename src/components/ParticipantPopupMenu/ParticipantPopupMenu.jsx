import PropTypes from 'prop-types';
import useMessages from '../../hooks/useMessages';
import useFriends from '../../hooks/useFriends';
import AddSingleParticipant from '../AddSingleParticipant/AddSingleParticipant';
import LoadingMsg from '../LoadingMsg/LoadingMsg';
import styles from './ParticipantPopupMenu.module.scss';

function ParticipantPopupMenu({ isMenuOpen }) {
  const { newMessage } = useMessages();
  const { friends, isLoading } = useFriends();

  const participantIds = newMessage.participants.map(
    (participant) => participant._id
  );

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className={styles['popup-menu']}>
      {isLoading ? (
        <LoadingMsg text={'Loading...'} showIcon={false} />
      ) : (
        friends.length > 0 &&
        friends.reduce((results, friend) => {
          if (!participantIds.includes(friend._id)) {
            results.push(
              <AddSingleParticipant participant={friend} key={friend._id} />
            );
          }
          return results;
        }, [])
      )}
    </div>
  );
}

ParticipantPopupMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default ParticipantPopupMenu;
