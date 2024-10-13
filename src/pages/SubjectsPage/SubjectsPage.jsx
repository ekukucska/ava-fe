import React from 'react';
import MainContentContainer from '../../components/MainContentContainer/MainContentContainer';
import { Typography } from '@mui/material';

function SubjectsPage() {
  return (
    <MainContentContainer>
      <Typography variant="subtitle1" sx={{ marginBottom: '2rem' }}>
        Subjects Page
      </Typography>
    </MainContentContainer>
  );
}

export default SubjectsPage;
