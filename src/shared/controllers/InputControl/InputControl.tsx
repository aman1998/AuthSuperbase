import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import type { InputProps } from "antd";

import Input from "@shared/ui/Input";

interface Props<T extends InputProps> extends InputProps {
  control: Control<T>;
  errorMessage?: string;
  name: Path<T>;
  isPassword?: boolean;
}

const InputControl = <T extends FieldValues>({ control, name, errorMessage, ...props }: Props<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <Input {...props} status={!!errorMessage ? "error" : undefined} value={value} onChange={onChange} />
    )}
  />
);

export default InputControl;
