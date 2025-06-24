"use client";
import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { useRouter } from "next/navigation";
import { jwtTokenCreate } from "@/utils/jwtTokenCreate";
import ResNotification from "../notifications/ResNotification";
import { Typography } from "antd";
const { Title } = Typography;

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/account/login/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // cookie güncellemek için zorunlu
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        }
      );

      const response = await res.json();

      const isSuccess = ResNotification(response);

      if (isSuccess) {
        await jwtTokenCreate(response.user);
        router.push("/");
      }
    } catch (error) {
      notification.error({
        message: "Hata",
        description:
          error.message ||
          "Giriş yapmaya çalışırken bir şeyler yanlış gitti, daha sonra tekrar deneyiniz.",
      });
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = () => {
    notification.error({
      message: "Hata",
      description:
        "Giriş yapmaya çalışırken bir şeyler yanlış gitti, daha sonra tekrar deneyiniz.",
    });
  };

  return (
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
        <Title level={1}>Yönetici Giriş</Title>
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
        <Form.Item>
          <Form.Item
            label="Şifre"
            name="password"
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
          <a href="/sifremi-unuttum">Şifremi Unuttum</a>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 16 }}>
          <Button type="primary" htmlType="submit" disabled={loading}>
            Giriş Yap
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
