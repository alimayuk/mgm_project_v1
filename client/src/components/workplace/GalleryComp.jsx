"use client";
import React, { useState } from "react";
import { Col, Image, Popconfirm, Row, Space, Spin } from "antd";
import {
  DeleteOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import {
  useGetGalleryImagesQuery,
  useDeleteImageMutation,
} from "@/lib/services/gallery";
import "@/app/css/GalleryUploadComp.css";

const GalleryComp = () => {
  const {
    data: images = [],
    isLoading,
    error,
    refetch,
  } = useGetGalleryImagesQuery();
  const [deleteImage] = useDeleteImageMutation();
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);

  if (error) {
    return <div>Görseller yüklenirken bir hata oluştu.</div>;
  }

  const handleDelete = (id) => {
    deleteImage(id)
      .unwrap()
      .then(() => {
        setSelectedImageId(null);
        setPreviewVisible(false);
        refetch();
      })
      .catch((error) => {
        console.error("Görsel silinirken hata oluştu:", error);
      });
  };

  const handleImageClick = (id) => {
    setSelectedImageId(id);
    setPreviewVisible(true);
  };

  const handleClosePreview = () => {
    setPreviewVisible(false);
    setSelectedImageId(null);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <Spin spinning={isLoading}>
        <Image.PreviewGroup
          preview={{
            visible: previewVisible,
            onVisibleChange: (visible) => {
              if (!visible) handleClosePreview();
            },
            toolbarRender: (
              _,
              {
                image: { url },
                transform: { scale },
                actions: {
                  onFlipY,
                  onFlipX,
                  onRotateLeft,
                  onRotateRight,
                  onZoomOut,
                  onZoomIn,
                  onReset,
                },
              }
            ) => (
              <Space size={12} className="toolbar-wrapper">
                <Popconfirm
                  title="Bu görseli sil"
                  description="Görseli silmek istediğine emin misin?"
                  onConfirm={() => handleDelete(selectedImageId)}
                  onCancel={() => handleClosePreview()}
                  okText="Sil"
                  cancelText="Çıkış"
                >
                  <DeleteOutlined
                    style={{
                      color: "white",
                      backgroundColor: "red",
                      borderRadius: "50%",
                    }}
                  />
                </Popconfirm>

                <SwapOutlined rotate={90} onClick={onFlipY} />
                <SwapOutlined onClick={onFlipX} />
                <RotateLeftOutlined onClick={onRotateLeft} />
                <RotateRightOutlined onClick={onRotateRight} />
                <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                <UndoOutlined onClick={onReset} />
              </Space>
            ),
          }}
        >
          <Row gutter={[16, 16]}>
            {images.map((image) => (
              <Col
                xs={24}
                sm={12}
                lg={8}
                xl={6}
                style={{ justifyContent: "center", display: "flex" }}
                key={image._id}
              >
                <Image
                  alt={image.alt || `Görsel ${image._id}`}
                  src={`http://localhost:8000/${image.path_name}`}
                  width={300}
                  height={300}
                  style={{
                    objectFit: "cover",
                  }}
                  preview={{
                    visible: selectedImageId === image._id,
                    mask: (
                      <>
                        <EyeOutlined style={{ marginRight: "5px" }} />
                        <span>Görüntüle</span>
                      </>
                    ),
                  }}
                  onClick={() => handleImageClick(image._id)}
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
