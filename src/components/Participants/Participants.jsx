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
        {participants.reduce((results, participant) => {
          if (participant._id !== user._id) {
            results.push(
              <Participant participant={participant} key={participant._id} />
            );
          }
          return results;
        }, [])}
      </div>
    </>
  );
}

export default Participants;
