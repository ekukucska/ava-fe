import React from 'react';
import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';
import { Box, CardContent } from '@mui/material';

const defaultEventTypes = [
  { type: 'anomalies', name: 'Anomalies', color: '#A9A9A9' },
  { type: 'insulin', name: 'Insulin', color: '#9F1853' },
  { type: 'medication', name: 'Medication', color: '#30D5C8' },
  { type: 'food', name: 'Food', color: '#009D9A' },
  { type: 'alcohol', name: 'Alcohol', color: '#002D9C' },
  { type: 'exercise', name: 'Exercise', color: '#A56EFF' },
  { type: 'sleep', name: 'Sleep', color: '#1E90FF' },
  { type: 'stress', name: 'Stress', color: '#FA4D56' },
  { type: 'pain', name: 'Pain', color: '#B28600' },
  { type: 'caffeine', name: 'Caffeine', color: '#EE5396' },
  { type: 'smoking', name: 'Smoking', color: '#005D5D' },
];

const SubjectsPlot = ({ data }) => {
  if (!data || !Array.isArray(data)) {
    console.error('Please provide an array of event data');
    return null;
  }

  // Create a map of existing data for quick lookup
  const dataMap = data.reduce((acc, item) => {
    acc[item.type] = item;
    return acc;
  }, {});

  // Create plot data ensuring all types are represented
  const plotData = defaultEventTypes.map((defaultType) => ({
    x: [defaultType.name],
    y: [dataMap[defaultType.type]?.count || 0],
    type: 'bar',
    marker: {
      color: defaultType.color,
    },
    name: defaultType.name,
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
          data={plotData}
          layout={layout}
          useResizeHandler={true}
          style={{ width: '100%', height: '100%' }}
        />
      </CardContent>
    </Box>
  );
};

SubjectsPlot.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SubjectsPlot;
