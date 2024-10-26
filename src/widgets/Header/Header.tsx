import React from "react";
import cn from "classnames";

import s from "./Header.module.scss";

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => <header className={cn(s.header, className)}>Header</header>;

export default Header;
