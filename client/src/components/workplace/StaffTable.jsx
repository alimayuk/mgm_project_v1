"use client";
import React, { useState } from "react";
import {
  Table,
  ConfigProvider,
  Checkbox,
  Avatar,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Upload,
  Grid,
} from "antd";
import trTR from "antd/lib/locale/tr_TR";
import { UserOutlined, UploadOutlined } from "@ant-design/icons";
const { useBreakpoint } = Grid;
const columns = (handleCheckboxChange, showModal) => [
  {
    title: "Ad Soyad",
    dataIndex: "name",
    width: "15%",
    sorter: (a, b) => a.name.localeCompare(b.name),
    sortDirections: ["ascend", "descend"],
  },
  {
    title: "Pozisyon",
    dataIndex: "position",
    filters: [
      {
        text: "Diş Hekimi",
        value: "Diş Hekimi",
      },
      {
        text: "Asistan",
        value: "Asistan",
      },
      {
        text: "Sekreter",
        value: "Sekreter",
      },
    ],
    onFilter: (value, record) => record.position === value,
    filterSearch: true,
  },
  {
    title: "Şehir",
    dataIndex: "city",
    filters: [
      {
        text: "İstanbul",
        value: "İstanbul",
      },
      {
        text: "Ankara",
        value: "Ankara",
      },
      {
        text: "İzmir",
        value: "İzmir",
      },
    ],
    onFilter: (value, record) => record.city === value,
    filterSearch: true,
  },
  {
    title: "Deneyim Yılı",
    dataIndex: "experience",
    sorter: (a, b) => a.experience - b.experience,
  },
  {
    title: "Klinik",
    dataIndex: "clinic",
    filters: [
      {
        text: "A Klinik",
        value: "A Klinik",
      },
      {
        text: "B Klinik",
        value: "B Klinik",
      },
      {
        text: "C Klinik",
        value: "C Klinik",
      },
    ],
    onFilter: (value, record) => record.clinic === value,
    filterSearch: true,
  },
  {
    title: "Telefon No",
    dataIndex: "contact",
  },
  {
    title: "Yaş",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Web Sitesinde Göster",
    dataIndex: "showOnWebsite",
    render: (text, record) => (
      <Checkbox
        disabled
        checked={record.showOnWebsite}
        onChange={() => handleCheckboxChange(record.key, "showOnWebsite")}
      />
    ),
  },
  {
    title: "Fotoğraf",
    dataIndex: "photo",
    render: (photo) =>
      photo ? <Avatar src={photo} /> : <Avatar icon={<UserOutlined />} />,
  },
  {
    title: "İşlemler",
    key: "actions",
    render: (text, record) => (
      <Button type="primary" size="small" onClick={() => showModal(record)}>
        Düzenle
      </Button>
    ),
  },
];

