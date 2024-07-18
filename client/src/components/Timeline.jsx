import React from "react";
import { BsArrowDownCircleFill, BsCheckCircleFill } from "react-icons/bs";
import { Col, ConfigProvider, Grid, Row, Timeline, Typography } from "antd";
const { Title, Paragraph } = Typography;

const timelineItems = [
  {
    title: "Online Randevu Formu",
    description: "Web sitemizdeki formu doldurarak randevu talebinizi iletin.",
    color: "#acaeb1",
  },
  {
    title: "Randevu Onayı",
    description: "Talebiniz onaylandığında size bildireceğiz.",
    color: "#acaeb1",
  },
  {
    title: "Hatırlatma Mesajı",
    description: "Randevunuzdan bir gün önce hatırlatma mesajı alacaksınız.",
    color: "#acaeb1",
  },
  {
    title: "Klinikte Karşılama",
    description:
      "Randevu günü kliniğimize gelin, güler yüzlü ekibimiz sizi karşılasın.",
    color: "#acaeb1",
  },
  {
    title: "Tedavi ve Kontrol",
    description:
      "Uzman diş hekimlerimiz tedavinizi gerçekleştirecek ve gerektiğinde kontrol randevuları planlanacaktır.",
    color: "#acaeb1",
  },
  {
    title: "Mutlu Bir Gülümseme",
    description: "",
    color: "#2AC764",
    icon: <BsCheckCircleFill style={{ fontSize: "30px", color: "#2AC764" }} />,
  },
];

const TimelineComp = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#BCBDBF",
          margin: 25,
        },
        components: {
          Timeline: {
            dotBg: "transparent",
            itemPaddingBottom: "60px",
          },
        },
      }}
    >
      <Title style={{ textAlign: "center" }}>Randevu Alma Adımları</Title>
      <Paragraph
        type="secondary"
        style={{ textAlign: "center", fontSize: "20px" }}
      >
        Diş kliniğimizde randevu almak ve tedavi sürecini başlatmak çok kolay.
        İşte adım adım nasıl ilerleyeceğiniz
      </Paragraph>
      <Row gutter={[16, 16]}>
        <Col
          lg={12}
          sm={24}
          style={{ height: "800px", display: "flex", alignItems: "center" }}
        >
          <Timeline
            items={timelineItems.map((item, index) => ({
              children: (
                <>
                  <h3 style={{ color: "black" }}>{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                </>
              ),
              dot:
                index === timelineItems.length - 1 ? (
                  item.icon
                ) : (
                  <BsArrowDownCircleFill
                    style={{ fontSize: "30px", color: item.color }}
                  />
                ),
              style: {
                paddingBottom: index === timelineItems.length - 1 ? "0px" : "",
              },
            }))}
          />
        </Col>
        <Col lg={12} sm={24}>
          <img
            src="https://images.pexels.com/photos/5095934/pexels-photo-5095934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            style={{
              position: "absolute",
              objectPosition: "top",
              objectFit: "cover",
              width: "100%",
              height: screens.lg ? "100%" : "300px",
              inset: "0",
              maxWidth: "100%",
              display: "block",
              verticalAlign: "middle",
            }}
          />
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default TimelineComp;
