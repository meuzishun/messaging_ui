import useAuth from '../../hooks/useAuth';
import { FriendsProvider } from '../../contexts/FriendsContext';
import { MessagesProvider } from '../../contexts/MessagesContext';
import { Navigate, Outlet } from 'react-router-dom';

function AuthGuard() {
  const { isInitialized, isAuthenticated } = useAuth();

  if (isInitialized && !isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return (
    <>
      <MessagesProvider>
        <FriendsProvider>
          <Outlet />
        </FriendsProvider>
      </MessagesProvider>
    </>
  );
}

export default AuthGuard;
