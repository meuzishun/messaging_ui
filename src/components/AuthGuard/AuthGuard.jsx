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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthGuard;
