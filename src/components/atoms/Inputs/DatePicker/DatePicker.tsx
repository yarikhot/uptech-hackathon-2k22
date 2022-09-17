import { Controller, Control, Path } from 'react-hook-form';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import dayjs from 'dayjs';

interface DatePickerProps<T> {
  control: Control<T, object>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
}

export const DatePicker = <T extends object>({
  control,
  name,
  label,
  placeholder,
}: DatePickerProps<T>) => (
  <Box width="100%">
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Box>
          {label && <InputLabel>{label}</InputLabel>}
          <DesktopDatePicker
            views={['year', 'month', 'day']}
            value={field.value ? dayjs(field.value as Date) : null}
            onChange={(newValue) =>
              field.onChange(newValue ? dayjs(newValue)?.format('MM-DD-YYYY') : null)
            }
            inputFormat="MM-DD-YYYY"
            renderInput={(params) => (
              <TextField {...params} inputProps={{ ...params.inputProps, placeholder }} />
            )}
          />
        </Box>
      )}
    />
  </Box>
);
