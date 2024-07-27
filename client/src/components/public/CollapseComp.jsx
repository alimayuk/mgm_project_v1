"use client";
import React from "react";
import { Collapse } from "antd";
import TitleComp from "./TitleComp";

const items = [
  {
    key: "1",
    label: "Randevu nasıl alabilirim?",
    children: (
      <p>
        Randevu almak için web sitemizdeki randevu formunu doldurabilir veya
        doğrudan bizi arayarak randevunuzu ayarlayabilirsiniz. Detaylı bilgi
        için iletişim sayfamızı ziyaret edebilirsiniz.
      </p>
    ),
  },
  {
    key: "2",
    label: "Tedavi masraflarını nasıl öğrenebilirim?",
    children: (
      <p>
        Tedavi masrafları, yapılacak muayene sonrasında belirlenir ve size
        detaylı olarak sunulur. Tedavi seçenekleri ve ödeme planları konusunda
        size yardımcı olmak için kliniğimize danışabilirsiniz.{" "}
      </p>
    ),
  },
  {
    key: "3",
    label: "Tedavi masraflarını nasıl öğrenebilirim?",
    children: (
      <p>
        Tedavi masrafları, yapılacak muayene sonrasında belirlenir ve size
        detaylı olarak sunulur. Tedavi seçenekleri ve ödeme planları konusunda
        size yardımcı olmak için kliniğimize danışabilirsiniz.{" "}
      </p>
    ),
  },
];
const CollapseComp = () => {
  return (
    <div>
      <TitleComp
        title={
          <>
            <span>SIKCA SORULAN</span>{" "}
            <span style={{ color: "red" }}>SORULAR</span>
          </>
        }
      />
      <Collapse size="large" items={items} defaultActiveKey={["1"]} />
    </div>
  );
};
export default CollapseComp;
