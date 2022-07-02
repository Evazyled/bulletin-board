/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Route, Routes } from 'react-router';
import { data } from './helpers/index';
import PageWrapper from './components/common/PageWrapper/PageWrapper';
import AuthPage from './pages/AuthPage/AuthPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AdminAdsPage from './pages/AdsPage/AdminAdsPage';
import AdminHOC from './hoc/AdminHOC';
import MainPage from './pages/MainPage/MainPage';
import OneAdPage from './pages/OneAdPage/OneAdPage';
import List from './pages/MainPage/List';
import AdminAdEditingPage from './pages/EditingPage/AdminEditingPage';
import UserAdsPage from './pages/AdsPage/UserAdsPage';
import UserAdEditingPage from './pages/EditingPage/UserEditingPage';
import TechAdCardList from './pages/MainPage/AdCardList/TechAdCardList';
import AdCardList from './pages/MainPage/AdCardList/AdCardList';

const App = () => (
  <Routes>
    <Route path="/" element={<PageWrapper />}>
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<MainPage />}>
        <Route path="/odezhda" element={<TechAdCardList data={data} />} />
        <Route path="/" element={<AdCardList data={data} />} />
      </Route>

      <Route
        path="/adminAdsPage"
        element={
          <AdminHOC>
            <AdminAdsPage />
          </AdminHOC>
        }
      />
      <Route
        path="/adminEditingPage"
        element={
          <AdminHOC>
            <AdminAdEditingPage />
          </AdminHOC>
        }
      />
      <Route path="/userAdsPage" element={<UserAdsPage />} />
      <Route path="/userEditingPage" element={<UserAdEditingPage />} />
      <Route path="/:category/:title" element={<OneAdPage />} />
    </Route>
  </Routes>
);

export default App;
