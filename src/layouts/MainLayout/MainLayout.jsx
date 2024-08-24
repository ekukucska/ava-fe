import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
