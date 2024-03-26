import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function AuthGuard() {
  const { isInitialized, isAuthenticated } = useAuth();

  if (isInitialized && !isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export default AuthGuard;
