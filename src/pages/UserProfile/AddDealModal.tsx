/* eslint-disable no-param-reassign */
import React, { FC } from 'react';
import { Box, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const modalStyles = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  p: 4,
};

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const AddDealModal: FC<IProps> = ({ isOpen, onClose, children }) => (
  <Modal
    open={isOpen}
    onClose={onClose}
    aria-labelledby="add-deal-modal-title"
    aria-describedby="add-deal-modal-description"
  >
    <Box sx={modalStyles}>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 4,
          right: 4,
        }}
      >
        <CloseIcon />
      </IconButton>
      {children}
      <Box />
    </Box>
  </Modal>
);
