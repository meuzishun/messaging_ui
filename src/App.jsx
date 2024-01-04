import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

const router = createBrowserRouter(routes, { basename: '/' });

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
