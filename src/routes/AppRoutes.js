import React from "react";
import { Routes, Route } from "react-router-dom";
import Studies from "../pages/StudiesPage/StudiesPage.jsx";
import Subjects from "../pages/SubjectsPage/SubjectsPage.jsx";
import Events from "../pages/EventsPage/EventsPage.jsx";
import EventsDetailsPage from "../pages/EventsDetailsPage/EventsDetailsPage.jsx";
import MainLayout from "../layouts/MainLayout/MainLayout.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Studies />} />
        <Route path="studies" element={<Studies />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="events" element={<Events />} />
        <Route path="events/events-details" element={<EventsDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
