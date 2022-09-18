/* eslint-disable no-param-reassign */
import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export const CreatedPost: FC = () => (
  <Box sx={{ pt: 2 }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Typography variant="body1" sx={{ fontSize: '28px', lineHeight: '28px', mr: 1 }}>
          ⭐️
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '28px', lineHeight: '28px' }}>
          340
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Typography variant="body1" sx={{ fontSize: '28px', lineHeight: '28px', mr: 1 }}>
          $
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '28px', lineHeight: '28px' }}>
          100
        </Typography>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img
        src="/prytula.png"
        alt="prytula"
        style={{
          maxWidth: '100%',
          height: '500px',
          marginBottom: '16px',
        }}
      />
    </Box>
    <Typography
      variant="body1"
      sx={{
        textAlign: 'center',
        mb: 2,
      }}
    >
      Поділись цим фото у своїх соцмережах та отримай додаткових <strong>50 коїнів</strong>
    </Typography>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        '& .MuiSvgIcon-root': {
          fill: 'inherit',
        },
      }}
    >
      <a href="https://www.facebook.com/" style={{ marginRight: 8 }}>
        <FacebookIcon />
      </a>
      <a href="https://twitter.com/" style={{ marginRight: 8 }}>
        <TwitterIcon />
      </a>
      <a href="https://www.instagram.com/">
        <InstagramIcon />
      </a>
    </Box>
  </Box>
);
