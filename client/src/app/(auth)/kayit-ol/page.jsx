"use client";
import { Button, Col, Flex, Form, Input, notification, Row, Typography } from "antd";
import React, { useState } from "react";
import styles from "../styles.module.css";
import { useRouter } from "next/navigation";
import { useCreateUserMutation } from "@/lib/services/auth";
import ResNotification from "@/components/notifications/ResNotification";
const { Title } = Typography;
const page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [createUser] = useCreateUserMutation();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await createUser(values);
      const isSuccess = ResNotification(Response);
      if (isSuccess) {
        setLoading(false);
        router.push("/giris");
      } else {
        setLoading(false);
      }
    } catch (error) {
      notification.error({
        message: "Hata",
        description:
          "Kayıt olmaya çalışırken bir şeyler yanlış gitti, daha sonra tekrar deneyiniz.",
      });
      setLoading(false);
    }
  };
  const onFinishFailed = () => {
    notification.error({
      message: "Hata",
      description:
        "Kayıt olmaya çalışırken bir şeyler yanlış gitti, daha sonra tekrar deneyiniz.",
    });
  };
  return (
    <Row gutter={[16, 16]} style={{ minHeight: "100vh", maxWidth: "100%" }}>
      <Col xs={24} md={12}>
        <Flex
          style={{ width: "100%", height: "100%" }}
          align="center"
          justify="center"
        >
          <div
            style={{
              background: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              borderRadius: 10,
              width: "80%",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <Form
              layout="vertical"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 10,
                width: "100%",
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
            >
            <Title level={1}>Yönetim Kayıt</Title>
              <Form.Item
                label="E-posta"
                hasFeedback
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
              <Form.Item
                label="İsim"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Lütfen adınızı girin!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Telefon Numarası"
                rules={[
                  {
                    required: false,
                    message: "Lütfen telefon numaranızı girin!",
                  },
                  {
                    pattern: /^[0-9]*$/,
                    message: "Lütfen geçerli bir telefon numarası girin!",
                  },
                ]}
              >
                <Input addonBefore={"+90"} />
              </Form.Item>
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
              <Form.Item
                wrapperCol={{
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" disabled={loading}>
                  Kayıt Ol
                </Button>
              </Form.Item>
              <Form.Item>
                Zaten hesabınız var mı ? <a href="/giris">Giriş Yap</a>
              </Form.Item>
            </Form>
          </div>
        </Flex>
      </Col>
      <Col xs={0} md={12} className={styles.imageSide}></Col>
    </Row>
  );
};

export default page;
