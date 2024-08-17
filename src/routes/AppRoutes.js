import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/HomePage.jsx";
import Subjects from "../pages/SubjectsPage/SubjectsPage.jsx";
import Events from "../pages/EventsPage/EventsPage.jsx";
import MainLayout from "../layouts/MainLayout/MainLayout.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="studies" element={<Home />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="events" element={<Events />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
