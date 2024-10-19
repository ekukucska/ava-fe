import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StudiesContext = createContext({
  selectedStudies: [],
  setSelectedStudies: () => {},
  compareMultipleStudies: false,
  setCompareMultipleStudies: () => {},
});

export const StudiesContextProvider = ({ children }) => {
  const [selectedStudies, setSelectedStudies] = useState([]);
  const [compareMultipleStudies, setCompareMultipleStudies] = useState(false);

  const context = {
    selectedStudies,
    setSelectedStudies,
    compareMultipleStudies,
    setCompareMultipleStudies,
  };

  return (
    <StudiesContext.Provider value={context}>
      {children}
    </StudiesContext.Provider>
  );
};

StudiesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StudiesContext;
