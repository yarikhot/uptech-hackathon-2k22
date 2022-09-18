import { Box, Avatar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// remove after merge
export const UserCard = ({
  id = 1,
  name = 'some name',
  imageUrl = '/testImage.jpg',
  score = 10,
}) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/profile/${id}`, { replace: true });
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      key={id}
      onClick={onClick}
      sx={{
        width: '378px',
        height: '54px',
        backgroundColor: '#F5F7FC',
        borderRadius: '8px',
        padding: '8px 16px',
        cursor: 'pointer',
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
};
