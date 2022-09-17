/* eslint-disable no-param-reassign */
import { FC, useState } from 'react';
import { Avatar, Box, Button, Typography, IconButton } from '@mui/material';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import CurrencyYenOutlinedIcon from '@mui/icons-material/CurrencyYenOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import { useProfile } from '@hooks/useProfile';

import { palette } from '@styles/palette';
import { AddDealModal } from './AddDealModal';

export const UserProfile: FC = () => {
  const { profile } = useProfile();
  const [isModalOpen, setOpenModal] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  return (
    <>
      <Box display="flex" flexDirection="column" mt="16px">
        <Box mt="32px">
          <Typography variant="h4" mb="12px">
            Profile
          </Typography>
          <Box
            sx={{
              padding: '12px 16px',
              background: palette.backgrounds.primary,
              borderRadius: '12px',
              position: 'relative',
            }}
          >
            <Box display="flex" alignItems="center">
              <Avatar
                sizes="70px"
                sx={{ height: '80px', width: '80px', mr: '16px' }}
                src={profile.imageUrl}
              />
              <Box>
                <Typography variant="h7">{profile.userName}</Typography>
                <br />
                <Typography>{profile.email}</Typography>
                <Box display="flex" alignItems="center">
                  <StarPurple500OutlinedIcon />
                  {profile.score}
                  <CurrencyYenOutlinedIcon />
                  {profile.coinAmount}
                </Box>
              </Box>
            </Box>
            <IconButton sx={{ position: 'absolute', top: '12px', right: '16px' }}>
              <SettingsSuggestOutlinedIcon />
            </IconButton>
          </Box>
          <Box display="flex" mt="24px" alignItems="center" justifyContent="space-between">
            <Typography variant="h4">List of your deals</Typography>
            <Button variant="contained" endIcon={<AddCircleOutlinedIcon />} onClick={onOpenModal}>
              Add your deal
            </Button>
          </Box>
        </Box>
      </Box>
      <AddDealModal isOpen={isModalOpen} onClose={onCloseModal} />
    </>
  );
};
