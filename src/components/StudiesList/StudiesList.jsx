import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EventsTypesList from '../../components/EventsTypesList/EventsTypesList';
import formatISODateToDayMonth from '../../utils/transformers/formatISODateToDayMonth';

const StudiesList = ({ studies, showPercentage }) => {
  const navigate = useNavigate();

  const handleOnClickStudyCard = () => {
    navigate('/events/events-details');
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {studies.map((study) => (
          <Box
            key={study.studyName}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              maxWidth: '1500px',
              border: '1px solid #e6f0fa',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: '#E0ECF9',
              },
            }}
            onClick={handleOnClickStudyCard}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                gap: '2rem',
                padding: '16px',
                boxSizing: 'border-box',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h1">{`Study: ${study.studyName}`}</Typography>
                <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: '700', width: '4.2rem' }}
                  >
                    Date
                  </Typography>
                  <Typography variant="h5" sx={{ width: '5.1rem' }}>
                    {`${formatISODateToDayMonth(study.start)} - ${formatISODateToDayMonth(study.end)}`}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: '700', width: '4.2rem' }}
                  >
                    Participants
                  </Typography>
                  <Typography variant="h5" sx={{ width: '5.1rem' }}>
                    {study.subjects.length}
                  </Typography>
                </Box>
              </Box>

              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: '#e6f0fa' }}
              />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: '700' }}>
                  PATCHES
                </Typography>
                <Typography variant="h2">{study.subjects.length}</Typography>
              </Box>

              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: '#e6f0fa' }}
              />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: '700' }}>
                  EVENTS
                </Typography>
                <Typography variant="h2">{study.patches.length}</Typography>
              </Box>

              <EventsTypesList
                studyData={study}
                showPercentage={showPercentage}
              />

              <Box
                sx={{
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                }}
              >
                <ArrowForwardIosIcon
                  color="secondary"
                  sx={{ width: '1.5rem', height: 'auto' }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                gap: '1rem',
                padding: '1rem',
                alignContent: 'flex-start',
                justifyContent: 'flex-start',
                borderTop: '1px solid #e6f0fa',
              }}
            >
              <Typography variant="body2">Status:</Typography>
              <Chip
                label="Not validated"
                sx={{
                  backgroundColor: '#e6e6e6',
                  color: 'black',
                  borderRadius: '0.5rem',
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

StudiesList.propTypes = {
  studies: PropTypes.arrayOf(
    PropTypes.shape({
      studyName: PropTypes.string.isRequired,
      start: PropTypes.string.isRequired,
      end: PropTypes.string.isRequired,
      subjects: PropTypes.arrayOf(PropTypes.string).isRequired,
      patches: PropTypes.arrayOf(PropTypes.string).isRequired,
      totalEventsCount: PropTypes.number.isRequired,
      events: PropTypes.arrayOf(
        PropTypes.shape({
          eventType: PropTypes.string.isRequired,
          count: PropTypes.number.isRequired,
          percentage: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  showPercentage: PropTypes.bool.isRequired,
};

export default StudiesList;
