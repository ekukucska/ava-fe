import React from 'react';
import Plot from 'react-plotly.js';
import { Box, CardContent } from '@mui/material';

const SubjectsPlot = () => {
  const heights = Array.from(
    { length: 11 },
    () => Math.floor(Math.random() * 100) + 1
  );

  const events = [
    { index: 0, type: 'insulin', name: 'Insulin', color: '#FA4D56' },
    { index: 1, type: 'medication', name: 'Medication', color: '#9F1853' },
    { index: 2, type: 'food', name: 'Food', color: '#6929C4' },
    { index: 3, type: 'alcohol', name: 'Alcohol', color: '#009D9A' },
    { index: 4, type: 'exercise', name: 'Exercise', color: '#EE5396' },
    { index: 5, type: 'sleep', name: 'Sleep', color: '#520408' },
    { index: 6, type: 'stress', name: 'Stress', color: '#002D9C' },
    { index: 7, type: 'pain', name: 'Pain', color: '#B28600' },
    { index: 8, type: 'caffeine', name: 'Caffeine', color: '#A56EFF' },
    { index: 9, type: 'smoking', name: 'Smoking', color: '#30D5C8' },
    { index: 10, type: 'anomalies', name: 'Anomalies', color: '#A9A9A9' }, // Grey color for general events
  ];

  if (!heights || heights.length !== 11) {
    console.error('Please provide an array of 11 height values.');
    return null;
  }

  const data = events.map((event, i) => ({
    x: [event.name],
    y: [heights[i]],
    type: 'bar',
    marker: {
      color: event.color,
    },
    name: event.name,
  }));

  const layout = {
    autosize: true,
    responsive: true,
    barmode: 'group',
    xaxis: {
      tickangle: -45,
      title: 'Event Types',
    },
    yaxis: {
      title: 'Counts',
    },
    height: 400,
  };

  return (
    <Box sx={{ width: '100%' }}>
      <CardContent>
        <Plot
          data={data}
          layout={layout}
          useResizeHandler={true}
          style={{ width: '90%', height: '90%' }}
        />
      </CardContent>
    </Box>
  );
};

export default SubjectsPlot;
