// components
import { Box, Typography } from '@mui/material';
import { FC } from 'react';

export const NewsFeed: FC = () => (
  <Box>
    <Typography
      variant="h3"
      color="text.primary"
      sx={{
        pt: 4,
        pb: 4,
      }}
    >
      News feed
    </Typography>
  </Box>
);
