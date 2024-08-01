"use client";

import React, { useState } from "react";
import {
  Space,
  Table,
  Tag,
  Typography,
  Modal,
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  TimePicker,
  Tooltip,
} from "antd";
import moment from "moment";

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const columns = (editRecord) => [
  {
    title: "Ad Soyad",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Telefon No",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Klinik",
    dataIndex: "klinik",
    key: "klinik",
  },
  {
    title: "Hekim",
    dataIndex: "hekim",
    key: "hekim",
  },
  {
    title: "Randevu Tarihi",
    dataIndex: "workDate",
    key: "workDate",
  },
  {
    title: "Durum",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color;
      if (status === "Onaylandı") color = "green";
      else if (status === "Reddedildi") color = "red";
      else color = "orange"; // Beklemede durumu için turuncu renk
      return <Tag color={color}>{status}</Tag>;
    },
  },
  {
    title: "Mesaj",
    dataIndex: "message",
    key: "message",
    width: 250,
    ellipsis: {
      showTitle: false,
    },
    render: (message) => (
      <Tooltip placement="topLeft" title={message}>
        {message}
      </Tooltip>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a onClick={() => editRecord(record)}>Düzenle</a>
        <a>Reddet</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "Ali Veli",
    phoneNumber: "123-456-7890",
    klinik: "Dent Klinik",
    hekim: "Dr. Ahmet Yılmaz",
    workDate: "2024-08-01",
    status: "Onaylandı",
    message:
      "Randevu saatini bir saat ileri almak istiyorum. Randevu saatini bir saat ileri almak istiyorum. Randevu saatini bir saat ileri almak istiyorum. Randevu saatini bir saat ileri almak istiyorum.",
  },
  {
    key: "2",
    name: "Ayşe Fatma",
    phoneNumber: "234-567-8901",
    klinik: "Sağlık Merkezi",
    hekim: "Dr. Zeynep Kara",
    workDate: "2024-08-02",
    status: "Reddedildi",
    message: "Acil bir randevu talep ediyorum, lütfen geri dönüş yapın.",
  },
  {
    key: "3",
    name: "Mehmet Yılmaz",
    phoneNumber: "345-678-9012",
    klinik: "Güven Hastanesi",
    hekim: "Dr. Ali Demir",
    workDate: "2024-08-03",
    status: "Beklemede",
    message: "Randevu tarihi hakkında bilgi almak istiyorum.",
  },
  {
    key: "4",
    name: "Canan Kaya",
    phoneNumber: "456-789-0123",
    klinik: "Şifa Polikliniği",
    hekim: "Dr. Fatma Aksoy",
    workDate: "2024-08-04",
    status: "Onaylandı",
    message:
      "Diş temizliği randevusu için uygun bir tarih belirlemek istiyorum.",
  },
  {
    key: "5",
    name: "Okan Demir",
    phoneNumber: "567-890-1234",
    klinik: "Özel Sağlık",
    hekim: "Dr. Hasan Güneş",
    workDate: "2024-08-05",
    status: "Beklemede",
    message: "Yalnızca kontrol amaçlı bir randevu almak istiyorum.",
  },
];

