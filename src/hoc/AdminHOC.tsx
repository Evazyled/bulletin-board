/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Navigate } from 'react-router';

const AdminHOC: React.FC = ({ children }) => {
  const isAdmin = false;
  if (isAdmin) {
    return <>{children}</>;
  }

  return <Navigate to="/auth" />;
};

export default AdminHOC;
