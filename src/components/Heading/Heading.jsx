import birdPic from '../../assets/img/pigeon.png';
import styles from './Heading.module.scss';

function Heading() {
  return (
    <div className={styles.heading}>
      <img src={birdPic} alt='Picture of pigeon' />
      <h1>Pigeon</h1>
    </div>
  );
}

export default Heading;
