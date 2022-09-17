import { FC } from 'react';
import {
  Box,
  InputLabel as MuiInputLabel,
  InputLabelProps as MuiInputLabelProps,
  Tooltip,
} from '@mui/material';

import { ReactComponent as QuestionMark } from '@assets/question.svg';

interface InputLabelProps extends MuiInputLabelProps {
  tooltip?: string;
}

export const InputLabel: FC<InputLabelProps> = ({ tooltip, children, ...props }) => (
  <Box display="flex" gap="3px">
    <MuiInputLabel {...props}>{children}</MuiInputLabel>
    {tooltip && (
      <Tooltip title={tooltip}>
        <Box mt="3px">
          <QuestionMark />
        </Box>
      </Tooltip>
    )}
  </Box>
);
