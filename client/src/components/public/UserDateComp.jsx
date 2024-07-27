"use client";
import {
  Button,
  Col,
  ConfigProvider,
  Form,
  Input,
  Row,
  Typography,
  DatePicker,
  Select,
} from "antd";
import { SendOutlined } from "@ant-design/icons";
import React from "react";
import locale from "antd/locale/tr_TR";
import dayjs from "dayjs";
import "dayjs/locale/tr";
dayjs.locale("tr");

const { Title, Paragraph } = Typography;

const disabledDate = (current) => {
  // Bugünden önceki günleri seçilemez yapar
  return  (current &&(
    current < dayjs().startOf('day') || current.day() === 6 || current.day() === 0 )
  );
};
const dateFormat = "DD/MM/YYYY";

const UserDateComp = () => {
  return (
    <div className="container">
      <Row align={"middle"} gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Title level={2}>Randevu Al</Title>
          <Paragraph>
            Diş sağlığınız için ilk adımı atın! Web sitemiz üzerinden kolayca
            randevu alabilir, uygun saat ve tarih seçeneklerini
            belirleyebilirsiniz. Uzman ekibimiz, sağlıklı ve güzel bir gülüşe
            kavuşmanız için sizi bekliyor.
          </Paragraph>
          <ConfigProvider locale={locale}>
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
                <Select
                  showSearch
                  placeholder="Hekim Ara"
                  style={{ display: "block", marginBottom: "10px" }}
                />
              </Form.Item>
              <Form.Item>
                <DatePicker
                  format={dateFormat}
                  disabledDate={disabledDate}
                  style={{
                    width: "100%",
                  }}
                />
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
                  <SendOutlined /> Randevu İsteği Yolla
                </Button>
              </Form.Item>
            </Form>
          </ConfigProvider>
        </Col>
        <Col xs={24} lg={12}>
          <img
            src="https://images.pexels.com/photos/5554740/pexels-photo-5554740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{
              width: "100%",
              maxHeight: "600px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
            alt=""
          />
        </Col>
      </Row>
    </div>
  );
};

export default UserDateComp;
