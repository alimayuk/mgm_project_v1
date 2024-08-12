"use client";
import { Button, Checkbox, Form, Input, Upload, Image, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import SunEditor from "suneditor-react";
import { useCreateBlogMutation } from "@/lib/services/blog";


const Editor = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [content, setContent] = useState("");
  const [createBlog] = useCreateBlogMutation();

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = URL.createObjectURL(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleSubmit = async (values) => {
    try {
      // FormData oluşturma
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", content);
      if (fileList[0]) {
        formData.append("image", fileList[0].originFileObj);
      }
      formData.append("active", values.active); // Checkbox değeri true/false olarak eklenir

      // Blog oluşturma işlemi
      await createBlog(formData).unwrap();
      message.success("Blog başarıyla oluşturuldu!");
    } catch (error) {
      message.error("Blog oluşturulurken bir hata oluştu.");
    }
  };

  return (
    <div>
      <h1>Blog Oluştur</h1>
      <Form
        name="basic"
        size="large"
        layout="vertical"
        style={{ width: "100%" }}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Başlık"
          name="title"
          rules={[{ required: true, message: "Lütfen başlık giriniz!" }]}
        >
          <Input placeholder="Başlık" />
        </Form.Item>

        <Form.Item label="Kapak Görseli">
          <Upload
            name="coverImage"
            listType="picture-card"
            fileList={fileList}
            onChange={handleChange}
            onPreview={handlePreview}
            maxCount={1}
            beforeUpload={() => false} // Prevents automatic upload
          >
            {fileList.length < 1 && (
              <div>
                <UploadOutlined />
                <div style={{ marginTop: 8 }}>Görsel Yükle</div>
              </div>
            )}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{
                display: "none",
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}
        </Form.Item>

        <Form.Item label="İçerik">
          <SunEditor
            lang={"tr"}
            height="400px"
            setDefaultStyle="font-family: arial;"
            setOptions={{
              imageGalleryUrl:
                "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
              buttonList: [
                [
                  "formatBlock",
                  "paragraphStyle",
                  "blockquote",
                  "bold",
                  "underline",
                  "italic",
                  "fontColor",
                  "hiliteColor",
                  "textStyle",
                  "removeFormat",
                  "outdent",
                  "indent",
                  "align",
                  "list",
                  "lineHeight",
                  "table",
                  "link",
                  "image",
                  "imageGallery",
                  "fullScreen",
                  "showBlocks",
                  "codeView",
                  "preview",
                ],
              ],
            }}
            onChange={(content) => setContent(content)}
          />
        </Form.Item>

        <Form.Item name="active" valuePropName="checked" initialValue={false}>
          <Checkbox>Sitede Göster</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginTop: "20px" }}>
            Paylaş
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Editor;
