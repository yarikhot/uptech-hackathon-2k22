import { FC } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { theme } from '@styles';
import { useNavigate } from 'react-router-dom';
import { posts } from './utils';

export const NewsFeed: FC = () => {
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const navigate = useNavigate();

  return (
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
          Блог
        </Typography>
        <Grid container spacing={6} sx={{ pt: 4, pb: 4 }}>
          {posts.map(({ id, title, description, imageUrl }) => (
            <Grid item xs={matches ? 4 : undefined} key={id}>
              <Card onClick={() => navigate(`/feed/${id}`)}>
                <CardMedia component="img" height="140" image={imageUrl} alt="image" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                    }}
                  >
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
