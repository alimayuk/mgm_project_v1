"use client";
import React, { useState, useEffect } from "react";
import { Badge, Card, Col, List } from "antd";
const { Meta } = Card;
const items = [
  {
    title: "Kanal Tedavisi",
    image:
      "https://images.pexels.com/photos/5355695/pexels-photo-5355695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Dişin iç kısmındaki enfeksiyonu tedavi etmek için yapılan işlem.",
    isNew: true,
  },
  {
    title: "Genel Diş Hekimliği",
    image:
      "https://images.pexels.com/photos/4269684/pexels-photo-4269684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Rutin kontroller, diş temizliği, dolgu ve çekim gibi genel diş sağlığı hizmetleri sunuyoruz. Sağlıklı bir ağız yapısı için düzenli diş hekimi ziyaretlerinizi aksatmayın.",
    isNew: false,
  },
  {
    title: "Kanal Tedavisi",
    image:
      "https://images.pexels.com/photos/5355695/pexels-photo-5355695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Dişin iç kısmındaki enfeksiyonu tedavi etmek için yapılan işlem.",
    isNew: true,
  },
  {
    title: "Estetik Diş Hekimliği",
    image:
      "https://images.pexels.com/photos/3845685/pexels-photo-3845685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Diş beyazlatma, porselen kaplama ve gülüş tasarımı gibi estetik çözümlerle daha güzel bir gülüşe sahip olmanızı sağlıyoruz.",
    isNew: false,
  },
  {
    title: "Kanal Tedavisi",
    image:
      "https://images.pexels.com/photos/5355695/pexels-photo-5355695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Dişin iç kısmındaki enfeksiyonu tedavi etmek için yapılan işlem.",
    isNew: true,
  },
  {
    title: "Estetik Diş Hekimliği",
    image:
      "https://images.pexels.com/photos/3845685/pexels-photo-3845685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Diş beyazlatma, porselen kaplama ve gülüş tasarımı gibi estetik çözümlerle daha güzel bir gülüşe sahip olmanızı sağlıyoruz.",
    isNew: false,
  },
  {
    title: "Estetik Diş Hekimliği",
    image:
      "https://images.pexels.com/photos/3845685/pexels-photo-3845685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Diş beyazlatma, porselen kaplama ve gülüş tasarımı gibi estetik çözümlerle daha güzel bir gülüşe sahip olmanızı sağlıyoruz.",
    isNew: false,
  },
  {
    title: "Kanal Tedavisi",
    image:
      "https://images.pexels.com/photos/5355695/pexels-photo-5355695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Dişin iç kısmındaki enfeksiyonu tedavi etmek için yapılan işlem.",
    isNew: true,
  },
  {
    title: "Estetik Diş Hekimliği",
    image:
      "https://images.pexels.com/photos/3845685/pexels-photo-3845685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Diş beyazlatma, porselen kaplama ve gülüş tasarımı gibi estetik çözümlerle daha güzel bir gülüşe sahip olmanızı sağlıyoruz.",
    isNew: false,
  },
];

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [dataSource, setDataSource] = useState([]);

  const fetchRecords = (page) => {
    setLoading(true);
    // Simulate fetching data
    setTimeout(() => {
      const pageSize = 6;
      const totalItems = items.length;
      const totalPages = Math.ceil(totalItems / pageSize);
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const pageData = items.slice(startIndex, endIndex);

      setTotalPages(totalPages);
      setDataSource(pageData);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchRecords(1);
  }, []);

  return (
    <div className="container">
      <List
        grid={{
          gutter: [16, 16],
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        loading={loading}
        pagination={{
          onChange: (page) => {
            fetchRecords(page);
          },
          pageSize: 6,
          total: totalPages * 6,
        }}
        dataSource={dataSource}
        renderItem={(item, index) => (
          <List.Item style={{ height:"100%" }} colStyle={{ 
            height: '100%',
           }} >
            <Card
              key={index}
              hoverable
              style={{
                height:"100%",
                fontSize: "16px",
              }}
              cover={
                item.isNew ? (
                  <Badge.Ribbon text="Yeni Paylaşım" color="red">
                    <img
                      alt={item.title}
                      src={item.image}
                      style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Badge.Ribbon>
                ) : (
                  <img
                    alt={item.title}
                    src={item.image}
                    style={{
                      height: "200px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                )
              }
            >
              <Meta title={item.title} description={item.description} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Page;
