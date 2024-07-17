import React from "react";
import { BsArrowDownCircleFill, BsCheckCircleFill } from "react-icons/bs";
import { ConfigProvider, Timeline } from "antd";

const timelineItems = [
  {
    title: "Online Randevu Formu",
    description: "Web sitemizdeki formu doldurarak randevu talebinizi iletin.",
  },
  {
    title: "Randevu Onayı",
    description: "Talebiniz onaylandığında size bildireceğiz.",
  },
  {
    title: "Hatırlatma Mesajı",
    description: "Randevunuzdan bir gün önce hatırlatma mesajı alacaksınız.",
  },
  {
    title: "Klinikte Karşılama",
    description: "Randevu günü kliniğimize gelin, güler yüzlü ekibimiz sizi karşılasın.",
  },
  {
    title: "Tedavi ve Kontrol",
    description: "Uzman diş hekimlerimiz tedavinizi gerçekleştirecek ve gerektiğinde kontrol randevuları planlanacaktır.",
  },
  {
    title: "Mutlu Bir Gülümseme",
    description: "",
    color: "#2AC764",
    icon: BsCheckCircleFill,
  },
];

const TimelineComp = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#BCBDBF",
        margin: 25,
      },
      components: {
        Timeline: {
          dotBg: "transparent",
          itemPaddingBottom: "30px",
          dotBorderWidth: "101px",
        },
      },
    }}
  >
    <Timeline>
      {timelineItems.map((item, index) => (
        <Timeline.Item
          key={index}
          dot={
            index === timelineItems.length - 1 ? (
              <BsCheckCircleFill
                style={{
                  fontSize: "30px",
                  color: item.color,
                }}
              />
            ) : (
              <BsArrowDownCircleFill
                style={{
                  fontSize: "30px",
                  color: item.color || "#acaeb1",
                }}
              />
            )
          }
        >
          <h3 style={{ color: item.color }}>{item.title}</h3>
          {item.description && <p>{item.description}</p>}
        </Timeline.Item>
      ))}
    </Timeline>
  </ConfigProvider>
);

export default TimelineComp;
