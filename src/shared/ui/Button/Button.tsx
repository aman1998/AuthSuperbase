import React from "react";
import { Button as ButtonUI } from "antd";
import type { ButtonProps } from "antd";
import { ButtonType } from "antd/lib/button";
import cn from "classnames";

import s from "./Button.module.scss";

interface Props extends Omit<ButtonProps, "type"> {
  children?: React.ReactNode;
  type?: "default" | "primary" | "dashed" | "link" | "text" | "secondary" | "outlined";
}

const Button: React.FC<Props> = ({ children, type, className, ...props }) => (
  <ButtonUI
    {...props}
    type={type !== "secondary" ? type : undefined}
    className={cn(s.btn, type && s[`btn--${type}`], className)}
  >
    {children}
  </ButtonUI>
);

export default Button;
