import PropTypes from 'prop-types';
import useMessages from '../../hooks/useMessages';
import { BsPlusCircle } from 'react-icons/bs';
import styles from './AddSingleParticipant.module.scss';

function AddSingleParticipant({ participant }) {
  const { addNewMsgParticipant } = useMessages();

  const handleAddParticipant = () => {
    addNewMsgParticipant(participant);
  };

  return (
    <div className={styles['participant']}>
      <p>
        {participant.firstName} {participant.lastName}
      </p>
      <BsPlusCircle onClick={handleAddParticipant} />
    </div>
  );
}

AddSingleParticipant.propTypes = {
  participant: PropTypes.object,
};

export default AddSingleParticipant;
