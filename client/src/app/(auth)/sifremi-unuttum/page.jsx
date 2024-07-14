"use client";
import ResNotification from "@/components/notifications/ResNotification";
import { useResetPasswordLinkMutation } from "@/lib/services/auth";
import { Form, Input, Row, Col, Button, notification } from "antd";
import React, { useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [resetPasswordLink] = useResetPasswordLinkMutation();
  const onFinish = async (values) => {
    try {
      const response = await resetPasswordLink(values);
      const isSuccess = ResNotification(response);
      if (isSuccess) {
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
        notification.error({
            message: "Hata",
            description: "Lütfen daha sonra tekrar deneyiniz."
        });
        setLoading(false);
    }
  };
  const onFinishFailed = () => {
    notification.error({
            message: "Hata",
            description: "Lütfen daha sonra tekrar deneyiniz."
        });
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={18}>
        <Form
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <Form.Item
            label="E-posta"
            name="email"
            rules={[
              {
                required: true,
                message: "Lütfen e-posta adresinizi giriniz!",
              },
              {
                type: "email",
                message: "Lütfen geçerli bir e-posta adresi giriniz!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16 }}>
            <Button type="primary" htmlType="submit" disabled={loading}>
              Gönder
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Page;
