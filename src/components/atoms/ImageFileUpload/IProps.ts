import { Path, UseFormRegister, UseFormSetValue } from "react-hook-form";

export interface IProps<T> {
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  fieldName: Path<T>;
  imageURL?: string;
  onStartLoad?: () => void;
  onFinishLoad?: () => void;
  isDisabled?: boolean;
}
