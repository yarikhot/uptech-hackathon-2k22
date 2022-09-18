/* eslint-disable no-param-reassign */
import { FC } from 'react';
import { Avatar, Box, Button, Typography, IconButton } from '@mui/material';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import CurrencyYenOutlinedIcon from '@mui/icons-material/CurrencyYenOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import styled from 'styled-components';

import { useProfile } from '@hooks/useProfile';

import { palette } from '@styles/palette';
import { DealTypes } from '@types';

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

const mock = [
  { id: 1, deal: DealTypes.Blood, date: '24-02-2022', amount: 30 },
  { id: 2, deal: DealTypes.cleaning, date: '24-02-2022', amount: 30 },
  { id: 3, deal: DealTypes.constructions, date: '24-02-2022', amount: 30 },
  { id: 4, deal: DealTypes.medicalHelp, date: '24-02-2022', amount: 30 },
  { id: 5, deal: DealTypes.money, date: '24-02-2022', amount: 30 },
  { id: 6, deal: DealTypes.money, date: '24-02-2022', amount: 30 },
  { id: 7, deal: DealTypes.money, date: '24-02-2022', amount: 30 },
];

export const UserProfile: FC = () => {
  const { profile } = useProfile();

  return (
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
        <Box mb="32px" display="flex" mt="24px" alignItems="center" justifyContent="space-between">
          <Typography variant="h4">List of your deals</Typography>
          <Button variant="contained" endIcon={<AddCircleOutlinedIcon />}>
            Add you deal
          </Button>
        </Box>
        {mock.map(({ id, deal, date, amount }) => (
          <DealRow key={id}>
            <Typography className="item">{id}</Typography>
            <Typography className="item">{deal}</Typography>
            <Typography className="item">{date}</Typography>
            <Typography className="item" display="flex" alignItems="center">
              {amount}{' '}
              <Typography variant="body1" sx={{ fontSize: '28px', lineHeight: '28px', ml: '12px' }}>
                ⭐️
              </Typography>
            </Typography>
          </DealRow>
        ))}
      </Box>
    </Box>
  );
};
