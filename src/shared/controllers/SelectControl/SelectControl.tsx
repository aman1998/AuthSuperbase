import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import type { SelectProps } from "antd";

import Select from "@shared/ui/Select";

interface Props<T extends SelectProps> extends SelectProps {
  control: Control<T>;
  errorMessage?: string;
  name: Path<T>;
  className?: string;
  label?: React.ReactNode | string;
}

const SelectControl = <T extends FieldValues>({ control, name, errorMessage, ...props }: Props<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <Select {...props} status={!!errorMessage ? "error" : undefined} value={value} onChange={onChange} />
    )}
  />
);

export default SelectControl;
