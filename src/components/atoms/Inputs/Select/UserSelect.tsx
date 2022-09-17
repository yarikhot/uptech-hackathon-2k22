import { Controller, Control, Path, useFormState } from 'react-hook-form';
import {
  Avatar,
  Box,
  Chip,
  FormHelperText,
  MenuItem,
  Select as MuiSelect,
  Typography,
} from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import get from 'lodash.get';

import { Profile } from '@services';
import { getFullName, stringAvatar } from '@helpers';
import { InputLabel } from '@atoms/InputLabel';

export interface UserSelectProps<T> {
  control: Control<T, object>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  options: Profile[];
  tooltip?: string;
}

export const UserSelect = <T extends object>({
  disabled,
  name,
  placeholder,
  control,
  label,
  options,
  tooltip,
}: UserSelectProps<T>) => {
  const { errors } = useFormState({ control });
  const error = get(errors, name)?.message;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Box width="100%">
          {label && (
            <InputLabel tooltip={tooltip} htmlFor={name}>
              {label}
            </InputLabel>
          )}
          <MuiSelect
            {...field}
            disabled={disabled}
            id={name}
            error={!!error}
            displayEmpty
            onChange={(e) =>
              field.onChange(e.target.value === '' ? '' : JSON.parse(e.target.value as string))
            }
            renderValue={
              field.value
                ? () => {
                    const user =
                      typeof field.value === 'string'
                        ? JSON.parse(field.value)
                        : (field.value as Profile); // to avoid TS error

                    return (
                      <Chip
                        avatar={
                          <Avatar
                            src={user.imageLink as string}
                            {...stringAvatar(getFullName(user) || user.email)}
                          />
                        }
                        variant="outlined"
                        label={getFullName(user) || user.email}
                        // onDelete={(e) => {
                        //   e.stopPropagation();
                        //   field.onChange('');
                        // }}
                      />
                    );
                  }
                : () => (
                    <Typography variant="body2" sx={{ lineHeight: '172%' }} color="text.disabled">
                      {placeholder}
                    </Typography>
                  )
            }
            IconComponent={KeyboardArrowDownOutlinedIcon}
          >
            <MenuItem value="">None</MenuItem>
            {options?.map((user: Profile) => (
              <MenuItem value={JSON.stringify(user)} key={user.id}>
                <Avatar
                  sizes="24px"
                  src={user.imageLink as string}
                  {...stringAvatar(getFullName(user) || user.email)}
                  sx={{ mr: '8px' }}
                />
                {getFullName(user) || user.email}
              </MenuItem>
            ))}
          </MuiSelect>

          {error && <FormHelperText>{error}</FormHelperText>}
        </Box>
      )}
    />
  );
};
