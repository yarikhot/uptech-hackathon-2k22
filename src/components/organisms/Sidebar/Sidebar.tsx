import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Divider, List, ListItemText, Typography } from '@mui/material';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import { ROUTES } from '@constants';
import { palette } from '@styles/palette';

import { SidebarWrap, ListItemButton } from './styles';

const NAV_LIST: Array<{ name: string; path: string; activeRoutes: string[] }> = [
  {
    name: 'Profile',
    path: `/${ROUTES.UserProfile}`,
    activeRoutes: [`/${ROUTES.UserProfile}`],
  },
  {
    name: 'List of deals',
    path: `/${ROUTES.UserProfile}`,
    activeRoutes: [`/${ROUTES.UserProfile}`],
  },
  {
    name: 'Leader board',
    path: `/${ROUTES.UserProfile}`,
    activeRoutes: [`/${ROUTES.UserProfile}`],
  },
  {
    name: 'Marketplace',
    path: `/${ROUTES.UserProfile}`,
    activeRoutes: [`/${ROUTES.UserProfile}`],
  },
];

export const Sidebar: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <SidebarWrap>
      <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <Typography variant="h4">YouAre</Typography>
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
            <ListItemButton>
              <ListItemText
                sx={{ mr: '6px' }}
                primary="Add you deal"
                primaryTypographyProps={{
                  variant: 'subtitle1',
                  color: 'text.secondary',
                }}
              />
              <AddCircleOutlinedIcon htmlColor="#797789" />
            </ListItemButton>
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
