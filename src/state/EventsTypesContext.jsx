import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const EventTypesContext = createContext({
  selectedEventsTypes: [],
  setSelectedEventsTypes: () => {},
  showAllsubjects: false,
  setShowAllSubjects: () => {},
});

export const EventTypesContextProvider = ({ children }) => {
  const [selectedEventsTypes, setSelectedEventsTypes] = useState([]);
  const [showAllSubjects, setShowAllSubjects] = useState(false);

  const context = {
    selectedEventsTypes,
    setSelectedEventsTypes,
    showAllSubjects,
    setShowAllSubjects,
  };

  return (
    <EventTypesContext.Provider value={context}>
      {children}
    </EventTypesContext.Provider>
  );
};

EventTypesContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EventTypesContext;
