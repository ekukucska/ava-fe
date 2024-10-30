import React from 'react';
import Plot from 'react-plotly.js';
import { Box, CardContent } from '@mui/material';

const ParticipantsPlot = () => {
  const studies = [
    {
      name: 'Study 1',
      totalParticipants: 50,
    },
    {
      name: 'Study 2',
      totalParticipants: 30,
    },
    {
      name: 'Study 3',
      totalParticipants: 70,
    },
    {
      name: 'Study 4',
      totalParticipants: 100,
    },
    {
      name: 'Study 5',
      totalParticipants: 20,
    },
  ];

  const plotData = [
    {
      x: studies.map((study) => study.totalParticipants),
      y: studies.map((study) => study.name),
      type: 'bar',
      orientation: 'h',
      width: Array(studies.length).fill(0.4),
      marker: {
        color: '#0052A3',
      },
      text: studies.map(
        (study) => `${study.name}<br>${study.totalParticipants} participants`
      ),
      textposition: 'inside',
      insidetextanchor: 'middle',
      textfont: {
        color: 'white',
        size: 10,
      },
    },
  ];

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
      showgrid: true,
      zeroline: false,
      showline: false,
      linecolor: 'lightgrey',
      linewidth: 0.5,
      visible: true,
      showticklabels: false,
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

export default ParticipantsPlot;
