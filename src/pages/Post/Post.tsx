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
        Чому донатити важливо
      </Typography>
      <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
        24.02.2022
      </Typography>
      <img
        src="/help.jpg"
        alt="help"
        style={{
          maxWidth: '100%',
          height: '500px',
          marginBottom: '16px',
        }}
      />
      <Typography variant="body1" color="text.primary">
        Але буде несправедливим не згадати про те, що культура малих донатів в Україні формується
        вже досить тривалий час. Лише на початку червня з’явилося чимало ініціатив для збору таких
        регулярних пожертв. Відправ Франка на фронт, Всі по 10 та низка інших проєктів уже понад
        місяць займаються тим, аби щодня нагадувати українцям про важливість кожної гривні та
        допомагати волонтерам і військовим.
      </Typography>
    </Container>
  </Box>
);
