import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import PropTypes from 'prop-types';

const EventTypesHeader = ({ study }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: '16px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        margin: 0,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h1">{`Study: ${study.studyName}`}</Typography>
        <Typography variant="h5">{`Date: ${study.start} - ${study.end}`}</Typography>
        <Typography variant="h5">{`Participants: ${study.subjects.length}`}</Typography>
      </Box>

      <Box
        sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
      >
        <Typography variant="caption" sx={{ fontWeight: '700' }}>
          PATCHES
        </Typography>
        <Typography variant="h2">{study.patches.length}</Typography>
      </Box>

      <Box
        sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
      >
        <Typography variant="caption" sx={{ fontWeight: '700' }}>
          EVENTS
        </Typography>
        <Typography variant="h2">{study.events.length}</Typography>
      </Box>

      <Chip
        label={study.status || 'Not validated'}
        sx={{
          backgroundColor: '#e6e6e6',
          color: 'black',
          borderRadius: '0.5rem',
        }}
      />
    </Box>
  );
};

EventTypesHeader.propTypes = {
  study: PropTypes.shape({
    studyName: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    subjects: PropTypes.arrayOf(PropTypes.string).isRequired,
    patches: PropTypes.arrayOf(PropTypes.string).isRequired,
    events: PropTypes.arrayOf(
      PropTypes.shape({
        eventType: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        percentage: PropTypes.number,
      })
    ).isRequired,
    status: PropTypes.string,
  }).isRequired,
};

export default EventTypesHeader;
