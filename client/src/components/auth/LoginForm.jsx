"use client";
import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { useRouter } from "next/navigation";
import { useLoginUserMutation } from "@/lib/services/auth";
import { jwtTokenCreate } from "@/utils/jwtTokenCreate";
import ResNotification from "../notifications/ResNotification";
import { Typography } from "antd";
const { Title } = Typography;

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [loginUser] = useLoginUserMutation();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await loginUser(values);
      const isSuccess = ResNotification(response);
      if (isSuccess) {
        setLoading(false);
        await jwtTokenCreate(response.data.user);
        router.push("/");
      } else {
        setLoading(false);
      }
    } catch (error) {
      notification.error({
        message: "Hata",
        description:
          "Giriş yapmaya çalışırken bir şeyler yanlış gitti, daha sonra tekrar deneyiniz.",
      });
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
        {/* <Form.Item>
          Hesabınız yok mu? <a href="/kayit-ol">Kayıt Ol</a>
        </Form.Item> */}
      </Form>
    </div>
  );
};

export default LoginForm;
