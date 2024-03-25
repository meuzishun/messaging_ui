import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { LoadingModalProvider } from './contexts/LoadingModalContext';

const router = createBrowserRouter(routes, { basename: '/' });

function App() {
  return (
    <LoadingModalProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </LoadingModalProvider>
  );
}

export default App;
