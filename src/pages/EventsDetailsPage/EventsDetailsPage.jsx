import { useContext } from 'react';
import { Typography } from '@mui/material';
import StudiesContext from '../../state/StudiesContext';
import EventTypesContext from '../../state/EventsTypesContext';
import MainContentContainer from '../../components/MainContentContainer/MainContentContainer';
import EventsTypesHeader from '../../components/EventsTypesHeader/EventsTypesHeader';

function EventsDetailsPage() {
  const { selectedStudies } = useContext(StudiesContext);
  const { selectedEventsTypes } = useContext(EventTypesContext);

  return (
    <>
      <EventsTypesHeader />
      <MainContentContainer>
        <Typography variant="subtitle1" sx={{ marginBottom: '2rem' }}>
          Events Details Page
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
          Selected studies: {selectedStudies?.join(', ')}
        </Typography>

        <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
          Selected event types: {selectedEventsTypes?.join(', ')}
        </Typography>
      </MainContentContainer>
    </>
  );
}

export default EventsDetailsPage;
