"use client";
import ResNotification from "@/components/notifications/ResNotification";
import { useResetPasswordMutation } from "@/lib/services/auth";
import { Button, Col, Form, Input, Row, notification } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = ({ searchParams }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [resetPassword] = useResetPasswordMutation();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const id = searchParams.userID;
      const token = searchParams.token;
      const data = { ...values, id, token };
      const response = await resetPassword(data);
      const isSuccess = ResNotification(response);
      if (isSuccess) {
        setLoading(false);
        router.push("/giris");
      } else {
        setLoading(false);
      }
    } catch (error) {
      notification.error({
        message: "Hata",
        description: "Bir hata oluştu!",
      });
      setLoading(false);
    }
  };
  const onFinishFailed = () => {
    notification.error({
      message: "Hata",
      description: "Bir hata oluştu!",
    });
  };
  return (
    <div>
      <h1>Şifre Sıfırlama Sayfası</h1>
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Col span={18}>
          <Form
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
          >
            <Form.Item
              label="Şifre"
              name="password"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Lütfen şifrenizi giriniz!",
                },
                {
                  min: 6,
                  message: "Şifreniz en az 6 karakter olmalıdır!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="password_confirmation"
              label="Şifreyi Onayla"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Lütfen şifrenizi onaylayın!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Girdiğiniz yeni parola eşleşmiyor!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 16 }}>
              <Button type="primary" htmlType="submit" disabled={loading}>
                Gönder
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default page;
