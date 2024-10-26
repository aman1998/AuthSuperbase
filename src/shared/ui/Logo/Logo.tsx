import React from "react";
import Link from "next/link";

import LogoIcon from "@shared/icons/LogoIcon";
import { ROUTES } from "@shared/config/routes";

interface Props {
  className?: string;
}
const Logo: React.FC<Props> = ({ className }) => (
  <Link href={ROUTES.home} className={className}>
    <LogoIcon />
  </Link>
);

export default Logo;
