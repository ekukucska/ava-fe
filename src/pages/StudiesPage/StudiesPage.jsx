import React, { useEffect, useState } from 'react';
import MainContentContainer from '../../components/MainContentContainer/MainContentContainer';
import Typography from '@mui/material/Typography';

function StudiesPage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/', { mode: 'cors' })
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <>
      <MainContentContainer>
        <Typography variant="subtitle1" sx={{ marginBottom: '2rem' }}>
          Studies Page
        </Typography>
        <Typography variant="body1">Data from BE: {message}</Typography>
      </MainContentContainer>
    </>
  );
}

export default StudiesPage;
