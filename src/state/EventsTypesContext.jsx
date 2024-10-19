import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const EventTypesContext = createContext({
  selectedEventsTypes: [],
  setSelectedEventsTypes: () => {},
});

export const EventTypesContextProvider = ({ children }) => {
  const [selectedEventsTypes, setSelectedEventsTypes] = useState([]);

  const context = {
    selectedEventsTypes,
    setSelectedEventsTypes,
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
