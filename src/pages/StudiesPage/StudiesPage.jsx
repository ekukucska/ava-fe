import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import MainContentContainer from '../../components/MainContentContainer/MainContentContainer';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function StudiesPage() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/', { mode: 'cors' })
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <MainContentContainer>
      <Typography variant="subtitle1" sx={{ marginBottom: '2rem' }}>
        Studies Page
      </Typography>
      <Typography variant="body1">Data from BE: {message}</Typography>
    </MainContentContainer>
  );
}

export default StudiesPage;
