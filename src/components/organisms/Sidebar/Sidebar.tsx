import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Divider, List, ListItemText } from '@mui/material';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';

import { ROUTES } from '@constants';
import { palette } from '@styles/palette';

import { SidebarWrap, ListItemButton } from './styles';

const NAV_LIST: Array<{ name: string; path: string; activeRoutes: string[] }> = [
  {
    name: 'Reviews',
    path: `/${ROUTES.Reviews}`,
    activeRoutes: [`/${ROUTES.Reviews}`, `/${ROUTES.ManageReviews}`],
  },
  {
    name: 'Observation',
    path: `/${ROUTES.Observation}`,
    activeRoutes: [`/${ROUTES.Observation}`],
  },
  {
    name: 'Feedback',
    path: `/${ROUTES.Feedback}`,
    activeRoutes: [`/${ROUTES.Feedback}`],
  },
  {
    name: 'Goals',
    path: `/${ROUTES.Goals}`,
    activeRoutes: [`/${ROUTES.Goals}`],
  },
  {
    name: 'People',
    path: `/${ROUTES.People}`,
    activeRoutes: [`/${ROUTES.People}`, '/'],
  },
  {
    name: 'Deals',
    path: `/${ROUTES.Deals}`,
    activeRoutes: [`/${ROUTES.Deals}`, '/'],
  },
];

export const Sidebar: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <SidebarWrap>
      <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <Box height="100%">
          <List dense>
            <Divider sx={{ my: '25px' }} />
            {NAV_LIST.map(({ name, path, activeRoutes }) => (
              <ListItemButton
                key={path}
                onClick={() => navigate(path)}
                className={activeRoutes.includes(pathname) ? 'active' : ''}
              >
                <ListItemText
                  primary={name}
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'text.secondary',
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
        <Box>
          <Divider sx={{ mb: '20px' }} />
          <ListItemButton onClick={() => console.log('click')}>
            <HelpOutlinedIcon htmlColor={palette.action.active} fontSize="small" />
            <ListItemText
              sx={{ ml: '7px' }}
              primary="Get help"
              primaryTypographyProps={{
                variant: 'subtitle1',
                color: 'text.secondary',
              }}
            />
          </ListItemButton>
        </Box>
      </Box>
    </SidebarWrap>
  );
};
