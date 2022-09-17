import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import { ROUTES } from '@constants';
import { Login, NotFound, Signup } from '@pages';
import { ProtectedRoute, PublicRoute, Loader } from '@atoms';
import { useUser } from '@hooks/useUser';
import { AppLayout } from '@templates/AppLayout';

export const AppRouter: FC = () => {
  const { isAuthorized, isLoading } = useUser();

  return (
    <Box height="100vh">
      <Loader isLoading={isLoading}>
        <Routes>
          <Route element={<PublicRoute isAuthorized={isAuthorized} />}>
            <Route path={ROUTES.Login} element={<Login />} />
            <Route path={ROUTES.Signup} element={<Signup />} />
          </Route>
          <Route element={<ProtectedRoute isAuthorized={isAuthorized} />}>
            <Route element={<AppLayout />}>
              <Route index element="123" />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Loader>
    </Box>
  );
};
