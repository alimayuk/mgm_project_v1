"use client"
import React, { useState } from 'react';
import { Form, Input, Button, Select, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddClinicComp = () => {
  const [cities] = useState(['İstanbul', 'Ankara', 'İzmir']);
  const [clinics, setClinics] = useState([]);
  const [form] = Form.useForm();

  const handleAddClinic = (values) => {
    const newClinic = {
      city: values.city,
      name: values.clinicName,
    };
    setClinics([...clinics, newClinic]);
    form.resetFields();
  };

  const handleDeleteClinic = (clinicToDelete) => {
    setClinics(clinics.filter((clinic) => clinic.name !== clinicToDelete));
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <Form
        form={form}
        name="addClinic"
        onFinish={handleAddClinic}
        layout="vertical"
      >
        <Form.Item
          label="Şehir Seç"
          name="city"
          rules={[{ required: true, message: 'Lütfen bir şehir seçiniz!' }]}
        >
          <Select placeholder="Bir şehir seçin">
            {cities.map((city, index) => (
              <Option key={index} value={city}>
                {city}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Klinik Adı"
          name="clinicName"
          rules={[{ required: true, message: 'Lütfen klinik adını giriniz!' }]}
        >
          <Input placeholder="Klinik adını giriniz" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Klinik Ekle
          </Button>
        </Form.Item>
      </Form>

      <Form layout="vertical">
        <Form.Item label="Klinikler Listesi">
          <Select
            placeholder="Bir klinik seçin"
            style={{ width: '100%' }}
            dropdownRender={(menu) => (
              <>
                {clinics.map((clinic, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '8px',
                    }}
                  >
                    <span>{clinic.city} - {clinic.name}</span>
                    <Popconfirm
                      title="Silmek istediğinize emin misiniz?"
                      onConfirm={() => handleDeleteClinic(clinic.name)}
                      okText="Evet"
                      cancelText="Hayır"
                    >
                      <DeleteOutlined
                        style={{ color: 'red', cursor: 'pointer' }}
                      />
                    </Popconfirm>
                  </div>
                ))}
              </>
            )}
          >
            {clinics.map((clinic, index) => (
              <Option key={index} value={clinic.name}>
                {clinic.city} - {clinic.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddClinicComp;
