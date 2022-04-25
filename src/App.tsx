/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Route, Routes } from 'react-router';
import Form from './components/common/Form/Form';
import Header from './components/common/Header/Header';
import PageWrapper from './components/common/PageWrapper/PageWrapper';
import AuthPage from './components/pages/AuthPage/AuthPage';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route index element={<AuthPage />} />
    </Route>
  </Routes>
);

export default App;
