import { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';

export const Post: FC = () => (
  <Box>
    <Container maxWidth="xl">
      <Typography
        variant="h3"
        color="text.primary"
        sx={{
          pt: 4,
          pb: 4,
        }}
      >
        Post
      </Typography>
    </Container>
  </Box>
);
