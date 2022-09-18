// components
import { Box, Typography } from '@mui/material';
import { LeagueTypes, User } from '@types';
import { useSelector } from 'react-redux';
import { UserCard } from './UserCard';

export const LeaderBoard = () => {
  const users = useSelector((state: any) => state.users);

  return (
    <Box>
      <Typography
        variant="h3"
        color="text.primary"
        sx={{
          pt: 4,
          pb: 4,
        }}
      >
        Таблиця лідерів
      </Typography>
      {(Object.keys(LeagueTypes) as Array<keyof typeof LeagueTypes>).map((key) => (
        <Box display="flex" flexDirection="column" sx={{ mb: '48px' }}>
          <Typography variant="h6" component="h6" sx={{ mb: '36px' }}>
            {LeagueTypes[key]}
          </Typography>
          <Box>
            {users
              .filter((item: User) => item.league === LeagueTypes[key])
              .sort((a: User, b: User) => {
                if (a.score < b.score) return 1;
                return -1;
              })
              .map(({ id, name, imageUrl, score }: any, index: number) => (
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
};
