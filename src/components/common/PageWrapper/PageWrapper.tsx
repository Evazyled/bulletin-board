import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import style from './PageWrapper.module.scss';

const PageWrapper = () => (
  <div className={style.page_wrapper}>
    <Header />
    <main className={style.content}>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default PageWrapper;
