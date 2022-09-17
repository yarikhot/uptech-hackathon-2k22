import { FC, useState, MouseEvent } from 'react';
import {
  Avatar,
  Box,
  Stack,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useProfile } from '@hooks/useProfile';
import { ROUTES } from '@constants';
import { Profile } from '@services';

const menuItemSx = { fontWeight: 600, fontSize: '13px' };

export const TopMenu: FC = () => {
  const users = useSelector((store: any) => store.users);
  const activeUsers = users.filter(({ active }: Profile) => active);

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);
  const onClose = () => setAnchorEl(null);

  const {
    profile: { workspace },
  } = useProfile();

  return (
    <Box display="flex" flex="1" alignItems="center">
      <Avatar sizes="40px" src={workspace.imageLink as string} sx={{ borderRadius: '4px' }} />
      <Stack ml="16px" direction="column" minWidth="110px">
        <Typography fontWeight={500}>{workspace.name}</Typography>
        <Typography variant="caption" fontWeight={500} color="action.active">
          Middle school
        </Typography>
      </Stack>
      <Box>
        <IconButton
          onClick={(event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)}
        >
          <KeyboardArrowDownIcon fontSize="medium" />
        </IconButton>
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={onClose}>
          <MenuItem
            sx={menuItemSx}
            onClick={() => {
              navigate(`/${ROUTES.Workspace}`);
              onClose();
            }}
          >
            Workspace settings
          </MenuItem>
          <MenuItem sx={menuItemSx} onClick={() => onClose()}>
            Invite teachers
          </MenuItem>
          <MenuItem sx={menuItemSx} onClick={() => onClose()}>
            Help center
          </MenuItem>
          <Divider sx={{ margin: '0 !important' }} />
          <Button
            sx={{
              width: '188px',
              height: '31px',
              mt: '14px',
              mx: '16px',
              fontWeight: 500,
              fontSize: '13px',
            }}
            variant="contained"
          >
            Upgrade plan
          </Button>
          <Typography
            fontSize="12px"
            lineHeight="20px"
            mb="14px"
            mt="4px"
            color="text.secondary"
            textAlign="center"
          >
            You have {activeUsers.length} active users
          </Typography>
        </Menu>
      </Box>
    </Box>
  );
};
