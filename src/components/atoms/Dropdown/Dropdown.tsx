import { TextField } from '@mui/material';
import * as React from 'react';
import { Controller } from 'react-hook-form';
import { IProps } from './IProps';
import { StyledMenuItem } from './styles';

export const Dropdown = <T extends object>({
  control,
  name,
  options,
  placeholder = '',
  error,
  helperText = '',
  id,
  disabled,
  withoutSpacing,
  customWidth,
  withoutLabel = false,
  onChange,
}: IProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <TextField
        {...field}
        select
        onChange={({ target: { value } }) => {
          field.onChange(value);
          if (onChange) {
            onChange(value);
          }
        }}
        label={placeholder}
        error={error}
        helperText={helperText}
        id={id}
        disabled={disabled}
        sx={{
          mb: withoutSpacing ? 0 : 8,
          width: customWidth,
          '& .notranslate': {
            display: 'none',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            top: withoutLabel ? 0 : '-5px',
          },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-input': {
            lineHeight: '40px',
          },
          padding: 0,
          '&.MuiTextField-root': {
            mb: 4,
          },
        }}
      >
        {options.map(({ value, label, isHidden }) => (
          <StyledMenuItem key={value} value={value} sx={{ display: isHidden ? 'none' : 'flex' }}>
            {label}
          </StyledMenuItem>
        ))}
      </TextField>
    )}
  />
);
