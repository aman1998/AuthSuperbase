import React from "react";
import Link from "next/link";

import LogoIcon from "@shared/icons/LogoIcon";
import Transition from "@shared/ui/Transition";
import Logo from "@shared/ui/Logo";
import { ROUTES } from "@shared/config/routes";

import s from "./AuthLayout.module.scss";

interface Props {
  children: React.ReactNode;
}
const AuthLayout: React.FC<Props> = ({ children }) => (
  <article className={s.layout}>
    <Logo className={s.layout__logo} />
    <div className={s.layout__content}>{children}</div>
    <Link href={ROUTES.home} className={s.layout__footer}>
      Политика конфиденциальности <span>© {new Date().getFullYear()}</span>
    </Link>
  </article>
);

export default AuthLayout;
