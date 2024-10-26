import React from "react";
import { Input as InputUI } from "antd";
import type { InputProps } from "antd";

import EyeIcon from "@shared/icons/EyeIcon";

interface Props extends InputProps {
  isPassword?: boolean;
}

const Input: React.FC<Props> = ({ isPassword, classNameWrapper, ...props }) => {
  if (isPassword)
    return (
      <InputUI.Password
        {...props}
        iconRender={(visible) => (
          <a>
            <EyeIcon visible={visible} />
          </a>
        )}
      />
    );

  return <InputUI {...props} />;
};

export default Input;
