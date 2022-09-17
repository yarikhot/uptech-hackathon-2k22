import { Controller, Control, Path, useFormState, FieldValues } from 'react-hook-form';
import {
  Typography,
  TextareaAutosize as MuiTextareaAutosize,
  TextareaAutosizeProps as MuiTextareaAutosizeProps,
  FormHelperText,
  Box,
} from '@mui/material';
import get from 'lodash.get';
import { palette } from '@styles/palette';
import { InputLabel } from '@atoms/InputLabel';
import styled from 'styled-components';

export interface TextareaAutosizeProps<T extends FieldValues> {
  control: Control<T, object>;
  name: Path<T>;
  outsideError?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  helperText?: string;
  required?: boolean;
  tooltip?: string;
}

const TextareaAutosizeStyled = styled(MuiTextareaAutosize)<
  { error?: boolean } & MuiTextareaAutosizeProps
>`
  background: ${({ theme }) => theme.palette.text.white};
  border: 1px solid ${({ theme, error }) => (error ? theme.palette.error.main : '#e4e5f4')};
  border-radius: 8px;
  width: 100%;
  padding: 10px 16px;
  font-weight: 400;
  font-size: 13px;
  line-height: 174%;
  outline: none;
  resize: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.divider};
  }

  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }

  &::placeholder {
    color: ${({ theme }) => theme.palette.text.disabled};
    font-weight: 400;
    font-size: 13px;
    line-height: 174%;
  }
`;

export const TextareaAutosize = <T extends object>({
  name,
  control,
  label,
  placeholder,
  disabled,
  outsideError,
  helperText,
  required,
  tooltip,
}: TextareaAutosizeProps<T>) => {
  const { errors } = useFormState({ control });
  const error = get(errors, name)?.message || outsideError;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Box width="100%">
          {label && (
            <InputLabel tooltip={tooltip} htmlFor={name}>
              {label} {required && <span style={{ color: palette.primary.main }}>*</span>}
            </InputLabel>
          )}
          <TextareaAutosizeStyled
            {...field}
            disabled={disabled}
            minRows={3}
            id={name}
            value={field.value as string}
            placeholder={placeholder}
            error={!!error}
          />
          {helperText && (
            <Typography ml="16px" mt="3px" variant="caption" color="text.secondary">
              {helperText}
            </Typography>
          )}
          {error && <FormHelperText>{error}</FormHelperText>}
        </Box>
      )}
    />
  );
};
