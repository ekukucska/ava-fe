import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StudiesContext = createContext({
  studiesList: [],
  setStudiesList: () => {},
  studiesData: [],
  setStudiesData: () => {},
  selectedStudies: [],
  setSelectedStudies: () => {},
  compareMultipleStudies: false,
  setCompareMultipleStudies: () => {},
  selectedStudiesTotalCounts: {},
  setSelectedStudiesTotalCounts: () => {},
});

export const StudiesContextProvider = ({ children }) => {
  const [studiesList, setStudiesList] = useState([]);
  const [studiesData, setStudiesData] = useState([]);
  const [selectedStudies, setSelectedStudies] = useState([]);
  const [compareMultipleStudies, setCompareMultipleStudies] = useState(false);
  const [selectedStudiesTotalCounts, setSelectedStudiesTotalCounts] = useState(
    {}
  );

  const context = {
    studiesList,
    setStudiesList,
    studiesData,
    setStudiesData,
    selectedStudies,
    setSelectedStudies,
    compareMultipleStudies,
    setCompareMultipleStudies,
    selectedStudiesTotalCounts,
    setSelectedStudiesTotalCounts,
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
