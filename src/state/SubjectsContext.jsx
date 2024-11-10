import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const SubjectsContext = createContext({
  subjectsData: [],
  setSubjectsData: () => {},
  minHeightfilter: null,
  setMinHeightFilter: () => {},
  maxHeightFilter: null,
  setMaxHeightFilter: () => {},
  minWeightFilter: null,
  setMinWeightFilter: () => {},
  maxWeightFilter: null,
  setMaxWeightFilter: () => {},
  maleGenderFilter: false,
  setMaleGenderFilter: () => {},
  femaleGenderFilter: false,
  setFemaleGenderFilter: () => {},
  minAgeFilter: null,
  setMinAgeFilter: () => {},
  maxAgeFilter: null,
  setMaxAgeFilter: () => {},
});

export const SubjectsContextProvider = ({ children }) => {
  const [subjectsData, setSubjectsData] = useState([]);
  const [minHeightFilter, setMinHeightFilter] = useState(null);
  const [maxHeightFilter, setMaxHeightFilter] = useState(null);
  const [minWeightFilter, setMinWeightFilter] = useState(null);
  const [maxWeightFilter, setMaxWeightFilter] = useState(null);
  const [maleGenderFilter, setMaleGenderFilter] = useState(false);
  const [femaleGenderFilter, setFemaleGenderFilter] = useState(false);
  const [minAgeFilter, setMinAgeFilter] = useState(null);
  const [maxAgeFilter, setMaxAgeFilter] = useState(null);

  const context = {
    subjectsData,
    setSubjectsData,
    minHeightFilter,
    setMinHeightFilter,
    maxHeightFilter,
    setMaxHeightFilter,
    minWeightFilter,
    setMinWeightFilter,
    maxWeightFilter,
    setMaxWeightFilter,
    maleGenderFilter,
    setMaleGenderFilter,
    femaleGenderFilter,
    setFemaleGenderFilter,
    minAgeFilter,
    setMinAgeFilter,
    maxAgeFilter,
    setMaxAgeFilter,
  };

  return (
    <SubjectsContext.Provider value={context}>
      {children}
    </SubjectsContext.Provider>
  );
};

SubjectsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubjectsContext;
