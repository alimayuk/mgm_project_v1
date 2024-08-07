"use client";
import React from "react";
import { Col, Empty, Image, Row, Spin } from "antd";
import TitleComp from "./TitleComp";
import { EyeOutlined } from "@ant-design/icons";
import { useGetGalleryImagesQuery } from "@/lib/services/gallery";

const GalleryComp = () => {
  const { data: images = [], isLoading, error } = useGetGalleryImagesQuery();

  if (error) {
    return <Empty description="İçerik Bulunamadı" style={{ minHeight:"50vh",display: "flex",flexDirection:"column", alignItems:"center", justifyContent:"center" }} />;
  }

  return (
    <div style={{minHeight:"50vh"}}>
      <Spin spinning={isLoading}>
      <TitleComp
        title={"Galeri"}
        subText={
          "Diş kliniğimizdeki modern teknoloji ve rahat ortamımızı keşfedin. Başarılı tedavi süreçlerimizi ve mutlu hastalarımızın gülümsemelerini galerimizde bulabilirsiniz."
        }
      />
        <Image.PreviewGroup
          preview={{
            countRender: (current) => {
              const image = images[current - 1];
              return image ? image.title : "Klinikten Görselimiz";
            },
          }}
        >
          <Row gutter={[16, 16]}>
            {images.map((image, index) => (
              <Col
                xs={24}
                sm={12}
                lg={8}
                xl={6}
                style={{ justifyContent: "center", display: "flex" }}
                key={index}
              >
                <Image
                  alt={`Image ${index + 1}`}
                  src={`http://localhost:8000/${image.path_name}`}
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                  preview={{
                    mask: (
                      <>
                        <EyeOutlined style={{ marginRight: "5px" }} />{" "}
                        <span>Görüntüle</span>
                      </>
                    ),
                  }}
                />
              </Col>
            ))}
          </Row>
        </Image.PreviewGroup>
      </Spin>
    </div>
  );
};

export default GalleryComp;
