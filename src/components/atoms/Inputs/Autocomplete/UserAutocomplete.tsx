import { Control, Controller, Path, UseControllerReturn, useFormState } from 'react-hook-form';
import MuiAutocomplete from '@mui/material/Autocomplete';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import get from 'lodash.get';
import {
  Avatar,
  Box,
  Chip,
  FormHelperText,
  InputLabel,
  MenuItem,
  //  InputAdornment
} from '@mui/material';
// import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import { Profile } from '@services';
import { getFullName, stringAvatar } from '@helpers';

interface UserAutocompleteProps<T> {
  control: Control<T, object>;
  name: Path<T>;
  options?: Profile[];
  exclusive?: boolean;
  inputProps?: TextFieldProps;
  label?: string;
}

export const UserAutocomplete = <T extends object>({
  control,
  name,
  options = [],
  inputProps = {},
  label,
}: UserAutocompleteProps<T>) => {
  const { errors } = useFormState({ control });
  const error = get(errors, name)?.message;

  return (
    <Controller
      control={control}
      name={name}
      render={(controllerProps) => (
        <RenderAutocomplete<T>
          options={options}
          inputProps={inputProps}
          label={label}
          error={error}
          {...controllerProps}
        />
      )}
    />
  );
};

interface RenderAutocompleteProps<T> extends UseControllerReturn<T> {
  options?: Profile[];
  inputProps?: TextFieldProps;
  label?: string;
  error?: string;
}

const getOptionLabel = (option: Profile | string) => {
  if (typeof option === 'string') {
    return option;
  }

  return getFullName(option) || option.email;
};

const RenderAutocomplete = <T extends object>({
  field,
  options = [],
  inputProps,
  label,
  error,
}: RenderAutocompleteProps<T>) => (
  <Box width="100%">
    {label && <InputLabel>{label}</InputLabel>}
    <MuiAutocomplete
      disablePortal
      options={options}
      onChange={(e, value) => field.onChange(value)}
      value={field.value as Profile[]}
      multiple
      freeSolo
      autoHighlight
      id={field.name}
      getOptionLabel={getOptionLabel}
      renderOption={(props, option) => (
        <MenuItem {...props}>
          <Avatar
            sizes="24px"
            src={option.imageLink as string}
            {...stringAvatar(getFullName(option) || option.email)}
            sx={{ mr: '8px' }}
          />
          {getFullName(option) || option.email}
        </MenuItem>
      )}
      renderTags={(values: Profile[], getTagProps) =>
        values.map((user, index) =>
          typeof user === 'string' ? (
            <Chip
              avatar={<Avatar {...stringAvatar(user)} />}
              variant="outlined"
              label={user}
              {...getTagProps({ index })}
            />
          ) : (
            <Chip
              avatar={
                <Avatar
                  src={user.imageLink as string}
                  {...stringAvatar(getFullName(user) || user.email)}
                />
              }
              variant="outlined"
              label={getFullName(user) || user.email}
              {...getTagProps({ index })}
            />
          ),
        )
      }
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          {...inputProps}
          // InputProps={{
          //   ...params.InputProps,
          //   endAdornment: (
          //     <InputAdornment sx={{ mt: '18px' }} position="end">
          //       <KeyboardArrowDownOutlinedIcon />
          //     </InputAdornment>
          //   ),
          // }}
          error={!!error}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: 'auto',
            },
          }}
        />
      )}
    />
    {error && <FormHelperText>{error}</FormHelperText>}
  </Box>
);
