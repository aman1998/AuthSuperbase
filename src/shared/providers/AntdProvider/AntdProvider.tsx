import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, App } from "antd";

const PRIMARY_COLOR = '#5D5FEF';
const PRIMARY_COLOR_HOVER = '#1F32FF';

const AntdProvider = ({ children }: React.PropsWithChildren) => (
  <AntdRegistry>
    <ConfigProvider
      theme={{
        token: {
          colorLink: "inherit",
          fontFamily: "inherit",
          colorText: "inherit",
        },
        components: {
          Button: {
            colorPrimary: PRIMARY_COLOR,

            fontWeight: 500,
            fontSize: 14,
            lineHeight: 20,
            borderRadius: 100,
            controlHeight: 44,
            paddingInline: 32,

            defaultBg: "#E9EBFF",
            defaultHoverBg: "#E9EBFF",
            defaultColor: "#1527E1",
            defaultHoverColor: "#1527E1",
            defaultBorderColor: "#E9EBFF",
            defaultHoverBorderColor: PRIMARY_COLOR_HOVER,

            colorPrimaryHover: PRIMARY_COLOR_HOVER,

            colorLink: PRIMARY_COLOR,
            colorLinkHover: PRIMARY_COLOR_HOVER,
          },
          Input: {
            borderRadius: 12,
            controlHeight: 48,
            controlHeightXS: 20,
            colorBgContainer: "#F3F4F9",
            colorBorder: "#F3F4F9",
            hoverBorderColor: "#E9EBFF",
            activeBorderColor: PRIMARY_COLOR,
          },
          Checkbox: {
            colorBorder: PRIMARY_COLOR,
          },
          DatePicker: {},
          Menu: {},
          Pagination: {},
          Table: {},
          Modal: {},
          Upload: {},
          Select: {},
          Popover: {},
          Typography: {},
        },
      }}
    >
      <App>{children}</App>
    </ConfigProvider>
  </AntdRegistry>
);

export default AntdProvider;
