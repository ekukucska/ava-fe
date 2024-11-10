import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { useTheme } from '@mui/material/styles';
import StudiesContext from '../../state/StudiesContext';
import CustomButton from '../CustomButton/CustomButton';

const Footer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const {
    selectedStudies,
    setSelectedStudies,
    setCompareMultipleStudies,
    selectedStudiesTotalCounts,
  } = useContext(StudiesContext);

  const handleOnClickCancel = () => {
    setSelectedStudies([]);
    setCompareMultipleStudies(false);
  };

  const handleOnClickCheckEvents = () => {
    console.log('StudiesFooter: handleOnClickCheckEvents: Check events'); // TODO: Remove with propper logic

    setCompareMultipleStudies(false);
    navigate('/events/events-details');
  };

  console.log('StudiesFooter: selectedStudies', selectedStudies); // TODO: Remove after testing

  return (
    <Box
      sx={{
        width: '100vw',
        height: '80px',
        display: 'flex',
        justifyContent: { xs: 'right', md: 'space-between' },
        alignItems: 'center',
        backgroundColor: `${theme.palette.ava_light_blue_two.main}`,
        position: 'fixed',
        bottom: 0,
        padding: '16px 40px',
        boxSizing: 'border-box',
        borderTop: `2px solid ${theme.palette.ava_light_blue.main}`,
      }}
    >
      {/* Left Div */}
      <Box
        sx={{
          width: '100%',
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          gap: { xs: '0', md: '96px' },
        }}
      >
        {/* Left-side of the Left Div */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '3rem',
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontWeight: 'bold', marginRight: '16px' }}
          >
            Select multiple studies
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
            {selectedStudies.length !== 0
              ? selectedStudies.length
              : 'No studies selected'}
          </Typography>
        </Box>

        {/* Right-side of the Left Div */}
        <Box sx={{ display: 'flex', gap: '32px' }}>
          {/* TOTAL PARTICIPANTS */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <Typography variant="caption">TOTAL PARTICIPANTS</Typography>
            <Typography variant="h2">
              {selectedStudiesTotalCounts.totalParticipants}
            </Typography>
          </Box>

          {/* TOTAL PATCHES */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <Typography variant="caption">TOTAL EVENTS</Typography>
            <Typography variant="h2">
              {selectedStudiesTotalCounts.totalEvents}
            </Typography>
          </Box>

          {/* TOTAL EVENTS */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <Typography variant="caption">TOTAL ANOMALIES</Typography>
            <Typography variant="h2">
              {selectedStudiesTotalCounts.totalAnomalies}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Div */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        <CustomButton
          text="Cancel"
          variant="outlined"
          sx={{ height: '3rem', padding: '0 32px' }}
          onClick={handleOnClickCancel}
        />
        <CustomButton
          text="Check events"
          variant="contained"
          sx={{
            height: '3rem',
            padding: '0 32px',
            whiteSpace: 'nowrap',
          }}
          startIcon={<CheckIcon />}
          onClick={handleOnClickCheckEvents}
        />
      </Box>
    </Box>
  );
};

export default Footer;
