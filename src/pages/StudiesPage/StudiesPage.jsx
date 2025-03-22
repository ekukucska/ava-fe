import React, { useContext, useEffect, useState } from 'react';
import { Card, CardContent, Divider, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import StudiesContext from '../../state/StudiesContext';
import SubjectsContext from '../../state/SubjectsContext';
import MainContentContainer from '../../components/MainContentContainer/MainContentContainer';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import StudiesPlot from '../../components/StudiesPlot/StudiesPlot';
import { fetchAggregatedStudies } from '../../utils/api/aggregatedStudiesApi';
import { fetchAggregatedSubjects } from '../../utils/api/aggregatedSubjectsApi';
import { countStudiesTotals } from '../../utils/counters/countStudiesTotals';

function StudiesPage() {
  const { studiesData, setStudiesData, studiesList, setStudiesList } =
    useContext(StudiesContext);
  const { subjectsData, setSubjectsData } = useContext(SubjectsContext);

  const [studiesTotalCounts, setStudiesTotalCounts] = useState({
    studies: 0,
    subjects: 0,
    totalEvents: 0,
    anomalies: 0,
    eventTypes: {},
  });
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('token');
    if (tokenFromStorage) {
      console.log('Token from localStorage:', tokenFromStorage);
      setToken(tokenFromStorage);
    } else {
      console.error('Token not found in localStorage');
    }
  }, []);

  useEffect(() => {
    if (!token) return; // Wait until token is available

    const fetchData = async () => {
      try {
        if (!studiesData || studiesData.length === 0) {
          const data = await fetchAggregatedStudies(token);
          setStudiesData(data);
        }
        if (!subjectsData || subjectsData.length === 0) {
          const subjects = await fetchAggregatedSubjects(token);
          setSubjectsData(subjects);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [studiesData, subjectsData, setStudiesData, setSubjectsData, token]);

  useEffect(() => {
    if (studiesList.length === 0) {
      const studiesListValue = studiesData.map((study) => study.name);
      setStudiesList(studiesListValue);
    }
  }, [studiesData]);

  useEffect(() => {
    const newTotals = countStudiesTotals(
      studiesList,
      studiesData,
      subjectsData
    );
    setStudiesTotalCounts(newTotals);
  }, [studiesList, subjectsData]);

  console.log('StudiesPage: studiesData:', studiesData); // TODO: Remove after testing
  console.log('StudiesPage: studiesList:', studiesList); // TODO: Remove after testing
  console.log('StudiesPage: subjectsData:', subjectsData); // TODO: Remove after testing
  console.log('StudiesPage: studiesTotalCounts:', studiesTotalCounts); // TODO: Remove after testing

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
          marginBottom: '3.5rem',
          borderRadius: '4px 0px 0px 0px',
        }}
      >
        <CardContent>
          <StudiesPlot studies={studiesData} />
        </CardContent>
      </Card>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: {
            xs: 'center',
            md: 'space-between',
          },
          alignItems: {
            xs: 'center',
            md: 'flex-start',
          },
          gap: '24px',
          marginBottom: '2rem',
          minHeight: { xs: 'auto', sm: 'auto' },
        }}
      >
        {/* STUDIES CARD */}
        <Card
          sx={{
            boxShadow: '0px 2px 4px 0px #00000033',
            flex: {
              xs: '1 1 100%',
              sm: '1 1 calc(50% - 24px)',
              md: '1 1 300px',
            },
            maxWidth: '340px',
            height: '229px',
            padding: '16px',
            borderRadius: '4px 0px 0px 0px',
            opacity: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: { xs: '0 auto', sm: '0' },
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
              Total Studies
            </Typography>

            <Divider sx={{ marginBottom: '12px', width: '100%' }} />

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
                {studiesList.length}
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
              All studies
            </Typography>
          </CardContent>
        </Card>

        {/* PARTICIPANTS CARD */}
        <Card
          sx={{
            boxShadow: '0px 2px 4px 0px #00000033',
            flex: {
              xs: '1 1 100%',
              sm: '1 1 calc(50% - 24px)',
              md: '1 1 300px',
            },
            maxWidth: '340px',
            height: '229px',
            padding: '16px',
            borderRadius: '4px 0px 0px 0px',
            opacity: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: { xs: '0 auto', sm: '0' },
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
              Total Subjects
            </Typography>

            <Divider sx={{ marginBottom: '12px', width: '100%' }} />

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
                {studiesTotalCounts.totalParticipants}
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
              All participants
            </Typography>
          </CardContent>
        </Card>
        {/* EVENTS CARD */}
        <Card
          sx={{
            boxShadow: '0px 2px 4px 0px #00000033',
            flex: {
              xs: '1 1 100%',
              sm: '1 1 calc(50% - 24px)',
              md: '1 1 300px',
            },
            maxWidth: '340px',
            height: '229px',
            padding: '16px',
            borderRadius: '4px 0px 0px 0px',
            opacity: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: { xs: '0 auto', sm: '0' },
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
              Total Events
            </Typography>

            <Divider sx={{ marginBottom: '12px', width: '100%' }} />

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
                {studiesTotalCounts.totalEvents}
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
              All events
            </Typography>
          </CardContent>
        </Card>

        {/* ANOMALIES CARD */}
        <Card
          sx={{
            boxShadow: '0px 2px 4px 0px #00000033',
            flex: {
              xs: '1 1 100%',
              sm: '1 1 calc(50% - 24px)',
              md: '1 1 300px',
            },
            maxWidth: '340px',
            height: '229px',
            padding: '16px',
            borderRadius: '4px 0px 0px 0px',
            opacity: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: { xs: '0 auto', sm: '0' },
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
              Total Anomalies
            </Typography>

            <Divider sx={{ marginBottom: '12px', width: '100%' }} />

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
                {studiesTotalCounts.totalAnomalies}
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
              All anomalies
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </MainContentContainer>
  );
}

export default StudiesPage;
