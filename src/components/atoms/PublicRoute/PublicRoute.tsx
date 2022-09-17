import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@constants';

export const PublicRoute: FC<{ isAuthorized: boolean }> = ({ isAuthorized }) => {
  if (isAuthorized) {
    return <Navigate to={ROUTES.Home} />;
  }

  return <Outlet />;
};
