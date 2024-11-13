import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Studies from '../pages/StudiesPage/StudiesPage.jsx';
import Patterns from '../pages/PatternsPage/PatternsPage.jsx';
import Events from '../pages/EventsPage/EventsPage.jsx';
import EventsDetailsPage from '../pages/EventsDetailsPage/EventsDetailsPage.jsx';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
import SignInPage from '../pages/SignInPage/SignInPage.jsx';
import SignUpPage from '../pages/SignUpPage/SignUpPage.jsx';
import MainLayout from '../layouts/MainLayout/MainLayout.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Studies />} />
        <Route path="studies" element={<Studies />} />
        <Route path="patterns" element={<Patterns />} />
        <Route path="events" element={<Events />} />
        <Route path="events/events-details" element={<EventsDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
