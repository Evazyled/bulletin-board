import React from 'react';

import { Route, Routes } from 'react-router';

import PageWrapper from './components/common/PageWrapper/PageWrapper';
import AuthPage from './pages/AuthPage/AuthPage';

import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Route>
  </Routes>
);

export default App;