const Page = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [currentRecord, setCurrentRecord] = useState(null);

  const editRecord = (record) => {
    setCurrentRecord(record);
    form.setFieldsValue({
      klinik: record.klinik,
      hekim: record.hekim,
      workDate: moment(record.workDate, "YYYY-MM-DD"),
      startTime: moment(), // Varsayılan olarak şimdiki zamanı koyuyoruz
      endTime: moment().add(1, "hour"), // Varsayılan olarak 1 saat sonrayı koyuyoruz
      title: "", // Varsayılan boş
      description: "", // Varsayılan boş
    });
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form Values:", values);
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <div className="container">
      <Title level={2}>Randevu Talepleri</Title>
      <Table
        dataSource={data}
        columns={columns(editRecord)}
        scroll={{ x: 1000 }}
        pagination={{ pageSize: 5 }}
      />
      <Modal
        style={{
          top: "30px",
        }}
        title="Randevu Bilgileri"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            İptal
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Oluştur
          </Button>,
        ]}
      >
        {currentRecord && (
          <>
            <p>
              <strong>Ad Soyad:</strong> {currentRecord.name}
            </p>
            <p>
              <strong>Telefon No:</strong> {currentRecord.phoneNumber}
            </p>
            <p>
              <strong>Klinik:</strong> {currentRecord.klinik}
            </p>
            <p>
              <strong>Hekim:</strong> {currentRecord.hekim}
            </p>
            <p>
              <strong>Randevu Tarihi:</strong> {currentRecord.workDate}
            </p>
            <p>
              <strong>Durum:</strong>{" "}
              <Tag
                color={
                  currentRecord.status === "Onaylandı"
                    ? "green"
                    : currentRecord.status === "Reddedildi"
                    ? "red"
                    : "orange"
                }
              >
                {currentRecord.status}
              </Tag>
            </p>
            <p>
              <strong>Mesaj:</strong> {currentRecord.message}
            </p>

            <Form form={form} layout="vertical">
              <Form.Item
                name="klinik"
                label="Klinik"
                rules={[{ required: true, message: "Lütfen klinik seçiniz!" }]}
              >
                <Select
                  showSearch
                  placeholder="Klinik Ara"
                  style={{ width: "100%" }}
                >
                  <Option value="Dent Klinik">Dent Klinik</Option>
                  <Option value="Sağlık Merkezi">Sağlık Merkezi</Option>
                  <Option value="Güven Hastanesi">Güven Hastanesi</Option>
                  <Option value="Şifa Polikliniği">Şifa Polikliniği</Option>
                  <Option value="Özel Sağlık">Özel Sağlık</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="hekim"
                label="Hekim"
                rules={[{ required: true, message: "Lütfen hekim seçiniz!" }]}
              >
                <Select
                  showSearch
                  placeholder="Hekim Ara"
                  style={{ width: "100%" }}
                >
                  <Option value="Dr. Ahmet Yılmaz">Dr. Ahmet Yılmaz</Option>
                  <Option value="Dr. Zeynep Kara">Dr. Zeynep Kara</Option>
                  <Option value="Dr. Ali Demir">Dr. Ali Demir</Option>
                  <Option value="Dr. Fatma Aksoy">Dr. Fatma Aksoy</Option>
                  <Option value="Dr. Hasan Güneş">Dr. Hasan Güneş</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="workDate"
                label="Randevu Tarihi"
                rules={[{ required: true, message: "Lütfen tarih seçiniz!" }]}
              >
                <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item label="Başlangıç ve Bitiş Saati">
                <Space.Compact style={{ display: "flex", gap: "10px" }}>
                  <Form.Item
                    name="startTime"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "Lütfen başlangıç saati seçiniz!",
                      },
                    ]}
                  >
                    <TimePicker
                      format="HH:mm"
                      minuteStep={30}
                      style={{ width: "100%" }}
                      showNow={false}
                      use12Hours={false}
                      placeholder="Başlangıç Saati"
                    />
                  </Form.Item>
                  <Form.Item
                    name="endTime"
                    noStyle
                    rules={[
                      {
                        required: true,
                        message: "Lütfen bitiş saati seçiniz!",
                      },
                    ]}
                  >
                    <TimePicker
                      format="HH:mm"
                      minuteStep={30}
                      style={{ width: "100%" }}
                      showNow={false}
                      use12Hours={false}
                      placeholder="Bitiş Saati"
                    />
                  </Form.Item>
                </Space.Compact>
              </Form.Item>
              <Form.Item
                name="title"
                label="Randevu Başlığı"
                rules={[{ required: true, message: "Lütfen başlık giriniz!" }]}
              >
                <Input
                  placeholder="Randevu Başlığı"
                  style={{ marginBottom: "10px" }}
                />
              </Form.Item>
              <Form.Item name="description" label="Randevu Açıklama">
                <TextArea
                  placeholder="Randevu Açıklama"
                  style={{ marginBottom: "10px" }}
                />
              </Form.Item>
            </Form>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Page;
