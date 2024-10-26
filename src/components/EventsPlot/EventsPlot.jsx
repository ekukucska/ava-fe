import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';
import { CardContent, Box } from '@mui/material';

const EventsPlot = ({ reset }) => {
  const [plotData, setPlotData] = useState([
    {
      x: [1, 2, 3, 4, 5],
      y: [2, 6, 3, 7, 4],
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: '#30475D' },
      name: 'CGM',
    },
    {
      type: 'bar',
      x: [1, 2, 3],
      y: [2, 5, 3],
      marker: { color: 'lightgrey' },
      name: 'Anomalies',
    },
    {
      type: 'bar',
      x: [1.5, 0.7, 3.5],
      y: [4, 4, 4],
      marker: { color: '#9F1853' },
      name: 'Event type 1',
    },
  ]);

  // UseEffect to reset the plot when the reset prop changes
  useEffect(() => {
    if (reset) {
      setPlotData([
        {
          x: [1, 2, 3, 4, 5],
          y: [2, 6, 3, 7, 4],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: '#30475D' },
          name: 'CGM',
        },
        {
          type: 'bar',
          x: [1, 2, 3],
          y: [2, 5, 3],
          marker: { color: 'lightgrey' },
          name: 'Anomalies',
        },
        {
          type: 'bar',
          x: [1.5, 0.7, 3.5],
          y: [4, 4, 4],
          marker: { color: '#9F1853' },
          name: 'Event Type 1',
        },
      ]);
    }
  }, [reset]);

  return (
    <Box sx={{ width: '100%' }}>
      <CardContent>
        <Plot
          data={plotData}
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
  reset: PropTypes.bool.isRequired,
};

export default EventsPlot;
