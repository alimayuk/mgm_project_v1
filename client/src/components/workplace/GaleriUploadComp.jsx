"use client";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload, Button, message } from "antd";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const GaleiUploadComp = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const handleUpload = async () => {
    setUploading(true);

    const uploadPromises = fileList.map((file) => {
      const formData = new FormData();
      formData.append("file", file.originFileObj);
      return fetch("https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload", {
        method: "POST",
        body: formData,
      });
    });

    try {
      await Promise.all(uploadPromises);
      setFileList([]); // Clear the file list after successful upload
      message.success("Görseller başarıyla yüklendi!");
    } catch (error) {
      console.error("Upload failed:", error);
      message.error("Yükleme başarısız oldu.");
    } finally {
      setUploading(false);
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Görsel Ekle</div>
    </div>
  );

  return (
    <>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={() => false} // Prevents automatic upload
        multiple // Allows multiple file selection
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>

      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? "Yükleniyor..." : "Yükle"}
      </Button>

      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

export default GaleiUploadComp;
