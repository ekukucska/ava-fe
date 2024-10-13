import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import StudiesContext from '../../state/StudiesContext';
import CustomButton from '../CustomButton/CustomButton';

const Footer = () => {
  const { selectedStudies, setSelectedStudies, setCompareMultipleStudies } =
    useContext(StudiesContext);

  const handleOnClickCancel = () => {
    setSelectedStudies([]);
    setCompareMultipleStudies(false);
  };

  const handleOnClickCheckEvents = () => {
    console.log('StudiesFooter: handleOnClickCheckEvents: Check events'); // TODO: Remove with propper logic
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f7fc',
        position: 'fixed',
        bottom: 0,
        padding: '16px 40px',
        boxSizing: 'border-box',
      }}
    >
      {/* Left Div */}
      <Box
        sx={{
          minWidth: '910px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '96px',
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
            No studies selected
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
            <Typography variant="h2">0</Typography>
          </Box>

          {/* TOTAL PATCHES */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <Typography variant="caption">TOTAL PATCHES</Typography>
            <Typography variant="h2">0</Typography>
          </Box>

          {/* TOTAL EVENTS */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
            }}
          >
            <Typography variant="caption">TOTAL EVENTS</Typography>
            <Typography variant="h2">0</Typography>
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
