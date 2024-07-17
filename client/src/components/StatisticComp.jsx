import React from "react";
import { Card, Col, ConfigProvider, Row, Grid } from "antd";

const items = [
  {
    title: "TEDAVI EDILEN HASTA SAYISI",
    stat: "5000+",
  },
  {
    title: "YILLIK DENEYIM",
    stat: "5+",
  },
  {
    title: "YILLIK RANDEVU SAYISI",
    stat: "1200+",
  },
  {
    title: "UZMAN HEKIM",
    stat: "12+",
  },
];

const StatisticComp = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  return (
    <>
      <Row gutter={[16, 16]}>
        <ConfigProvider
          theme={{
            token: {
              borderRadius: 0,
              colorBgContainer: "transparent",
              padding: 0,
              boxShadowTertiary: "none",
              paddingLG: 0,
            },
          }}
        >
          {items.map((item, i) => (
            <Col key={i} xs={24} sm={12} xl={6} style={{ textAlign: "center" }}>
              <Card
                styles={{
                  header: {
                    border: "none",
                    fontSize: "2.25rem",
                    fontWeight: "700",
                  },
                  body: {
                    padding: 0,
                    fontWeight: "500",
                    color: "#BCBDBF",
                  },
                }}
                style={{
                  width: "100%",
                  borderRight:
                    !screens.xl || i === items.length - 1
                      ? "none"
                      : "1px solid",
                }}
                bordered={false}
                title={item.stat}
              >
                <p>{item.title}</p>
              </Card>
            </Col>
          ))}
        </ConfigProvider>
      </Row>
    </>
  );
};

export default StatisticComp;
