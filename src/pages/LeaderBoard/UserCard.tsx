import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';

// test image

// remove after merge
export const UserCard = ({
  // id = '1',
  // userName = 'userName',
  name = ' some name',
  // email = 'someemail@example.com',
  imageUrl = '/testImage.jpg',
}) => (
  <Box
    display="flex"
    alignItems="center"
    sx={{
      backgroundColor: ' #F5F7FC',
      borderRadius: '8px',
      padding: '8px',
    }}
  >
    <Avatar alt="avatar" src={imageUrl} sx={{ mr: '16px' }} />
    <Typography variant="body1">{name}</Typography>
  </Box>
);
