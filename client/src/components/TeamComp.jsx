"use client";
import React from "react";
import TitleComp from "./TitleComp";
import { Card, Col, Row } from "antd";
const { Meta } = Card;
const TeamComp = () => {
  return (
    <div>
      <TitleComp
        title={"Uzman ve Güvenilir Diş Hekimlerimiz"}
        subText={
          "Klinik olarak, her biri alanında uzman ve deneyimli diş hekimlerinden oluşan bir ekiple çalışmaktan gurur duyuyoruz. Diş sağlığınızı en iyi şekilde korumak ve tedavi etmek için burada olduğumuzun bilinciyle, her bir hastamıza özel ve özenli bir yaklaşım sergiliyoruz."
        }
      />
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8}>
          <Card
            styles={{
              body: {
                textAlign: "center",
                gap: "101px",
              },
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <img
                alt="example"
                src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
            <Meta title="Dr. Ahmet Yılmaz" description="Baş Diş Hekimi" />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            styles={{
              body: {
                textAlign: "center",
                gap: "101px",
              },
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <img
                alt="example"
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
            <Meta title="Dr. Ahmet Yılmaz" description="Baş Diş Hekimi" />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            styles={{
              body: {
                textAlign: "center",
              },
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <img
                alt="example"
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
            <Meta title="Dr. Ahmet Yılmaz" description="Baş Diş Hekimi" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TeamComp;
