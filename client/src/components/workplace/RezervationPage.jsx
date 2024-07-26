"use client";
import { ConfigProvider } from "antd";
import React from "react";
import locale from "antd/locale/tr_TR";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import CalendarComp from "./CalendarComp";
dayjs.locale("tr");

const RezervationPage = () => {
  return (
    <div>
      <ConfigProvider locale={locale}>
        <CalendarComp />
      </ConfigProvider>
    </div>
  );
};

export default RezervationPage;
