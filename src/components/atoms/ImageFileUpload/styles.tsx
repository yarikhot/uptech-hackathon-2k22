import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ImageName = styled(Typography)(({ theme }) => ({
  flex: 1,
  marginRight: theme.spacing(4),
  wordBreak: 'break-word',
}));

export const StyledButton = styled(Button)(() => ({
  '&.MuiButton-root': {
    display: 'flex',
    minWidth: '160px',
    height: '40px',
    padding: 0,
  },
}));

export const FileInfo = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const ImageWrap = styled(Box)(({ theme }) => ({
  width: '84px',
  height: '84px',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  marginRight: theme.spacing(4),
  '& > img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));
