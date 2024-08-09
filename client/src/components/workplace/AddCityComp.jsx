"use client";
import React, { useState } from "react";
import { Form, Input, Button, Select, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Option } = Select;

const AddCityComp = () => {
  const [cities, setCities] = useState(["İstanbul", "Ankara", "İzmir"]);
  const [form] = Form.useForm();

  const handleAddCity = (values) => {
    if (values.city && !cities.includes(values.city)) {
      setCities([...cities, values.city]);
      form.resetFields();
    }
  };

  const handleDeleteCity = (cityToDelete) => {
    setCities(cities.filter((city) => city !== cityToDelete));
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <Form
        form={form}
        name="addCity"
        onFinish={handleAddCity}
        layout="vertical"
      >
        <Form.Item
          label="Şehir Ekle"
          name="city"
          rules={[{ required: true, message: "Lütfen şehir adını giriniz!" }]}
        >
          <Input placeholder="Şehir adını giriniz" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Şehir Ekle
          </Button>
        </Form.Item>
      </Form>

      <Form layout="vertical">
        <Form.Item label="Liste Görünümü">
          <Select
            placeholder="Bir şehir seçin"
            style={{ width: "100%" }}
            dropdownRender={(menu) => (
              <>
                {cities.map((city, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "8px",
                    }}
                  >
                    <span>{city}</span>
                    <Popconfirm
                      title="Silmek istediğinize emin misiniz?"
                      onConfirm={() => handleDeleteCity(city)}
                      okText="Evet"
                      cancelText="Hayır"
                    >
                      <DeleteOutlined
                        style={{ color: "red", cursor: "pointer" }}
                      />
                    </Popconfirm>
                  </div>
                ))}
              </>
            )}
          >
            {cities.map((city, index) => (
              <Option key={index} value={city}>
                {city}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCityComp;
