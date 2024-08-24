import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const EventTypeBox = ({ number, title, color }) => {
  return (
    <>
      <Box
        key={title}
        sx={{
          width: '4.125rem',
          height: '4.625rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '0.438rem',
          border: '1px solid #e6f0fa',
          padding: '0.5rem',
          boxSizing: 'border-box',
          gap: '3.2px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: '1rem',
              height: '1rem',
              borderRadius: '50%',
              backgroundColor: color,
              marginRight: 1,
            }}
          />
          <Typography variant="body2">{number}</Typography>
        </Box>
        <Typography variant="caption" sx={{ marginTop: 1 }}>
          {title}
        </Typography>
      </Box>
    </>
  );
};

EventTypeBox.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default EventTypeBox;
