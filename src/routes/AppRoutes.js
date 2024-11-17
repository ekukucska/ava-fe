import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute.jsx';
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
      {/* Private routes */}
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Studies />
            </PrivateRoute>
          }
        />
        <Route
          path="studies"
          element={
            <PrivateRoute>
              <Studies />
            </PrivateRoute>
          }
        />
        <Route
          path="patterns"
          element={
            <PrivateRoute>
              <Patterns />
            </PrivateRoute>
          }
        />
        <Route
          path="events"
          element={
            <PrivateRoute>
              <Events />
            </PrivateRoute>
          }
        />
        <Route
          path="events/events-details"
          element={
            <PrivateRoute>
              <EventsDetailsPage />
            </PrivateRoute>
          }
        />
      </Route>
      {/* Public routes */}
      <Route path="signin" element={<SignInPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
