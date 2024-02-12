import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const LoadingModalContext = createContext(null);

function LoadingModalProvider({ children }) {
  const [showLoadingModal, setShowLoadingModal] = useState(false);

  return (
    <LoadingModalContext.Provider
      value={{ showLoadingModal, setShowLoadingModal }}
    >
      {children}
    </LoadingModalContext.Provider>
  );
}

LoadingModalProvider.propTypes = {
  children: PropTypes.object,
};

export { LoadingModalProvider, LoadingModalContext };
