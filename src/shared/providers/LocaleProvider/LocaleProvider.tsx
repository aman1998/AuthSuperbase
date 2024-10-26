import React from "react";
import { ConfigProvider } from "antd";
import ru from "antd/locale/ru_RU";
import dayjs from "dayjs";
import "dayjs/locale/es";
dayjs.locale("ru");

interface Props {
  children: React.ReactNode;
}

const LocaleProvider: React.FC<Props> = ({ children }) => <ConfigProvider locale={ru}>{children}</ConfigProvider>;

export default LocaleProvider;