const initialData = [
  {
    key: "1",
    name: "Ali Yılmaz ",
    age: 32,
    position: "Diş Hekimi",
    city: "İstanbul",
    experience: 10,
    clinic: "A Klinik",
    contact: "555-1234",
    showOnWebsite: true,
    photo:
      "https://images.pexels.com/photos/1405982/pexels-photo-1405982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    key: "2",
    name: "Ayşe Kara",
    age: 28,
    position: "Asistan",
    city: "Ankara",
    experience: 5,
    clinic: "B Klinik",
    contact: "555-5678",
    showOnWebsite: false,
    photo: "", // Fotoğraf yok
  },
  {
    key: "3",
    name: "Mehmet Ak",
    age: 45,
    position: "Diş Hekimi",
    city: "İzmir",
    experience: 20,
    clinic: "C Klinik",
    contact: "555-8765",
    showOnWebsite: false,
    photo: "https://example.com/photo3.jpg",
  },
  {
    key: "4",
    name: "Fatma Yıldız",
    age: 34,
    position: "Sekreter",
    city: "İstanbul",
    experience: 8,
    clinic: "A Klinik",
    contact: "555-4321",
    showOnWebsite: true,
    photo: "", // Fotoğraf yok
  },
  {
    key: "5",
    name: "Can Demir",
    age: 29,
    position: "Asistan",
    city: "Ankara",
    experience: 6,
    clinic: "B Klinik",
    contact: "555-6789",
    showOnWebsite: false,
    photo: "https://example.com/photo5.jpg",
  },
  {
    key: "6",
    name: "Selin Öz",
    age: 40,
    position: "Diş Hekimi",
    city: "Antalya",
    experience: 15,
    clinic: "D Klinik",
    contact: "555-3456",
    showOnWebsite: true,
    photo: "", // Fotoğraf yok
  },
  {
    key: "7",
    name: "Eren Arslan",
    age: 27,
    position: "Asistan",
    city: "Bursa",
    experience: 3,
    clinic: "E Klinik",
    contact: "555-7890",
    showOnWebsite: false,
    photo: "https://example.com/photo7.jpg",
  },
  {
    key: "8",
    name: "Nazan Çelik",
    age: 36,
    position: "Sekreter",
    city: "İzmir",
    experience: 12,
    clinic: "C Klinik",
    contact: "555-2345",
    showOnWebsite: true,
    photo: "https://example.com/photo8.jpg",
  },
  {
    key: "9",
    name: "Oğuz Kaan",
    age: 38,
    position: "Diş Hekimi",
    city: "Adana",
    experience: 16,
    clinic: "F Klinik",
    contact: "555-6543",
    showOnWebsite: true,
    photo: "", // Fotoğraf yok
  },
  {
    key: "10",
    name: "Elif Tan",
    age: 26,
    position: "Asistan",
    city: "Samsun",
    experience: 2,
    clinic: "G Klinik",
    contact: "555-9876",
    showOnWebsite: true,
    photo: "https://example.com/photo10.jpg",
  },
  {
    key: "11",
    name: "Burak Özdemir",
    age: 33,
    position: "Diş Hekimi",
    city: "Eskişehir",
    experience: 10,
    clinic: "H Klinik",
    contact: "555-1122",
    showOnWebsite: true,
    photo: "https://example.com/photo11.jpg",
  },
  {
    key: "12",
    name: "Zeynep Aksoy",
    age: 31,
    position: "Sekreter",
    city: "İstanbul",
    experience: 9,
    clinic: "A Klinik",
    contact: "555-3344",
    showOnWebsite: false,
    photo: "", // Fotoğraf yok
  },
  {
    key: "13",
    name: "Deniz Kaplan",
    age: 29,
    position: "Asistan",
    city: "Antalya",
    experience: 4,
    clinic: "D Klinik",
    contact: "555-5566",
    showOnWebsite: true,
    photo: "https://example.com/photo13.jpg",
  },
  {
    key: "14",
    name: "Cem Yılmaz",
    age: 44,
    position: "Diş Hekimi",
    city: "İstanbul",
    experience: 19,
    clinic: "I Klinik",
    contact: "555-7788",
    showOnWebsite: true,
    photo: "", // Fotoğraf yok
  },
  {
    key: "15",
    name: "Pelin Demir",
    age: 32,
    position: "Sekreter",
    city: "Bursa",
    experience: 7,
    clinic: "E Klinik",
    contact: "555-9900",
    showOnWebsite: false,
    photo: "https://example.com/photo15.jpg",
  },
  {
    key: "16",
    name: "Emre Can",
    age: 30,
    position: "Diş Hekimi",
    city: "İzmir",
    experience: 8,
    clinic: "C Klinik",
    contact: "555-1111",
    showOnWebsite: true,
    photo: "", // Fotoğraf yok
  },
  {
    key: "17",
    name: "Gizem Kılıç",
    age: 27,
    position: "Asistan",
    city: "Adana",
    experience: 3,
    clinic: "F Klinik",
    contact: "555-2222",
    showOnWebsite: false,
    photo: "https://example.com/photo17.jpg",
  },
  {
    key: "18",
    name: "Serkan Yıldırım",
    age: 35,
    position: "Diş Hekimi",
    city: "Ankara",
    experience: 14,
    clinic: "J Klinik",
    contact: "555-3333",
    showOnWebsite: true,
    photo: "https://example.com/photo18.jpg",
  },
  {
    key: "19",
    name: "Bahar Çelik",
    age: 29,
    position: "Sekreter",
    city: "Samsun",
    experience: 6,
    clinic: "G Klinik",
    contact: "555-4444",
    showOnWebsite: false,
    photo: "", // Fotoğraf yok
  },
  {
    key: "20",
    name: "Kerem Taş",
    age: 31,
    position: "Asistan",
    city: "Eskişehir",
    experience: 5,
    clinic: "H Klinik",
    contact: "555-5555",
    showOnWebsite: true,
    photo: "https://example.com/photo20.jpg",
  },
  {
    key: "21",
    name: "Derya Kaya",
    age: 28,
    position: "Sekreter",
    city: "İzmir",
    experience: 4,
    clinic: "C Klinik",
    contact: "555-6666",
    showOnWebsite: false,
    photo: "", // Fotoğraf yok
  },
  {
    key: "22",
    name: "Murat Ay",
    age: 40,
    position: "Diş Hekimi",
    city: "İstanbul",
    experience: 17,
    clinic: "A Klinik",
    contact: "555-7777",
    showOnWebsite: true,
    photo: "", // Fotoğraf yok
  },
  {
    key: "23",
    name: "Funda Yılmaz",
    age: 36,
    position: "Asistan",
    city: "Ankara",
    experience: 8,
    clinic: "B Klinik",
    contact: "555-8888",
    showOnWebsite: false,
    photo: "https://example.com/photo23.jpg",
  },
  {
    key: "24",
    name: "Mert Şahin",
    age: 33,
    position: "Diş Hekimi",
    city: "Antalya",
    experience: 10,
    clinic: "D Klinik",
    contact: "555-9999",
    showOnWebsite: true,
    photo: "", // Fotoğraf yok
  },
  {
    key: "25",
    name: "Selma Koç",
    age: 29,
    position: "Sekreter",
    city: "İzmir",
    experience: 6,
    clinic: "C Klinik",
    contact: "555-0000",
    showOnWebsite: false,
    photo: "https://example.com/photo25.jpg",
  },
  {
    key: "26",
    name: "Yusuf Demir",
    age: 27,
    position: "Asistan",
    city: "İstanbul",
    experience: 3,
    clinic: "A Klinik",
    contact: "555-1212",
    showOnWebsite: true,
    photo: "https://example.com/photo26.jpg",
  },
  {
    key: "27",
    name: "Merve Öz",
    age: 34,
    position: "Sekreter",
    city: "Ankara",
    experience: 9,
    clinic: "B Klinik",
    contact: "555-3434",
    showOnWebsite: true,
    photo: "", // Fotoğraf yok
  },
  {
    key: "28",
    name: "Hakan Taş",
    age: 31,
    position: "Diş Hekimi",
    city: "Bursa",
    experience: 11,
    clinic: "E Klinik",
    contact: "555-5656",
    showOnWebsite: false,
    photo: "https://example.com/photo28.jpg",
  },
];

