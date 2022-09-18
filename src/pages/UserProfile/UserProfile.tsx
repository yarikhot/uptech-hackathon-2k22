/* eslint-disable no-param-reassign */
import { FC, useState } from 'react';
import { Avatar, Box, Button, Typography, IconButton } from '@mui/material';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import CurrencyYenOutlinedIcon from '@mui/icons-material/CurrencyYenOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import styled from 'styled-components';

import { useProfile } from '@hooks/useProfile';

import { palette } from '@styles/palette';
import { useSelector } from 'react-redux';
import { AddDealModal } from './AddDealModal';

const DealRow = styled.div`
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  .item {
    width: 120px;
  }

  &:hover {
    background: ${({ theme }) => theme.palette.backgrounds.primary};
  }
`;

export const UserProfile: FC = () => {
  const { profile } = useProfile();
  const dealsAll = useSelector((state: any) => state.userDeal);

  const deals = dealsAll.filter(({ userId }: any) => profile.id === userId);

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
          <Box
            mb="32px"
            display="flex"
            mt="24px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h4">List of your deals</Typography>
            <Button variant="contained" endIcon={<AddCircleOutlinedIcon />} onClick={onOpenModal}>
              Add you deal
            </Button>
          </Box>
          {deals.map(({ id, type, date, amount }: any) => (
            <DealRow key={id}>
              <Typography className="item">{id}</Typography>
              <Typography className="item">{type}</Typography>
              <Typography className="item">{date}</Typography>
              <Typography className="item" display="flex" alignItems="center">
                {amount}{' '}
                <Typography
                  variant="body1"
                  sx={{ fontSize: '28px', lineHeight: '28px', ml: '12px' }}
                >
                  ⭐️
                </Typography>
              </Typography>
            </DealRow>
          ))}
        </Box>
      </Box>
      <AddDealModal isOpen={isModalOpen} onClose={onCloseModal} />
    </>
  );
};
