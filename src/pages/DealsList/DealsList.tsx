import { FC } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { theme } from '@styles';
import { dealsList } from './utils';

export const DealsList: FC = () => {
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Container maxWidth="xl">
      <Typography
        variant="h3"
        color="text.primary"
        sx={{
          pt: 4,
          pb: 4,
        }}
      >
        Deals
      </Typography>
      <Grid container spacing={6} sx={{ pt: 4, pb: 4 }}>
        {dealsList.map(({ id, title, description, type, imageUrl }) => (
          <Grid item xs={matches ? 4 : undefined} key={id}>
            <Card>
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
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {type}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
