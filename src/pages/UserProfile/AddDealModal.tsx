/* eslint-disable no-param-reassign */
import React, { FC } from 'react';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import { DealTypes } from 'src/Types';
import { Dropdown, ImageFileUpload } from '@atoms';

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

interface IFormData {
  type: number;
  imageUrl: string;
}

const dropdownOptions = [
  { label: DealTypes.Blood, value: 1 },
  { label: DealTypes.cleaning, value: 2 },
  { label: DealTypes.constructions, value: 3 },
  { label: DealTypes.medicalHelp, value: 4 },
  { label: DealTypes.money, value: 5 },
];

const defaultValues = {
  type: 5,
  imageUrl: '',
};

export const AddDealModal: FC<IProps> = ({ isOpen, onClose }) => {
  const { handleSubmit, control, register, setValue } = useForm<IFormData>({
    defaultValues,
  });

  const onSubmit = (formData: IFormData) => {
    console.log('formData', formData);
  };

  const onStartLoad = () => console.log('onStartLoad');
  const onFinishLoad = () => console.log('onFinishLoad');

  return (
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
        <Typography variant="h4" sx={{ mb: 4 }}>
          Add a new deal
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {/* TODO: update this copy!!! */}
          Ми поважаємо тебе, тож постався, будь ласка, відповідально до звітування щодо твоєї участі
          в певній активності
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Dropdown
            withoutLabel
            control={control}
            name="type"
            placeholder=""
            options={dropdownOptions}
          />
          <ImageFileUpload
            register={register}
            setValue={setValue}
            fieldName="imageUrl"
            imageURL=""
            onStartLoad={onStartLoad}
            onFinishLoad={onFinishLoad}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: 4,
            }}
          >
            <Button onClick={onClose} variant="outlined">
              Закрити
            </Button>
            <Button type="submit" variant="contained">
              Відправити
            </Button>
          </Box>
        </form>
        <Box />
      </Box>
    </Modal>
  );
};
