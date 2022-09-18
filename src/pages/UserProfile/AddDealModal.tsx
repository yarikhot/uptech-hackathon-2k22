/* eslint-disable no-param-reassign */
import React, { FC, useState } from 'react';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { AddDealForm } from './AddDealForm';
import { CreatedPost } from './CreatedPost';

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
}

export const AddDealModal: FC<IProps> = ({ isOpen, onClose }) => {
  const [isCreatedPostOpen, setCreatedPostOpen] = useState(false);

  const onOpenCreatedPost = () => {
    setCreatedPostOpen(true);
  };

  const onModalClose = () => {
    onClose();
    setCreatedPostOpen(false);
  };

  return (
    <Modal
      open={isOpen}
      onClose={onModalClose}
      aria-labelledby="add-deal-modal-title"
      aria-describedby="add-deal-modal-description"
    >
      <Box sx={modalStyles}>
        <IconButton
          aria-label="close"
          onClick={onModalClose}
          sx={{
            position: 'absolute',
            top: 4,
            right: 4,
          }}
        >
          <CloseIcon />
        </IconButton>
        {!isCreatedPostOpen ? (
          <>
            <Typography variant="h4" sx={{ mb: 4 }}>
              Add a new deal
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              {/* TODO: update this copy!!! */}
              Ми поважаємо тебе, тож постався, будь ласка, відповідально до звітування щодо твоєї
              участі в певній активності
            </Typography>
            <AddDealForm onClose={onModalClose} onOpenCreatedPost={onOpenCreatedPost} />
          </>
        ) : null}
        {isCreatedPostOpen ? <CreatedPost /> : null}
      </Box>
    </Modal>
  );
};
