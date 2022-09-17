import { FC, SyntheticEvent } from 'react';
import { Control, Controller, Path, UseControllerReturn } from 'react-hook-form';
import MuiAutocomplete from '@mui/material/Autocomplete';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { Box, Chip } from '@mui/material';

import { validateEmail } from '@helpers';
import { SelectOption } from '@services';
import { InputLabel } from '@atoms/InputLabel';

interface AutocompleteProps<T> {
  control: Control<T, object>;
  name: Path<T>;
  options?: SelectOption[];
  exclusive?: boolean;
  inputProps?: TextFieldProps;
  label?: string;
  tooltip?: string;
  disabled?: boolean;
}

export const Autocomplete = <T extends object>({
  control,
  name,
  options = [],
  inputProps = {},
  label,
  tooltip,
  disabled,
}: AutocompleteProps<T>) => (
  <Controller
    control={control}
    name={name}
    render={(controllerProps) => (
      <RenderAutocomplete<T>
        options={options}
        inputProps={inputProps}
        label={label}
        tooltip={tooltip}
        disabled={disabled}
        {...controllerProps}
      />
    )}
  />
);

interface RenderAutocompleteProps<T> extends UseControllerReturn<T> {
  options?: SelectOption[];
  inputProps?: TextFieldProps;
  label?: string;
  tooltip?: string;
  disabled?: boolean;
}

const RenderAutocomplete = <T extends object>({
  field,
  options = [],
  inputProps,
  label,
  tooltip,
  disabled,
}: RenderAutocompleteProps<T>) => (
  <Box width="100%">
    {label && <InputLabel tooltip={tooltip}>{label}</InputLabel>}
    <MuiAutocomplete
      disablePortal
      disabled={disabled}
      options={options}
      onChange={(e, value) =>
        field.onChange(value.map((v) => (typeof v === 'string' ? { value: v, label: v } : v)))
      }
      value={field.value as SelectOption[]}
      multiple
      freeSolo
      autoHighlight
      clearIcon={!inputProps?.disabled}
      id={field.name}
      renderTags={(values: any, getTagProps) =>
        values.map((item: { label: string } | string, index: number) => (
          <Chip
            variant="outlined"
            label={typeof item === 'string' ? item : item.label}
            {...getTagProps({ index })}
            {...(inputProps?.disabled && { onDelete: undefined })}
          />
        ))
      }
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          {...inputProps}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: 'auto',
              alignItems: 'flex-start',
            },
          }}
        />
      )}
    />
  </Box>
);

interface EmailAutocompleteProps {
  name: string;
  inputProps?: TextFieldProps;
  onChange: (event: SyntheticEvent<Element, Event>, values: string[]) => void;
  label?: string;
  tooltip?: string;
}

export const EmailAutocomplete: FC<EmailAutocompleteProps> = ({
  name,
  inputProps = {},
  onChange,
  label,
  tooltip,
}) => (
  <Box>
    {label && <InputLabel tooltip={tooltip}>{label}</InputLabel>}
    <MuiAutocomplete
      multiple
      freeSolo
      autoHighlight
      options={[]}
      id={name}
      onChange={onChange}
      filterSelectedOptions
      renderTags={(values: any, getTagProps) =>
        values.map((item: string, index: number) => (
          <Chip
            variant="outlined"
            color={!validateEmail(item) ? 'error' : 'default'}
            label={item}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          {...inputProps}
          name={name}
          sx={{
            '& .MuiOutlinedInput-root': {
              minHeight: '129px',
              height: 'auto',
              alignItems: 'flex-start',
            },
          }}
        />
      )}
    />
  </Box>
);
