import { Control, Path } from "react-hook-form";
import { IOption } from "./types";

export interface IProps<T> {
  control: Control<T, object>;
  name: Path<T>;
  options: IOption[];
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  id?: string;
  disabled?: boolean;
  withoutSpacing?: boolean;
  customWidth?: string;
  withoutLabel?: boolean;
  onChange?: (value: string | number) => void;
}
