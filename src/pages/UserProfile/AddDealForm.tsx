/* eslint-disable no-param-reassign */
import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import { DealTypes } from '@types';
import { Dropdown, ImageFileUpload } from '@atoms';

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

interface IProps {
  onClose: () => void;
  onOpenCreatedPost: () => void;
}

export const AddDealForm: FC<IProps> = ({ onClose, onOpenCreatedPost }) => {
  const { handleSubmit, control, register, setValue } = useForm<IFormData>({
    defaultValues,
  });

  const onSubmit = (formData: IFormData) => {
    console.log('formData', formData);
    onOpenCreatedPost();
  };

  const onStartLoad = () => console.log('onStartLoad');
  const onFinishLoad = () => console.log('onFinishLoad');

  return (
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
  );
};
