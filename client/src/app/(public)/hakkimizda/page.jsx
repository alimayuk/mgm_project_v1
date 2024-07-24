"use client";
import CollapseComp from "@/components/CollapseComp";
import ServiceComp from "@/components/ServiceComp";
import TeamComp from "@/components/TeamComp";
import { Col, Flex, Grid, Row, Typography } from "antd";
import React from "react";
const { Title, Paragraph } = Typography;
const page = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  return (
    <Flex vertical gap={60} className="container">
      <Row align={"middle"} style={{ overflow: "hidden" }}>
        <Col lg={12} sm={24}>
          <Title>
            Merhaba 👋 <br /> Ben Dr. Mehmet Yılmaz
          </Title>
          <Paragraph style={{ fontSize: "18px" }}>
            Diş sağlığınızı önemsiyoruz ve size en iyi hizmeti sunmak için
            buradayız. Modern teknoloji ve deneyimli ekibimizle, her hastamıza
            kişiselleştirilmiş tedavi planları sunuyoruz. Diş sağlığınız için en
            iyi çözümleri bulmak ve sağlıklı, güzel bir gülüşe sahip olmanızı
            sağlamak bizim önceliğimizdir.
          </Paragraph>
          <Paragraph>Sorularınız mı var?</Paragraph>
          <Paragraph>Bana iletişim üzerinden sorabilirsiniz.</Paragraph>
        </Col>
        <Col
          lg={12}
          sm={24}
          style={{
            position: "relative",
            width: screens.sm ? "" : "100%",
          }}
        >
          <img
            src="doctor.png"
            alt=""
            style={{
              maxWidth: screens.sm ? "25rem" : "100%",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100%",
              position: "relative",
              display: "block",
              verticalAlign: "middle",
              zIndex: 1,
            }}
          />
          <img
            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
            alt=""
            style={{
              position: "absolute",
              transform: "translateX(-50%)",
              left: "50%",
              bottom: "0",
              marginBottom: "-12rem",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Col>
      </Row>
      <TeamComp />
      <CollapseComp />
      <ServiceComp />
    </Flex>
  );
};

export default page;
