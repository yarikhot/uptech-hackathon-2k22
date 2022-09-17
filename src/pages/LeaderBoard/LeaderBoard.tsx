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
        <Typography variant="body1" sx={{ mb: '36px' }}>
          {LeagueTypes[key]}
        </Typography>
        <Box>
          {mockData
            .filter((item) => item.league === LeagueTypes[key])
            .map(({ id, name, imageUrl, score }) => (
              <UserCard name={name} id={id} imageUrl={imageUrl} score={score} />
            ))}
        </Box>
      </Box>
    ))}
  </Box>
);
