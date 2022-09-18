import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Divider, List, ListItemText } from '@mui/material';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import { ROUTES } from '@constants';
import { palette } from '@styles/palette';

import { SidebarWrap, ListItemButton } from './styles';

import { AddDealFormSideBar } from './AddDealFormSideBar';

const NAV_LIST: Array<{ name: string; path: string; activeRoutes: string[] }> = [
  {
    name: 'Профіль',
    path: `/${ROUTES.UserProfile}`,
    activeRoutes: [`/${ROUTES.UserProfile}`],
  },
  {
    name: 'Таблиця лідерів',
    path: `/${ROUTES.LeaderBoard}`,
    activeRoutes: [`/${ROUTES.LeaderBoard}`],
  },
  {
    name: 'Маркетплейс',
    path: `/${ROUTES.MarketPlace}`,
    activeRoutes: [`/${ROUTES.MarketPlace}`],
  },
  {
    name: 'Блог',
    path: `/${ROUTES.NewsFeed}`,
    activeRoutes: [`/${ROUTES.NewsFeed}`],
  },
  {
    name: 'Добрі справи',
    path: `/${ROUTES.Deals}`,
    activeRoutes: [`/${ROUTES.Deals}`],
  },
];

export const Sidebar: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isModalOpen, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  return (
    <>
      <SidebarWrap>
        <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
          <Box
            sx={{
              width: '30px',
              height: '20px',
            }}
          >
            <img src="/logo.svg" alt="some" />
          </Box>
          <Box height="100%">
            <List dense>
              <Divider sx={{ my: '25px' }} />
              {NAV_LIST.map(({ name, path, activeRoutes }) => (
                <ListItemButton
                  key={path}
                  onClick={() => navigate(path)}
                  className={activeRoutes.includes(pathname) ? 'active' : ''}
                  sx={{
                    mb: '4px',
                  }}
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
              <ListItemButton onClick={onOpenModal}>
                <ListItemText
                  sx={{ mr: '6px' }}
                  primary="Додати добру справу"
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
      <AddDealFormSideBar isOpen={isModalOpen} onClose={onCloseModal} />
    </>
  );
};
