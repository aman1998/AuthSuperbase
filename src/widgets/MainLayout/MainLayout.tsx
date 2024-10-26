"use client";
import React from "react";
import { Layout } from "antd";
import cn from "classnames";

import Header from "@widgets/Header";

import s from "./MainLayout.module.scss";

interface Props {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => (
  <article className={s.layout}>
    <Header className={s.layout__header} />
    <main className={s.layout__main}>{children}</main>
    <footer>footer</footer>
  </article>
);

export default MainLayout;
