import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import { ROUTES } from '@constants';
import { Login, NotFound, Signup } from '@pages';
import { ProtectedRoute, PublicRoute, Loader } from '@atoms';
import { AppLayout } from '@templates/AppLayout';

import { UserCard } from '@pages/LeaderBoard';

export const AppRouter: FC = () => {
  const isAuthorized = true;

  return (
    <Box height="100vh">
      <Loader isLoading={false}>
        <Routes>
          <Route element={<PublicRoute isAuthorized={isAuthorized} />}>
            <Route path={ROUTES.Login} element={<Login />} />
            <Route path={ROUTES.Signup} element={<Signup />} />
          </Route>
          <Route element={<ProtectedRoute isAuthorized={isAuthorized} />}>
            <Route element={<AppLayout />}>
              <Route path={ROUTES.LeaderBoard} element={<UserCard />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Loader>
    </Box>
  );
};
