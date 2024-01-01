import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function RootLayout() {
  return (
    <div className='root-layout'>
      <Header auth={false} />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
