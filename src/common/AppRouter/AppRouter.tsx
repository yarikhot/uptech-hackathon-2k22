import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import { ROUTES } from '@constants';
import {
  DealsList,
  Login,
  Marketplace,
  NewsFeed,
  NotFound,
  Post,
  Signup,
  UserProfile,
} from '@pages';
import { ProtectedRoute, PublicRoute, Loader } from '@atoms';
import { AppLayout } from '@templates/AppLayout';
import { useProfile } from '@hooks/useProfile';

import { LeaderBoard } from '@pages/LeaderBoard';

export const AppRouter: FC = () => {
  const {
    profile: { isAuthorized },
  } = useProfile();

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
              <Route path={ROUTES.LeaderBoard} element={<LeaderBoard />} />
              <Route path={ROUTES.UserProfile} element={<UserProfile />} />
              <Route path={ROUTES.Deals} element={<DealsList />} />
              <Route path={ROUTES.MarketPlace} element={<Marketplace />} />
              <Route path={ROUTES.NewsFeed} element={<NewsFeed />} />
              <Route path={ROUTES.Post} element={<Post />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Loader>
    </Box>
  );
};
