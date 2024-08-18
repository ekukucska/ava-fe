import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import { Container } from '@mui/material';

function MainLayout() {
  return (
    <div>
      <Header />
      <Container sx={{ padding: '40px' }} maxWidth={false}>
        <Outlet />
      </Container>
    </div>
  );
}

export default MainLayout;
