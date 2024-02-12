import { Outlet } from 'react-router-dom';
import LoadingModal from '../components/LoadingModal/LoadingModal';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './RootLayout.module.scss';

export default function RootLayout() {
  return (
    <div className={styles['root-layout']}>
      <LoadingModal />
      <Header auth={false} />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
