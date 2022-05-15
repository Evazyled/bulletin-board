/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';

import { Route, Routes } from 'react-router';

import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import PageWrapper from './components/common/PageWrapper/PageWrapper';
import AuthPage from './pages/AuthPage/AuthPage';

import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AdminAdsPage from './pages/AdminAdsPage/AdminAdsPage';
import AdminHOC from './hoc/AdminHOC';
import MainPage from './pages/MainPage/MainPage';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route index element={<MainPage />} />
      <Route
        path="/adminAdsPage"
        element={
          <AdminHOC>
            <AdminAdsPage />
          </AdminHOC>
        }
      />
    </Route>
  </Routes>
);

export default App;
