import React from 'react';
import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';
import { Box, CardContent } from '@mui/material';
import { eventTypesChartButtonsMapping as defaultEventTypes } from '../../data/eventTypes';

const PatternsPlot = ({ data }) => {
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
    y: [dataMap[defaultType.type]?.correlationCoefficient || 0],
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
      title: 'Correlation Coefficients',
    },
    title: {
      text: 'Correlation of Blood Glucose Levels with Various Event Types',
      font: {
        size: 20,
      },
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

PatternsPlot.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      correlationCoefficient: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PatternsPlot;
