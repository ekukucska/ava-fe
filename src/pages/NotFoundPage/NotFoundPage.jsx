import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CustomButton from '../../components/CustomButton/CustomButton'; // Adjust the path as necessary

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
      <Typography
        variant="h1"
        sx={{ fontSize: '6rem', fontWeight: 'bold', mb: 4 }}
      >
        404
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <CustomButton
        variant="contained"
        color="primary"
        text="Go to Home"
        onClick={() => navigate('/')}
        sx={{ mt: 2 }}
      />
    </Box>
  );
}

export default NotFoundPage;
