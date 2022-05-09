import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AdHeader from '../Header/AdHeader';
import style from './PageWrapper.module.scss';

const PageWrapper = () => {
  const isAdmin = false;
  return (
    <div className={style.page_wrapper}>
      {isAdmin ? <AdHeader /> : <Header />}
      <main className={style.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
