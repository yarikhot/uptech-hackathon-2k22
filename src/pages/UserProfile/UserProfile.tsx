/* eslint-disable no-param-reassign */
import { FC, useState } from 'react';
import { Avatar, Box, Button, Typography, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import CurrencyYenOutlinedIcon from '@mui/icons-material/CurrencyYenOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

import { fillProfileValidation } from '@constants';
import { TextField } from '@atoms';

import { useProfile } from '@hooks/useProfile';

import { User } from 'src/Types';
import { setProfile } from 'src/store/profileSlice';
import { palette } from '@styles/palette';

export const UserProfile: FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const { profile } = useProfile();

  const { handleSubmit, control } = useForm<User>({
    resolver: yupResolver(fillProfileValidation),
    defaultValues: profile,
  });

  const onSubmit = (data: User) => {
    dispatch(setProfile(data));
  };

  return (
    <Box display="flex" flexDirection="column" mt="16px">
      {isEditing ? (
        <Box
          onSubmit={handleSubmit(onSubmit)}
          display="flex"
          component="form"
          flexDirection="column"
          width="532px"
        >
          <Box my="16px">
            <TextField
              label="User name"
              control={control}
              name="userName"
              placeholder="Ex. yarikhot"
              required
            />
          </Box>
          <Box display="flex" mt="24px" justifyContent="flex-end">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ width: '130px', height: '44px' }}
            >
              Save
            </Button>
          </Box>
        </Box>
      ) : (
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
            <IconButton
              onClick={() => setIsEditing(true)}
              sx={{ position: 'absolute', top: '12px', right: '16px' }}
            >
              <SettingsSuggestOutlinedIcon />
            </IconButton>
          </Box>
          <Box display="flex" mt="24px" alignItems="center" justifyContent="space-between">
            <Typography variant="h4">List of your deals</Typography>
            <Button variant="contained" endIcon={<AddCircleOutlinedIcon />}>
              Add you deal
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};
