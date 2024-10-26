import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import type { DatePickerProps } from "antd";

import SelectPeriod from "../../ui/SelectPeriod";

interface Props<T extends FieldValues> extends Omit<DatePickerProps<Date>, "value" | "onChange"> {
  control: Control<T>;
  errorMessage?: string;
  name: Path<T>;
  className?: string;
  label: string;
}

const SelectPeriodControl = <T extends FieldValues>({ label, control, name, className, ...dateProps }: Props<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <SelectPeriod {...dateProps} label={label} className={className} onChange={onChange} value={value} />
    )}
  />
);

export default SelectPeriodControl;
