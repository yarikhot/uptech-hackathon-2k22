// components
import { Box, Typography } from '@mui/material';
import { LeagueTypes } from '@types';
import { UserCard } from './UserCard';
import { mockData } from './mock';

export const LeaderBoard = () => (
  <Box
    sx={{
      paddingTop: '36px',
    }}
  >
    {(Object.keys(LeagueTypes) as Array<keyof typeof LeagueTypes>).map((key) => (
      <Box display="flex" flexDirection="column" sx={{ mb: '48px' }}>
        <Typography variant="h6" component="h6" sx={{ mb: '36px' }}>
          {LeagueTypes[key]}
        </Typography>
        <Box>
          {mockData
            .filter((item) => item.league === LeagueTypes[key])
            .sort((a, b) => {
              if (a.score < b.score) return 1;
              return -1;
            })
            .map(({ id, name, imageUrl, score }, index) => (
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  mb: '12px',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ mr: '12px', fontSize: '12px', lineHeight: '54px' }}
                >
                  {index + 1}.
                </Typography>
                <UserCard name={name} id={id} imageUrl={imageUrl} score={score} />
              </Box>
            ))}
        </Box>
      </Box>
    ))}
  </Box>
);
