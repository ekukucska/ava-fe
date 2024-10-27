import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const WrapperContainer = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '33%' },
            display: 'flex',
            flexDirection: 'column',
            mt: '40px',
          }}
        >
          <Box
            sx={{
              mb: '144px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src="/assets/svg/DataSenseGray.svg"
              alt="Logo"
              sx={{
                display: 'flex',
                mr: 1,
                width: 80,
                height: 'auto',
              }}
            />
            <Divider
              orientation="vertical"
              sx={{
                display: { xs: 'none', md: 'flex' },
                height: 40,
                backgroundColor: theme.palette.divider,
                mx: 2,
              }}
            />
            <Typography
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontFamily: "'Brandon Grotesque', 'sans-serif'",
                fontWeight: 700,
                letterSpacing: '0.05rem',
                textDecoration: 'none',
                color: theme.palette.secondary.main,
              }}
            >
              Data Visualization App
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: '100%', sm: '320px' },
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              textAlign: 'center',
              mx: { xs: '1rem', sm: '2rem', md: '5rem' },
            }}
          >
            {children}
          </Box>
        </Box>
        <Box
          sx={{
            width: '67%',
            backgroundImage: 'url(/assets/png/SignUpArtwork.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: { xs: 'none', md: 'block' },
          }}
        />
      </Box>
    </>
  );
};

WrapperContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrapperContainer;
