import { FC } from 'react';
import styled from 'styled-components';
import {
  Typography,
  Box,
  IconButton,
  ModalProps as MuiModalProps,
  Modal as MuiModal,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { palette } from '@styles/palette';

interface ModalProps extends MuiModalProps {
  onClose: () => void;
  title?: string;
}

const Content = styled(Box)`
  width: 624px;
  background: ${(props) => props.theme.palette.text.white};
  border-radius: 10px;
  height: fit-content;
`;

const Modal: FC<ModalProps> = ({ children, onClose, title, ...props }) => (
  <MuiModal
    sx={{ overflow: 'auto', display: 'flex', justifyContent: 'center', py: '50px' }}
    onClose={onClose}
    keepMounted={false}
    {...props}
  >
    <Content>
      <Box height="100%" width="100%">
        <Box
          display="flex"
          justifyContent="space-between"
          height="56px"
          py="12px"
          px="24px"
          sx={{ background: palette.backgrounds.secondary, borderRadius: '10px 10px 0 0' }}
        >
          <Typography fontWeight={600} fontSize="20px">
            {title}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box p="16px 24px 24px 24px">{children}</Box>
      </Box>
    </Content>
  </MuiModal>
);

export default Modal;
