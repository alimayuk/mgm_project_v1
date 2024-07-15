import React from "react";
import { Card, Row, Col } from "antd";
const { Meta } = Card;

const items = [
  {
    title: "Genel Diş Hekimliği",
    image:
      "https://images.pexels.com/photos/4269684/pexels-photo-4269684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Rutin kontroller, diş temizliği, dolgu ve çekim gibi genel diş sağlığı hizmetleri sunuyoruz. Sağlıklı bir ağız yapısı için düzenli diş hekimi ziyaretlerinizi aksatmayın.",
  },
  {
    title: "Kanal Tedavisi",
    image:
      "https://images.pexels.com/photos/5355695/pexels-photo-5355695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Dişin iç kısmındaki enfeksiyonu tedavi etmek için yapılan işlem.",
  },
  {
    title: "Estetik Diş Hekimliği",
    image:
      "https://images.pexels.com/photos/3845685/pexels-photo-3845685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Diş beyazlatma, porselen kaplama ve gülüş tasarımı gibi estetik çözümlerle daha güzel bir gülüşe sahip olmanızı sağlıyoruz.",
  },
  {
    title: "Çocuk Diş Hekimliği",
    image:
      "https://images.pexels.com/photos/3779696/pexels-photo-3779696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Çocuklarınızın diş sağlığını korumak için özel olarak tasarlanmış çocuk dostu hizmetler sunuyoruz. İlk diş hekimi ziyaretlerinden itibaren pozitif bir deneyim yaşatmayı hedefliyoruz.",
  },
  {
    title: "İmplant Tedavisi",
    image:
      "https://images.pexels.com/photos/3845626/pexels-photo-3845626.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Kayıp dişlerinizi geri kazanmak için en son teknolojiyle diş implantları uyguluyoruz. Sağlam ve doğal bir görünüm için güvenilir çözümler sunuyoruz.",
  },
  {
    title: "Ortodonti Tedavileri",
    image:
      "https://images.pexels.com/photos/6528867/pexels-photo-6528867.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Diş ve çene düzensizliklerini düzeltmek için şeffaf plaklar (Invisalign) ve geleneksel diş telleri gibi çeşitli ortodontik çözümler sunuyoruz.",
  },
  {
    title: "Diş Eti Hastalıkları Tedavisi",
    image:
      "https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Diş eti hastalıklarının teşhis ve tedavisinde uzmanlaşmış ekibimizle sağlıklı diş etlerine kavuşmanız için çalışıyoruz.",
  },
];

const ServiceCard = () => (
  <Row gutter={[16, 16]}>
    {items.map((item, index) => (
      <Col xs={24} sm={12} md={8} lg={6} key={index}>
        <Card
          hoverable
          style={{
            height: "100%",
          }}
          cover={
            <img
              alt={item.title}
              src={item.image}
              style={{ height: "200px", objectFit: "cover" }}
            />
          }
        >
          <Meta title={item.title} description={item.description} />
        </Card>
      </Col>
    ))}
  </Row>
);

export default ServiceCard;
