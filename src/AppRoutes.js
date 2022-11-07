import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UserPage from './pages/UserPage/UserPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/userpage/:id/*" element={<UserPage />} />
    </Routes>
  );
}

export default AppRoutes;
