import React from 'react';
import { Outlet } from 'react-router';

const List = () => (
  <div>
    <h1>list</h1>
    <Outlet />
  </div>
);

export default List;
