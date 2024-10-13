import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const MainContentContainer = ({ children }) => {
  return <Box sx={{ padding: '40px' }}>{children}</Box>;
};

MainContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContentContainer;
