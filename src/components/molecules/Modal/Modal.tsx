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

interface ModalProps extends MuiModalProps {
  onClose: () => void;
  title?: string;
}

const Content = styled(Box)`
  width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.palette.secondary.contrastText};
  border: 1px solid ${(props) => props.theme.palette.divider};
  border-radius: 12px;
`;

const Modal: FC<ModalProps> = ({ children, onClose, title, ...props }) => (
  <MuiModal onClose={onClose} keepMounted={false} {...props}>
    <Content>
      <Box py="24px" px="32px" height="100%" width="100%">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5">{title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        {children}
      </Box>
    </Content>
  </MuiModal>
);

export default Modal;
