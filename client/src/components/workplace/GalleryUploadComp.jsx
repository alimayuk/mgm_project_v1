"use client";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload, Button, Input, message } from "antd";
import "@/app/css/GalleryUploadComp.css"; // Import the CSS file

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const GalleryUploadComp = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [titles, setTitles] = useState({});
  const [alts, setAlts] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = async ({ fileList: newFileList }) => {
    const updatedFileList = await Promise.all(
      newFileList.map(async (file) => {
        if (!file.url && !file.thumbUrl) {
          file.thumbUrl = await getBase64(file.originFileObj);
        }
        return file;
      })
    );
    setFileList(updatedFileList);
  };

  const handleUpload = async () => {
    setUploading(true);

    const uploadPromises = fileList.map((file) => {
      const formData = new FormData();
      formData.append("file", file.originFileObj);
      formData.append("title", titles[file.uid]);
      formData.append("alt", alts[file.uid]);

      return fetch("http://localhost:8000/api/gallery/", {
        method: "POST",
        body: formData,
      });
    });

    try {
      await Promise.all(uploadPromises);
      setFileList([]); // Clear the file list after successful upload
      setTitles({});
      setAlts({});
      message.success("Görseller başarıyla yüklendi!");
    } catch (error) {
      console.error("Upload failed:", error);
      message.error("Yükleme başarısız oldu.");
    } finally {
      setUploading(false);
    }
  };

  const handleInputChange = (e, type, uid) => {
    const value = e.target.value;
    if (type === "title") {
      setTitles({ ...titles, [uid]: value });
    } else {
      setAlts({ ...alts, [uid]: value });
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
        onRemove={(file) => {
          const newFileList = fileList.filter((item) => item.uid !== file.uid);
          setFileList(newFileList);
          const newTitles = { ...titles };
          const newAlts = { ...alts };
          delete newTitles[file.uid];
          delete newAlts[file.uid];
          setTitles(newTitles);
          setAlts(newAlts);
        }}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>

      <div className="image-input-container">
        {fileList.map((file) => (
          <div key={file.uid} className="image-input-item">
            <img src={file.thumbUrl} alt="thumbnail" className="image-preview" />
            <div className="input-group">
              <Input
                placeholder="Başlık"
                value={titles[file.uid] || ""}
                onChange={(e) => handleInputChange(e, "title", file.uid)}
                style={{ marginBottom: 8 }}
              />
              <Input
                placeholder="Alt Metin"
                value={alts[file.uid] || ""}
                onChange={(e) => handleInputChange(e, "alt", file.uid)}
              />
            </div>
          </div>
        ))}
      </div>

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

export default GalleryUploadComp;
