import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { REDIRECT_ROUTES } from '../config/routes';

const HomePage = lazy(() => import('../components/pages/HomePage'));

const HomeAndRedirectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {REDIRECT_ROUTES.map(({ from, to }) => (
        <Route key={from} path={from} element={<Navigate to={to} replace />} />
      ))}
    </Routes>
  );
};

export default HomeAndRedirectRoutes;
