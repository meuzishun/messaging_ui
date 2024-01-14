import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function AuthGuard({ children }) {
  const { isInitialized, isAuthenticated } = useAuth();

  if (isInitialized && !isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return <>{children}</>;
}

AuthGuard.propTypes = {
  children: PropTypes.object,
};

export default AuthGuard;
