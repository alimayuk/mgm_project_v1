"use client";
import React from "react";
import { Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { TbMoodKid } from "react-icons/tb";
import { FaTooth } from "react-icons/fa6";
import { LiaTeethSolid } from "react-icons/lia";
import { MdHealthAndSafety } from "react-icons/md";
import { GiHealthCapsule } from "react-icons/gi";
import { RiStethoscopeLine } from "react-icons/ri";
import TitleComp from "./TitleComp";
const items = [
  {
    title: "Genel Diş Hekimliği",
    icon: FaTooth,
    description:
      "Rutin kontroller, diş temizliği, dolgu ve çekim gibi genel diş sağlığı hizmetleri sunuyoruz. Sağlıklı bir ağız yapısı için düzenli diş hekimi ziyaretlerinizi aksatmayın.",
  },
  {
    title: "Ortodonti Tedavileri",
    icon: LiaTeethSolid,
    description:
      "Diş ve çene düzensizliklerini düzeltmek için şeffaf plaklar (Invisalign) ve geleneksel diş telleri gibi çeşitli ortodontik çözümler sunuyoruz.",
  },
  {
    title: "İmplant Tedavisi",
    icon: MdHealthAndSafety,
    description:
      "Kayıp dişlerinizi geri kazanmak için en son teknolojiyle diş implantları uyguluyoruz. Sağlam ve doğal bir görünüm için güvenilir çözümler sunuyoruz.",
  },
  {
    title: "Diş Eti Hastalıkları Tedavisi",
    icon: GiHealthCapsule,
    description:
      "Diş eti hastalıklarının teşhis ve tedavisinde uzmanlaşmış ekibimizle sağlıklı diş etlerine kavuşmanız için çalışıyoruz.",
  },
  {
    title: "Çocuk Diş Hekimliği",
    icon: TbMoodKid,
    description:
      "Çocuklarınızın diş sağlığını korumak için özel olarak tasarlanmış çocuk dostu hizmetler sunuyoruz. İlk diş hekimi ziyaretlerinden itibaren pozitif bir deneyim yaşatmayı hedefliyoruz.",
  },
  {
    title: "Estetik Diş Hekimliği",
    icon: RiStethoscopeLine,
    description:
      "Diş beyazlatma, porselen kaplama ve gülüş tasarımı gibi estetik çözümlerle daha güzel bir gülüşe sahip olmanızı sağlıyoruz.",
  },
];
const ServiceComp = () => (
  <div>
    <TitleComp
      title={"Hizmetler"}
      subText={
        "Klinik olarak, diş sağlığınızı en üst düzeyde korumak ve tedavi etmek amacıyla geniş bir hizmet yelpazesi sunuyoruz. Modern teknoloji ve yenilikçi tedavi yöntemlerimizle, her yaştan hastamıza en iyi bakımı sağlamak için buradayız."
      }
    />
    <Row gutter={[16, 16]}>
      {items.map((item, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card
            style={{
              padding: "25px",
              height: "100%",
            }}
            styles={{
              header: {
                border: "none",
                textAlign: "center",
                padding: "0",
                color: "#4a4aff",
                fontSize: "50px",
              },
              body: {
                textAlign: "center",
                padding: "0",
                fontSize: "18px",
              },
            }}
            bordered={false}
            title={<item.icon />}
          >
            <Meta
              title={<span style={{ fontSize: "20px" }}>{item.title}</span>}
              description={item.description}
            />
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);
export default ServiceComp;
