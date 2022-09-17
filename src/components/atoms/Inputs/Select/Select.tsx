import { Controller, Control, Path, useFormState } from 'react-hook-form';
import { Box, FormHelperText, MenuItem, Select as MuiSelect, Typography } from '@mui/material';
import get from 'lodash.get';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { InputLabel } from '@atoms/InputLabel';

export interface SelectProps<T> {
  control: Control<T, object>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  options: { optionName: string; value: string | number }[];
  tooltip?: string;
  bigPlaceholder?: boolean;
}

export const Select = <T extends object>({
  disabled,
  name,
  placeholder,
  control,
  label,
  options,
  tooltip,
  bigPlaceholder,
}: SelectProps<T>) => {
  const { errors } = useFormState({ control });
  const error = get(errors, name)?.message;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Box width="100%">
          <InputLabel tooltip={tooltip} htmlFor={name}>
            {label}
          </InputLabel>
          <MuiSelect
            {...field}
            disabled={disabled}
            id={name}
            error={!!error}
            displayEmpty
            renderValue={
              field.value
                ? undefined
                : () => (
                    <Typography
                      sx={{ lineHeight: '172%' }}
                      variant={bigPlaceholder ? 'body1' : 'body2'}
                      color="text.disabled"
                    >
                      {placeholder}
                    </Typography>
                  )
            }
            IconComponent={KeyboardArrowDownOutlinedIcon}
          >
            <MenuItem value="">None</MenuItem>
            {options?.map(({ optionName, value }) => (
              <MenuItem value={value} key={value}>
                {optionName}
              </MenuItem>
            ))}
          </MuiSelect>
          {error && <FormHelperText>{error}</FormHelperText>}
        </Box>
      )}
    />
  );
};
