import Hero from '../components/Hero/Hero';
import WelcomeNav from '../components/WelcomeNav/WelcomeNav';
import styles from './WelcomePage.module.scss';

function WelcomePage() {
  return (
    <div className={styles['welcome-page']}>
      <Hero />
      <WelcomeNav />
    </div>
  );
}

export default WelcomePage;
