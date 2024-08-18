import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function EventsPage() {
  return (
    <div>
      <Typography variant="h1">Events Page</Typography>
      <br/>
      <Link to="events-details">Go to Events Details</Link>
    </div>
  );
}

export default EventsPage;
