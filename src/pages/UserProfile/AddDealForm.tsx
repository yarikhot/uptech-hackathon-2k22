/* eslint-disable no-param-reassign */
import React, { FC } from 'react';
import { Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';

import { DealTypes } from '@types';
import { Dropdown, ImageFileUpload } from '@atoms';
import { useDispatch } from 'react-redux';
import { useProfile } from '@hooks/useProfile';
import { addUserDeal, makeid } from 'src/store/userDeal';

interface IFormData {
  type: DealTypes;
  imageUrl: string;
}

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
};

interface IProps {
  onClose: () => void;
  onOpenCreatedPost: () => void;
}

export const AddDealForm: FC<IProps> = ({ onClose, onOpenCreatedPost }) => {
  const dispatch = useDispatch();
  const { profile } = useProfile();
  const { handleSubmit, control, register, setValue } = useForm<IFormData>({
    defaultValues,
  });

  const onSubmit = (formData: IFormData) => {
    dispatch(
      addUserDeal({
        id: makeid(8),
        title: 'title',
        description: 'description',
        type: formData.type,
        imageUrl: formData.imageUrl,
        date: '18-09-2022',
        userId: profile.id,
        amount: 340,
      }),
    );
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
