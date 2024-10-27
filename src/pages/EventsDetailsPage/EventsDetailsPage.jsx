import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import StudiesContext from '../../state/StudiesContext';
import EventTypesContext from '../../state/EventsTypesContext';
import MainContentContainer from '../../components/MainContentContainer/MainContentContainer';
import EventsTypesHeader from '../../components/EventsTypesHeader/EventsTypesHeader';
import EventsPlotCard from '../../components/EventsPlotCard/EventsPlotCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import createSelectedEventTypesSubtitle from '../../utils/constructors/createSelectedEventTypesSubtitle';
import { eventTypesChartButtonsMapping } from '../../data/eventTypes';

function EventsDetailsPage() {
  const location = useLocation();
  const { selectedStudies } = useContext(StudiesContext);
  const { selectedEventsTypes, setSelectedEventsTypes } =
    useContext(EventTypesContext);

  const [loading, setLoading] = useState(true);

  const resetSelectedEventsTypes = () => {
    setSelectedEventsTypes([]);
  };

  useEffect(() => {
    setLoading(true);
    // Simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 2000); // TODO: Replace this with actual data fetching logic

    return () => {
      resetSelectedEventsTypes();
    };
  }, [location]);

  console.log('EventDetialsPage: selectedEventsTypes', selectedEventsTypes); // TODO: Remove after testing

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <EventsTypesHeader />
      <MainContentContainer>
        {selectedEventsTypes.length !== 0 ? (
          <Typography variant="subtitle1" sx={{ marginBottom: '2rem' }}>
            {createSelectedEventTypesSubtitle(
              selectedEventsTypes,
              eventTypesChartButtonsMapping
            )}
          </Typography>
        ) : (
          <Typography variant="subtitle1" sx={{ marginBottom: '2rem' }}>
            Please select an event type category
          </Typography>
        )}
        {selectedEventsTypes.length !== 0 ? (
          <>
            <EventsPlotCard />
            <EventsPlotCard />
            <EventsPlotCard />
          </>
        ) : (
          <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
            Please select an event category to get patches that feature that
            event type
          </Typography>
        )}
      </MainContentContainer>
    </>
  );
}

export default EventsDetailsPage;
