import { Dispatch, useEffect } from 'react';
import isEqual from 'lodash.isequal';
import { UseFormWatch, UseFormReset, UnpackNestedValue } from 'react-hook-form';

interface FormEqualParams<T> {
  setDisabled: Dispatch<boolean>;
  data: UnpackNestedValue<T>;
  reset: UseFormReset<T>;
  watch: UseFormWatch<T>;
  disabled: boolean;
}

export const useFormEqual = <T,>({
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
