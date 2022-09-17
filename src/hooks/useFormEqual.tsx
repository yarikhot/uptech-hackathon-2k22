import { Dispatch, useEffect } from 'react';
import isEqual from 'lodash.isequal';
import { UseFormWatch, UseFormReset, UnpackNestedValue, FieldValues } from 'react-hook-form';

interface FormEqualParams<T extends FieldValues> {
  setDisabled: Dispatch<boolean>;
  data: UnpackNestedValue<T>;
  reset: UseFormReset<T>;
  watch: UseFormWatch<T>;
  disabled: boolean;
}

export const useFormEqual = <T extends FieldValues>({
  setDisabled,
  data,
  reset,
  watch,
  disabled,
}: FormEqualParams<T>) => {
  useEffect(() => {
    reset(data);
    setDisabled(true);
  }, [data]);

  useEffect(() => {
    watch((_data: object) => {
      if (isEqual(data, _data) !== disabled) {
        setDisabled(isEqual(data, _data));
      }
    });
  }, [disabled]);
};