const StaffTable = () => {
  const [data, setData] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [currentRecord, setCurrentRecord] = useState(null);
  const screen = useBreakpoint();

  const showModal = (record) => {
    setCurrentRecord(record || null);
    form.resetFields();
    if (record) {
      form.setFieldsValue(record);
    }
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((formData) => {
        console.log("Modal kapanırken form verileri:", formData);

        if (currentRecord) {
          // Güncelleme işlemi
          const updatedData = data.map((item) =>
            item.key === currentRecord.key ? { ...item, ...formData } : item
          );
          setData(updatedData);
          console.log("Güncellenmiş veri:", {
            key: currentRecord.key,
            ...formData,
          });
        } else {
          // Ekleme işlemi
          const newKey = data.length
            ? parseInt(data[data.length - 1].key) + 1
            : 1;
          const newData = { key: newKey.toString(), ...formData };
          setData([...data, newData]);
          console.log("Yeni eklenmiş veri:", newData);
        }

        setIsModalOpen(false);
      })
      .catch((errorInfo) => {
        console.log("Form validation failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCheckboxChange = (key, field) => {
    const newData = data.map((item) => {
      if (item.key === key) {
        return { ...item, [field]: !item[field] };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <ConfigProvider locale={trTR}>
      <>
        <Button
          type="primary"
          style={{ margin: "20px 20px " }}
          onClick={() => showModal()}
        >
          Çalışan Ekle
        </Button>
        <Modal
          title="Çalışan Ekle"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={screen.sm ? "60%" : "90%"}
          style={{
            top: "30px",
          }}
          footer={[
            <Button key="back" onClick={handleCancel}>
              İptal
            </Button>,
            currentRecord && (
              <Button key="remove" onClick={handleOk} type="primary">
                Kaldır
              </Button>
            ),
            <Button key="submit" onClick={handleOk} type="primary">
              Kaydet
            </Button>,
          ]}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              label="Ad Soyad"
              name="name"
              rules={[{ required: true, message: "Lütfen adı soyadı girin!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Telefon No"
              name="contact"
              rules={[
                { required: true, message: "Lütfen telefon numarasını girin!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="E-posta"
              name="email"
              rules={[{ type: "email", message: "Geçerli bir e-posta girin!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Yaş"
              name="age"
              rules={[{ required: true, message: "Lütfen yaşı girin!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Deneyim"
              name="experience"
              rules={[{ required: true, message: "Lütfen deneyimi girin!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Şehir"
              name="city"
              rules={[{ required: true, message: "Lütfen şehri seçin!" }]}
            >
              <Select>
                <Select.Option value="İstanbul">İstanbul</Select.Option>
                <Select.Option value="Ankara">Ankara</Select.Option>
                <Select.Option value="İzmir">İzmir</Select.Option>
                <Select.Option value="Bursa">Bursa</Select.Option>
                <Select.Option value="Konya">Konya</Select.Option>
                <Select.Option value="Adana">Adana</Select.Option>
                <Select.Option value="Antalya">Antalya</Select.Option>
                <Select.Option value="Kütahya">Kütahya</Select.Option>
                <Select.Option value="Samsun">Samsun</Select.Option>
                <Select.Option value="Balıkesir">Balıkesir</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Klinik"
              name="clinic"
              rules={[{ required: true, message: "Lütfen kliniği seçin!" }]}
            >
              <Select>
                <Select.Option value="A Klinik">A Klinik</Select.Option>
                <Select.Option value="B Klinik">B Klinik</Select.Option>
                <Select.Option value="C Klinik">C Klinik</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Web Sitesinde Göster"
              name="showOnWebsite"
              rules={[{ required: true, message: "Lütfen seçim yapın!" }]}
            >
              <Select>
                <Select.Option value="Evet">Evet</Select.Option>
                <Select.Option value="Hayır">Hayır</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="avatar"
              label="Avatar"
              valuePropName="fileList"
              getValueFromEvent={(e) =>
                Array.isArray(e) ? e : e && e.fileList
              }
            >
              <Upload
                listType="picture-card"
                beforeUpload={() => false}
                maxCount={1}
              >
                <div>
                  <Button icon={<UploadOutlined />}></Button>
                </div>
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
      </>
      <Table
        columns={columns(handleCheckboxChange, showModal)}
        dataSource={data}
        scroll={{ x: 1000 }}
        pagination={{ pageSize: 5 }}
      />
    </ConfigProvider>
  );
};

export default StaffTable;
