import { Box, Avatar, Typography } from '@mui/material';

// remove after merge
export const UserCard = ({
  id = 1,
  name = 'some name',
  imageUrl = '/testImage.jpg',
  score = 10,
}) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    key={id}
    sx={{
      width: '378px',
      height: '54px',
      backgroundColor: '#F5F7FC',
      borderRadius: '8px',
      padding: '8px 16px',
    }}
  >
    <Box display="flex" alignItems="center">
      <Avatar alt="avatar" src={imageUrl} sx={{ mr: '16px' }} />
      <Typography variant="body1" sx={{ lineHeight: '38px' }}>
        {name}
      </Typography>
    </Box>
    <Box display="flex" alignItems="center">
      <Typography variant="body1" sx={{ mr: '16px', lineHeight: '38px' }}>
        {score}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '28px', lineHeight: '28px' }}>
        ⭐️
      </Typography>
    </Box>
  </Box>
);
