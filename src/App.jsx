import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { LoadingModalProvider } from './contexts/LoadingModalContext';
import LoadingModal from './components/LoadingModal/LoadingModal';

const router = createBrowserRouter(routes, { basename: '/' });

function App() {
  return (
    <LoadingModalProvider>
      <AuthProvider>
        <LoadingModal />
        <RouterProvider router={router} />
      </AuthProvider>
    </LoadingModalProvider>
  );
}

export default App;
