import { FC } from 'react';
import { Box, Typography, Link } from '@mui/material';

import { ReactComponent as AvatarsGroup } from '@assets/avatars-group.svg';
import bg from '@assets/signup-bg.svg';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { palette } from '@styles/palette';

import { Wrapper, BackgroundImage } from './styles';

export const SignupContainer: FC = ({ children }) => (
  <Wrapper>
    <Box flex="1">
      <Box
        width="440px"
        pt="194px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        position="relative"
        mx="auto"
        height="100%"
      >
        <Box position="absolute" left="0" top="44px">
          You are
        </Box>
        {children}
      </Box>
    </Box>
    <Box width="644px" height="100%" position="relative">
      <BackgroundImage src={bg} alt="Welcome to You are" />
      <Box mx="auto" mt="273px" width="356px" zIndex={100} position="absolute" left="118px">
        <Typography mb="32px" variant="h2" fontWeight="800">
          <span style={{ color: palette.primary.main }}>Welcome</span> to You are
        </Typography>
        <Typography mb="32px" variant="body2" fontWeight="600">
          Some text
        </Typography>
      </Box>
    </Box>
  </Wrapper>
);
