"use client";
import React from "react";
import { Col, Image, Row } from "antd";
import {
    EyeOutlined
} from '@ant-design/icons';
const GalleryComp = () => {
  const images = [
    "https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/305567/pexels-photo-305567.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3663999/pexels-photo-3663999.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4687254/pexels-photo-4687254.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6812520/pexels-photo-6812520.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6812456/pexels-photo-6812456.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div style={{ marginTop: "50px" }}>
      <Image.PreviewGroup>
        <Row gutter={[16, 16]}>
          {images.map((src, index) => (
            <Col xs={24} sm={12} lg={8} xl={6} style={{ justifyContent:"center", display:"flex" }} key={index}>
            <Image
              alt={`Image ${index + 1}`}
              src={src}
              width={300}
              height={300}
              style={{ 
                objectFit:"cover"
               }}
              preview={{ 
                mask: <><EyeOutlined style={{ marginRight:"5px" }} /> <span>Görüntüle</span></>
               }} 
            />
            </Col>
          ))}
        </Row>
      </Image.PreviewGroup>
    </div>
  );
};

export default GalleryComp;
