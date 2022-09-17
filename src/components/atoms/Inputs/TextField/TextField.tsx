import { Controller, Control, Path, useFormState } from 'react-hook-form';
import { TextField as MuiTextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import get from 'lodash.get';
import { palette } from '@styles/palette';
import { InputLabel } from '@atoms/InputLabel';

export interface TextFieldProps<T> {
  control: Control<T, object>;
  name: Path<T>;
  outsideError?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  helperText?: string;
  required?: boolean;
  tooltip?: string;
}

export const TextField = <T extends object>({
  name,
  control,
  label,
  placeholder,
  type,
  disabled,
  outsideError,
  helperText,
  required,
  tooltip,
}: TextFieldProps<T>) => {
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
          <MuiTextField
            {...field}
            disabled={disabled}
            type={type}
            id={name}
            placeholder={placeholder}
            error={!!error}
            variant="outlined"
            helperText={error}
          />
          {helperText && (
            <Typography ml="16px" mt="3px" variant="caption" color="text.secondary">
              {helperText}
            </Typography>
          )}
        </Box>
      )}
    />
  );
};
