import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import StudiesContext from '../../state/StudiesContext';
import EventTypesContext from '../../state/EventsTypesContext';
import SubjectsContext from '../../state/SubjectsContext';
import MainContentContainer from '../../components/MainContentContainer/MainContentContainer';
import EventsTypesHeader from '../../components/EventsTypesHeader/EventsTypesHeader';
import EventsPlotCard from '../../components/EventsPlotCard/EventsPlotCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import createSelectedEventTypesSubtitle from '../../utils/constructors/createSelectedEventTypesSubtitle';
import { eventTypesChartButtonsMapping } from '../../data/eventTypes';
import { filterSubjectsForEventTypes } from '../../utils/filters/filterSubjectsForEventsTypes';

function EventsDetailsPage() {
  const location = useLocation();
  const { selectedStudies, selectedStudiesTotalCounts } =
    useContext(StudiesContext);
  const { selectedEventsTypes, setSelectedEventsTypes, showAllSubjects } =
    useContext(EventTypesContext);
  const { subjectsData } = useContext(SubjectsContext);

  const [filteredSubjects, setFilteredSubjects] = useState([]);
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

  useEffect(() => {
    const filteredSubjectsData = filterSubjectsForEventTypes(
      subjectsData,
      selectedStudies,
      selectedEventsTypes,
      showAllSubjects
    );
    setFilteredSubjects(filteredSubjectsData);
  }, [subjectsData, selectedStudies, selectedEventsTypes, showAllSubjects]);

  console.log('EventDetailsPage: selectedEventsTypes', selectedEventsTypes); // TODO: Remove after testing
  console.log('EventDetailsPage: selectedStudies', selectedStudies); // TODO: Remove after testing
  console.log(
    'EventDetailsPage: selectedStudiesTotalCounts',
    selectedStudiesTotalCounts
  ); // TODO: Remove after testing
  console.log('EventDetailsPage: subjectsData', subjectsData); // TODO: Remove after testing
  console.log('EventDetailsPage: filteredSubjects', filteredSubjects); // TODO: Remove after testing

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <EventsTypesHeader />
      <MainContentContainer>
        {selectedEventsTypes.length === 0 ? (
          showAllSubjects ? (
            <Typography variant="subtitle1" sx={{ marginBottom: '2rem' }}>
              All subjects
            </Typography>
          ) : (
            <Typography variant="subtitle1" sx={{ marginBottom: '2rem' }}>
              Please select an event type category
            </Typography>
          )
        ) : (
          <Typography variant="subtitle1" sx={{ marginBottom: '2rem' }}>
            {showAllSubjects
              ? 'All subjects'
              : createSelectedEventTypesSubtitle(
                  selectedEventsTypes,
                  eventTypesChartButtonsMapping
                )}
          </Typography>
        )}

        {selectedEventsTypes.length !== 0 || showAllSubjects ? (
          <>
            {filteredSubjects.map((subject) => (
              <EventsPlotCard
                key={subject.subject}
                subjectData={subject}
                studyName={subject.study}
                subjectName={subject.subject}
              />
            ))}
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
