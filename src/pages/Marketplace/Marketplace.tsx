import { FC, useState } from 'react';
import {
  Card as MuiCard,
  Tab,
  Tabs,
  Typography,
  Grid,
  CardMedia,
  CardContent,
  Button,
  Box,
} from '@mui/material';
import styled from 'styled-components';

import { mock } from './mock';

const Card = styled(MuiCard)`
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  cursor: pointer;
  min-width: 330px;
  max-width: 330px;
  min-height: 440px;

  img {
    height: 280px;
  }

  .MuiCardMedia-root {
    transition: all 0.2s linear;
  }

  &:hover {
    .MuiCardMedia-root {
      scale: 1.2;
    }
  }
`;

export const Marketplace: FC = () => {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Typography
        variant="h3"
        color="text.primary"
        sx={{
          pt: 4,
          pb: 4,
        }}
      >
        Marketplace
      </Typography>
      <Tabs value={page} onChange={(e, newPage) => setPage(newPage)}>
        <Tab label="NFT" />
        <Tab label="ТРО Онліфанс" />
        <Tab label="Привітання від блогерів" />
        <Tab label="Автографи" />
      </Tabs>
      <Grid container spacing={6} sx={{ pt: 4, pb: 4 }}>
        {mock[page].map(({ imageLink, name, id, price }) => (
          <Grid item key={id}>
            <Card>
              <Box overflow="hidden">
                <CardMedia component="img" height="140" image={imageLink} alt="image" />
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  Price: {price}
                </Typography>
                <Button size="small">Buy</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
