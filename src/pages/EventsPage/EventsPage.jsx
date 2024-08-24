import React from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomButton from '../../components/Button/Button';
import StudiesList from '../../components/StudiesList/StudiesList';
import { studies } from '../../mockData/mockStudies';

function EventsPage() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          padding: '2.5rem',
        }}
        maxWidth="1500px"
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="subtitle1">Events Page</Typography>
          <CustomButton
            startIcon={<VisibilityOutlinedIcon />}
            text="Compare multiple studies"
            variant="outlined"
            onClick={() => console.log('View')}
          />
        </Box>
        <StudiesList studies={studies} showPercentage={true} />
      </Box>
    </>
  );
}

export default EventsPage;
