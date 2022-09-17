import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from '@organisms';

import { Content, Wrap, Inner } from './styles';

export const AppLayout: FC = () => (
  <Wrap>
    <Sidebar />
    <Content>
      <Header />
      <Inner>
        <Outlet />
      </Inner>
    </Content>
  </Wrap>
);
