/* eslint-disable no-param-reassign */
import React, { FC } from 'react';
import { Box, Button, IconButton, Modal } from '@mui/material';
import { useForm } from 'react-hook-form';

import { DealTypes } from '@types';
import { Dropdown, ImageFileUpload, TextField, TextareaAutosize } from '@atoms';
import { useDispatch } from 'react-redux';
import { addDeals } from 'src/store/deals';
import { makeid } from 'src/store/userDeal';
import CloseIcon from '@mui/icons-material/Close';

interface IFormData {
  type: DealTypes;
  imageUrl: string;
  title: string;
  description: string;
}

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

const dropdownOptions = [
  { label: DealTypes.Blood, value: DealTypes.Blood },
  { label: DealTypes.cleaning, value: DealTypes.cleaning },
  { label: DealTypes.constructions, value: DealTypes.constructions },
  { label: DealTypes.medicalHelp, value: DealTypes.medicalHelp },
  { label: DealTypes.money, value: DealTypes.money },
];

const defaultValues = {
  type: DealTypes.money,
  imageUrl: '',
  title: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ',
};

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddDealFormSideBar: FC<IProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const { handleSubmit, control, register, setValue } = useForm<IFormData>({
    defaultValues,
  });

  const onSubmit = (formData: IFormData) => {
    dispatch(
      addDeals({
        id: makeid(8),
        title: formData.title,
        description: formData.description,
        type: formData.type,
        imageUrl: '/testDealImg.png',
        amount: 340,
      }),
    );
    onClose();
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: '16px', mt: '16px' }}>
            <TextField control={control} name="title" placeholder="Ваша назва справи" />
          </Box>
          <Box sx={{ mb: '16px' }}>
            <TextareaAutosize control={control} name="description" placeholder="Ваш опис справи" />
          </Box>
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
      </Box>
    </Modal>
  );
};
