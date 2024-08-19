import React from 'react';
import { Link } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomButton from '../../components/Button/Button';

function EventsPage() {
  return (
    <Container maxWidth="lg">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h1">Events Page</Typography>
        <CustomButton
          startIcon={<VisibilityOutlinedIcon />}
          text="Compare multiple studies"
          variant="outlined"
          onClick={() => console.log('View')}
        />
      </div>
      <br />
      <CustomButton text="Create new event" variant="contained" />
      <CustomButton
        endIcon={<VisibilityOutlinedIcon />}
        text="Compare multiple subjects"
        variant="outlined"
        color="secondary"
        onClick={() => console.log('View')}
      />
      <br />
      <br />
      <Link to="events-details">Go to Events Details</Link>
    </Container>
  );
}

export default EventsPage;
