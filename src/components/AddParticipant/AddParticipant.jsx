import { useState } from 'react';
import useMessages from '../../hooks/useMessages';
import useFriends from '../../hooks/useFriends';
import { BsPlusCircle } from 'react-icons/bs';
import AddSingleParticipant from '../AddSingleParticipant/AddSingleParticipant';
import styles from './AddParticipant.module.scss';

function AddParticipant() {
  const { newMessage } = useMessages();
  const { friends } = useFriends();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const participantIds = newMessage.participants.map(
    (participant) => participant._id
  );

  const handleAddClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (newMessage?.parentId) {
    return null;
  }

  return (
    <div className={styles['add-participant']}>
      <div className={styles['add-icon']} onClick={handleAddClick}>
        <BsPlusCircle />
      </div>
      {isMenuOpen && (
        <div className={styles['popup-menu']}>
          {!friends ? (
            <p>Loading...</p>
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
      )}
    </div>
  );
}

export default AddParticipant;