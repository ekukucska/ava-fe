import React, { useEffect, useState } from 'react';
import { Card, CardContent, Divider, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import MainContentContainer from '../../components/MainContentContainer/MainContentContainer';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import StudiesPlot from '../../components/StudiesPlot/StudiesPlot';

const cardData = [
  {
    title: 'Total Studies',
    number: 10,
    additionalText: 'All studies',
  },
  {
    title: 'Total Participants',
    number: 20,
    additionalText: 'All studies',
  },
  { title: 'Total Events', number: 40, additionalText: 'All studies' },
  { title: 'Total Anomalies', number: 30, additionalText: 'All studies' },
];

function StudiesPage() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/', { mode: 'cors' })
      .then((response) => response.text())
      .then((data) => {
        setMessage(data);
        if (data) {
          setLoading(false);
        }
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
        Data Visualization App
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: '2rem' }}>
        Welcome to the DataSense Study Data Visualizer where you can get easy
        insights into your medical studies.
      </Typography>

      {/* Card wrapping the StudiesPlot */}
      <Card
        sx={{
          boxShadow: '0px 2px 4px 0px #00000033',
          maxWidth: '1400px',
          marginBottom: '3.5rem',
          borderRadius: '4px 0px 0px 0px',
        }}
      >
        <CardContent>
          <StudiesPlot />
        </CardContent>
      </Card>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '2rem',
          maxWidth: '1400px',
        }}
      >
        {cardData.map((card, index) => (
          <Card
            key={index}
            sx={{
              boxShadow: '0px 2px 4px 0px #00000033',
              flex: '1 1 300px',
              maxWidth: '320px',
              height: '229px',
              padding: '16px',
              borderRadius: '4px 0px 0px 0px',
              opacity: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: '0 !important',
                '&:last-child': {
                  paddingBottom: '0 !important',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: '#333333',
                  fontSize: '20px',
                  textAlign: 'left',
                  marginBottom: '4px',
                  marginTop: '8px',
                }}
              >
                {card.title}
              </Typography>

              <Divider
                sx={{
                  marginBottom: '12px',
                  width: '100%',
                }}
              />

              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: '48px',
                    color: '#333333',
                    textAlign: 'center',
                  }}
                >
                  {card.number}
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{
                  fontSize: '12px',
                  color: '#333333',
                  textAlign: 'left',
                  marginBottom: 0,
                  marginTop: 'auto',
                  position: 'relative',
                  bottom: 0,
                }}
              >
                {card.additionalText}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Typography variant="body1">TEST - Data from BE: {message}</Typography>
    </MainContentContainer>
  );
}

export default StudiesPage;
