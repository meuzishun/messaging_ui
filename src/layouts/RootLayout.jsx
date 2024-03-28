import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './RootLayout.module.scss';

export default function RootLayout() {
  return (
    <div className={styles['root-layout']}>
      <Header auth={false} />
      <main className={styles['main']}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
