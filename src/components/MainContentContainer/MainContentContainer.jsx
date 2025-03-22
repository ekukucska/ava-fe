import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';

const MainContentContainer = ({ children }) => {
  return (
    <Container maxWidth="xl" disableGutters sx={{ padding: '40px' }}>
      {children}
    </Container>
  );
};

MainContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContentContainer;
