import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CircularProgress sx={{ color: 'primary.main' }} size="64px" />
        <Typography variant="subtitle1" sx={{ mt: 2, color: 'primary.main' }}>
          Loading...
        </Typography>
      </Box>
    </Box>
  );
};

export default LoadingSpinner;
