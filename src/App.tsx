import React from 'react';

import { Route, Routes } from 'react-router';

import PageWrapper from './components/common/PageWrapper/PageWrapper';
import AuthPage from './pages/AuthPage/AuthPage';

import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default App;
