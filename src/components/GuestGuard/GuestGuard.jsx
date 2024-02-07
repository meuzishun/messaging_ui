import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function GuestGuard({ children }) {
  const { isInitialized, isAuthenticated } = useAuth();

  if (isInitialized && isAuthenticated) {
    return <Navigate to='/messages' />;
  }

  return <>{children}</>;
}

GuestGuard.propTypes = {
  children: PropTypes.object,
};

export default GuestGuard;
