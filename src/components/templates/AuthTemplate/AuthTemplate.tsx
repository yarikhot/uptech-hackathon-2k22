import { FC } from 'react';
import { Box } from '@mui/material';

import { ReactComponent as Logo } from '@assets/logo.svg';
import bg from '@assets/auth-bg.svg';

import { Wrapper, BackgroundImage } from './styles';

export const AuthTemplate: FC = ({ children }) => (
  <Wrapper>
    <Box
      position="absolute"
      display="flex"
      justifyContent="center"
      width="100%"
      height="100%"
      zIndex={10}
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        overflow="auto"
        pb="100px"
      >
        <Box ml="178px" mt="44px" alignSelf="flex-start">
          <Logo />
        </Box>
        {children}
      </Box>
    </Box>
    <BackgroundImage src={bg} alt="Login" />
  </Wrapper>
);
