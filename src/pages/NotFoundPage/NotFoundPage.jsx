import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CustomButton from '../../components/CustomButton/CustomButton';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: 3,
      }}
    >
      <Typography variant="subtitle4" sx={{ fontWeight: 500, mb: 4 }}>
        404
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <CustomButton
        variant="contained"
        color="primary"
        text="Go to Home"
        onClick={() => navigate('/')}
        sx={{ mt: 2, height: '40px', width: '210px' }}
      />
    </Box>
  );
}

export default NotFoundPage;
