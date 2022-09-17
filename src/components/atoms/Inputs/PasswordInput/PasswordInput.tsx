import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

import { TextField, TextFieldProps } from '../TextField';

export const PasswordField = <T extends object>(props: TextFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box display="flex" width="100%" position="relative">
      <TextField type={!showPassword ? 'password' : 'text'} {...props} />
      <Box position="absolute" top="35px" right="12px">
        <IconButton
          tabIndex={-1}
          onClick={() => setShowPassword(!showPassword)}
          sx={{ minWidth: 0 }}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </Box>
    </Box>
  );
};
