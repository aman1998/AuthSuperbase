import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import TextArea, { ITextAreaProps } from "@shared/ui/TextArea/TextArea";

interface Props<T extends FieldValues> extends Omit<ITextAreaProps, "onChange" | "value"> {
  control: Control<T>;
  errorMessage?: string;
  name: Path<T>;
}
const TextAreaControl = <T extends FieldValues>({ control, name, errorMessage, ...props }: Props<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <TextArea {...props} status={!!errorMessage ? "error" : undefined} onChange={onChange} value={value} />
    )}
  />
);

export default TextAreaControl;
