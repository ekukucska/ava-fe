import React from 'react';
import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';
import { Box, CardContent } from '@mui/material';

const StudiesPlot = ({ studies }) => {
  // Map the studies data to get participant counts and study names
  const plotData = [
    {
      x: studies.map((study) => study.participants.length), // number of participants
      y: studies.map((study, index) => index + 1), // using index for y-axis
      type: 'bar',
      orientation: 'h',
      width: Array(studies.length).fill(0.5), // uniform bar width
      marker: {
        color: '#0052A3',
      },
      text: studies.map(
        (study) => `${study.name}<br>${study.participants.length} participants`
      ),
      textposition: 'inside',
      insidetextanchor: 'middle',
      textfont: {
        color: 'white',
        size: 10,
      },
    },
  ];

  // Define the layout for the Plotly chart
  const layout = {
    autosize: true,
    responsive: true,
    plot_bgcolor: '#e0ecf9',
    paper_bgcolor: 'white',
    xaxis: {
      title: 'Total Participants',
      showgrid: true,
      zeroline: false,
      showline: true,
      linecolor: 'lightgrey',
      linewidth: 0.5,
    },
    yaxis: {
      automargin: true,
      showgrid: false,
      zeroline: false,
      showline: false,
      linecolor: 'lightgrey',
      linewidth: 0.5,
      visible: true,
      showticklabels: false, // Hide study names on y-axis
      ticks: '',
    },
    showlegend: false,
    margin: {
      l: 20,
      r: 20,
      t: 20,
      b: 40,
    },
  };

  return (
    <Box sx={{ width: '100%' }}>
      <CardContent>
        <Plot
          data={plotData}
          layout={layout}
          useResizeHandler={true}
          style={{ width: '100%', height: '100%' }}
        />
      </CardContent>
    </Box>
  );
};

StudiesPlot.propTypes = {
  studies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      participants: PropTypes.array.isRequired,
    })
  ).isRequired,
};

export default StudiesPlot;
