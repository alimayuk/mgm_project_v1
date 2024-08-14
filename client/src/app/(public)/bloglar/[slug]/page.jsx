"use client";
import { Card, Col, Row, Space, Typography } from "antd";
import React from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { useGetBlogDetailQuery } from "@/lib/services/blog";
const { Title, Paragraph } = Typography;

const items = [
  {
    href: "#",
    backgroundImage:
      "https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Akıllı Diş Protezleri: Yenilikçi Çözümler",
  },
  {
    href: "#",
    backgroundImage:
      "https://images.pexels.com/photos/4687254/pexels-photo-4687254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Dijital Röntgen Teknolojisi: Net Görüntüler",
  },
  {
    href: "#",
    backgroundImage:
      "https://images.pexels.com/photos/298611/pexels-photo-298611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "3D Diş Tarama: Hassas Analizler",
  },
  {
    href: "#",
    backgroundImage:
      "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Gelişmiş Ortodontik Tedavi Yöntemleri",
  },
];

const Page = ({ params }) => {
  const { slug } = params;
  const { data, error, isLoading } = useGetBlogDetailQuery(slug);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blog details</div>;

  return (
    <div className="container">
      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        <Col md={24} lg={18}>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <img
              src={`http://localhost:8000/${data?.image_path}` || ""}
              alt={data?.title || ""}
              style={{
                width: "100%",
                borderRadius: "20px",
                maxHeight: "500px",
                objectFit: "cover",
              }}
            />
            <Paragraph style={{ marginTop: "20px", color: "lightgray" }}>
              <CalendarOutlined /> {data?.date || "Tarih mevcut değil"}
            </Paragraph>
            <Title style={{ marginTop: "20px" }} level={1}>
              {data?.title || "Başlık mevcut değil"}
            </Title>
            <Paragraph style={{ lineHeight: "30px" }}>
              { <div dangerouslySetInnerHTML={{ __html: data.content }} /> || "İçerik mevcut değil"}
            </Paragraph>
          </div>
        </Col>
        <Col md={24} lg={6} style={{ width: "100%", position: "relative" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px 10px 30px 10px",
              borderRadius: "20px",
              height: "min-content",
              width: "100%",
              position: "sticky",
              top: 20,
            }}
          >
            <Title level={3}>Benzer İçerikler</Title>
            <Space
              direction="horizontal"
              size="middle"
              align="center"
              wrap
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              styles={{
                item: {
                  width: "250px",
                },
              }}
            >
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    style={{
                      height: 150,
                      position: "relative",
                      backgroundImage: `url(${item.backgroundImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                      borderRadius: "10px",
                      overflow: "hidden",
                    }}
                  >
                    <div className="overlay">
                      <Paragraph
                        level={4}
                        style={{
                          position: "absolute",
                          bottom: 10,
                          left: 15,
                          color: "white",
                          margin: 0,
                          fontSize: "16px",
                        }}
                        ellipsis={{ rows: 2, expandable: false }}
                      >
                        {item.title}
                      </Paragraph>
                    </div>
                  </Card>
                </a>
              ))}
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Page;
