"use client"
import React from "react";
import { Card, Row, Col, Button, Badge } from "antd";
import TitleComp from "./TitleComp";
const { Meta } = Card;

const items = [
  {
    title: "Genel Diş Hekimliği",
    image:
      "https://images.pexels.com/photos/4269684/pexels-photo-4269684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Rutin kontroller, diş temizliği, dolgu ve çekim gibi genel diş sağlığı hizmetleri sunuyoruz. Sağlıklı bir ağız yapısı için düzenli diş hekimi ziyaretlerinizi aksatmayın.",
    isNew: false,
  },
  {
    title: "Kanal Tedavisi",
    image:
      "https://images.pexels.com/photos/5355695/pexels-photo-5355695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Dişin iç kısmındaki enfeksiyonu tedavi etmek için yapılan işlem.",
    isNew: true,
  },
  {
    title: "Estetik Diş Hekimliği",
    image:
      "https://images.pexels.com/photos/3845685/pexels-photo-3845685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Diş beyazlatma, porselen kaplama ve gülüş tasarımı gibi estetik çözümlerle daha güzel bir gülüşe sahip olmanızı sağlıyoruz.",
    isNew: false,
  },
  {
    title: "Kanal Tedavisi",
    image:
      "https://images.pexels.com/photos/5355695/pexels-photo-5355695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Dişin iç kısmındaki enfeksiyonu tedavi etmek için yapılan işlem.",
    isNew: true,
  },
  {
    title: "Kanal Tedavisi",
    image:
      "https://images.pexels.com/photos/5355695/pexels-photo-5355695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Dişin iç kısmındaki enfeksiyonu tedavi etmek için yapılan işlem.",
    isNew: true,
  },{
    title: "Estetik Diş Hekimliği",
    image:
      "https://images.pexels.com/photos/3845685/pexels-photo-3845685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Diş beyazlatma, porselen kaplama ve gülüş tasarımı gibi estetik çözümlerle daha güzel bir gülüşe sahip olmanızı sağlıyoruz.",
    isNew: false,
  },
];

const BlogComp = () => (
  <div>
    <TitleComp
      title={"Bloglar"}
      subText={
        "Diş sağlığı hakkında en güncel bilgiler, ipuçları ve tavsiyeler için bloglarımızı takip edin. Uzman diş hekimlerimiz tarafından hazırlanan makalelerle, ağız ve diş sağlığınızı en iyi şekilde korumanız için size rehberlik ediyoruz."
      }
    />
    <Row gutter={[16, 16]}>
      {items.map((item, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card
            hoverable
            style={{
              height: "100%",
              fontSize: "16px",
            }}
            cover={
              item.isNew ? (
                <Badge.Ribbon text="Yeni Paylaşım" color="red">
                  <img
                    alt={item.title}
                    src={item.image}
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Badge.Ribbon>
              ) : (
                <img
                  alt={item.title}
                  src={item.image}
                  style={{ height: "200px", width: "100%", objectFit: "cover" }}
                />
              )
            }
          >
            <Meta title={item.title} description={item.description} />
          </Card>
        </Col>
      ))}
    </Row>
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      <Button type="primary">Hepsi Gör</Button>
    </div>
  </div>
);

export default BlogComp;
