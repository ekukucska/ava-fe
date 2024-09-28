import React, { useEffect, useState } from 'react';
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
    <div>
      <Typography variant="subtitle1">Studies Page</Typography>
      <Typography variant="body1">{message}</Typography>
    </div>
  );
}

export default StudiesPage;
