import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constants';

export const ProtectedRoute: FC<{ isAuthorized: boolean }> = ({ isAuthorized }) => {
  if (!isAuthorized) {
    return <Navigate to={ROUTES.Login} />;
  }

  return <Outlet />;
};
