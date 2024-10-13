import React from 'react';
import MainContentContainer from '../../components/MainContentContainer/MainContentContainer';
import { Typography } from '@mui/material';

function EventsDetailsPage() {
  return (
    <>
      <MainContentContainer>
        <Typography variant="subtitle1" sx={{ marginBottom: '2rem' }}>
          Events Details Page
        </Typography>
        <br />
      </MainContentContainer>
    </>
  );
}

export default EventsDetailsPage;
