import { FC } from 'react';
import {
  Box,
  InputLabel as MuiInputLabel,
  InputLabelProps as MuiInputLabelProps,
} from '@mui/material';

interface InputLabelProps extends MuiInputLabelProps {
  tooltip?: string;
}

export const InputLabel: FC<InputLabelProps> = ({ children, ...props }) => (
  <Box display="flex" gap="3px">
    <MuiInputLabel {...props}>{children}</MuiInputLabel>
  </Box>
);
