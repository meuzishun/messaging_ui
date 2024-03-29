import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { LoadingModalProvider } from './contexts/LoadingModalContext';
import { AuthProvider } from './contexts/AuthContext';
import { MessagesProvider } from './contexts/MessagesContext';
import { FriendsProvider } from './contexts/FriendsContext';
import LoadingModal from './components/LoadingModal/LoadingModal';

const router = createBrowserRouter(routes, { basename: '/' });

function App() {
  return (
    <LoadingModalProvider>
      <AuthProvider>
        <MessagesProvider>
          <FriendsProvider>
            <LoadingModal />
            <RouterProvider router={router} />
          </FriendsProvider>
        </MessagesProvider>
      </AuthProvider>
    </LoadingModalProvider>
  );
}

export default App;
