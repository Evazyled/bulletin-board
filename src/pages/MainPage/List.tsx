import React from 'react';
import { Outlet } from 'react-router';

const List: React.FC = ({ children }) => (
  <div>
    <Outlet />
  </div>
);

export default List;
