"use client";
import { Button, Col, Flex, Form, Input, Row, Typography } from "antd";
import { MailOutlined,SendOutlined,PhoneOutlined } from "@ant-design/icons";
import React from "react";

const { Title, Paragraph, Link } = Typography;

const page = () => {
  return (
    <div className="container">
      <Row align={"middle"} gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Title level={2}>İletişim</Title>
          <Paragraph>
            Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz.
            Sorularınızı, randevu taleplerinizi veya diğer konuları bizimle
            paylaşmaktan memnuniyet duyarız.
          </Paragraph>
          <Form
            name="basic"
            size="large"
            layout="vertical"
            style={{ width: "100%" }}
          >
            <Form.Item>
              <Input placeholder="Ad Soyad" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="E-Posta" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Telefon No" />
            </Form.Item>
            <Form.Item>
              <Input.TextArea placeholder="Mesajınız" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                style={{
                  display: "flex",
                  width: "100%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <SendOutlined /> Mesajı Yolla
              </Button>
            </Form.Item>
          </Form>
          <Flex gap={20} justify="center">
          <Link href="mailto:aa@gmail.com" style={{ fontSize:"16px" }}><MailOutlined /> info@example.com</Link>
          <Link href="tel:+158 996 888" style={{ fontSize:"16px" }}><PhoneOutlined /> +158 996 888</Link>
          </Flex>
        </Col>
        <Col xs={24} lg={12}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203862.04490204205!2d30.533268579156825!3d37.02543266655046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c3886efe30cc6b%3A0x1416060af6289804!2sKepez%2FAntalya!5e0!3m2!1str!2str!4v1721639725681!5m2!1str!2str"
            style={{
              width: "100%",
              height: "450px",
              border: "0",
              borderRadius: "10px",
            }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </div>
  );
};

export default page;
