import React from "react";
import { Card, Row, Col, Typography, Button } from "antd";
const { Meta } = Card;
const { Title } = Typography;
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
  }];

const BlogComp = () => (
  <>
    <Title style={{ textAlign:"center" }}>Bloglar</Title>
    <Row gutter={[16, 16]}>
      {items.map((item, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card
            hoverable
            style={{
              height: "100%",
                fontSize: "16px"
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
    <div style={{display:"flex", justifyContent:"center", marginTop: "10px" }}>
    <Button  type="primary">Hepsi Gör</Button>
    </div>
  </>
);

export default BlogComp;
