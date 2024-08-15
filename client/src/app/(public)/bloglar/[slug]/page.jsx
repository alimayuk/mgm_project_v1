"use client";
import { Card, Col, Row, Space, Typography } from "antd";
import React from "react";
import { CalendarOutlined } from "@ant-design/icons";
import { useGetBlogDetailQuery } from "@/lib/services/blog";
const { Title, Paragraph } = Typography;


const Page = ({ params }) => {
  const { slug } = params;
  const { data, error, isLoading } = useGetBlogDetailQuery(slug);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blog details</div>;
  const response = data.blog;
  const items = data.recentBlogs;
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
              src={`http://localhost:8000/${response?.image_path}` || ""}
              alt={response?.title || ""}
              style={{
                width: "100%",
                borderRadius: "20px",
                maxHeight: "500px",
                objectFit: "cover",
              }}
            />
            <Paragraph style={{ marginTop: "20px", color: "lightgray" }}>
              <CalendarOutlined /> {response?.createdAt || "Tarih mevcut değil"}
            </Paragraph>
            <Title style={{ marginTop: "20px" }} level={1}>
              {response?.title || "Başlık mevcut değil"}
            </Title>
            <Paragraph style={{ lineHeight: "30px" }}>
              {<div dangerouslySetInnerHTML={{ __html: response.content }} /> ||
                "İçerik mevcut değil"}
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
                  href={item.slug}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    style={{
                      height: 150,
                      position: "relative",
                      backgroundImage: `url("http://localhost:8000/${item.image_path.replace(
                        "uploads",
                        "uploads/"
                      )}")`,
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
