import useMessages from '../../hooks/useMessages';
import useAuth from '../../hooks/useAuth';
import Participant from '../Participant/Participant';
import styles from './Participants.module.scss';

function Participants() {
  const {
    newMessage: { participants },
  } = useMessages();

  const { user } = useAuth();

  return (
    <>
      <span className={styles['to-text']}>To:</span>
      <div className={styles['participants-list']}>
        {participants
          .filter((participant) => participant._id !== user._id)
          .map((participant) => (
            <Participant participant={participant} key={participant._id} />
          ))}
      </div>
    </>
  );
}

export default Participants;
