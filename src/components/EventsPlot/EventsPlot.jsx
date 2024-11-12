import React from 'react';
import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';
import { CardContent, Box } from '@mui/material';

const EventsPlot = ({ dataSets }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <CardContent>
        <Plot
          data={dataSets}
          layout={{
            // title: 'A Fancy Plot',
            autosize: true, // Enable auto-resizing
            responsive: true, // Make it responsive
          }}
          useResizeHandler={true} // Allow Plotly to handle resizing
          style={{ width: '100%', height: '100%' }} // Ensure it takes up full space
        />
      </CardContent>
    </Box>
  );
};

EventsPlot.propTypes = {
  dataSets: PropTypes.bool.isRequired,
};

export default EventsPlot;
