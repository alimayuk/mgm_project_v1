"use client";
import {
  useGetBlogDetailQuery,
  useUpdateBlogMutation,
} from "@/lib/services/blog";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Upload, Image, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import SunEditor from "suneditor-react";

const Page = () => {
  const { slug } = useParams();
  const router = useRouter();
  const { data, error, isLoading } = useGetBlogDetailQuery(slug);
  const [updateBlog] = useUpdateBlogMutation();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [content, setContent] = useState("");
  const [form] = Form.useForm();

  useEffect(() => {
    if (data) {
      const existingBlog = data.blog;
      form.setFieldsValue({
        title: existingBlog.title,
        active: existingBlog.active,
      });
      setContent(existingBlog.content || "");

      if (existingBlog.image_path) {
        setFileList([
          {
            uid: "-1",
            name: "current_image.png",
            status: "done",
            url: `http://localhost:8000/${existingBlog.image_path}`, // Düzeltildi
          },
        ]);
        setPreviewImage(`http://localhost:8000/${existingBlog.image_path}`);
      }
    }
  }, [data, form]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blog details</div>;

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
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("content", content);
      if (fileList.length && fileList[0].originFileObj) {
        formData.append("image", fileList[0].originFileObj);
      }
      formData.append("active", values.active);

      // Güncelleme işlemi
      await updateBlog({ updatedBlog: formData, slug }).unwrap();
      message.success("Blog başarıyla güncellendi!");
      router.push("/isletme/blog-listele");
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } catch (error) {
      message.error("Blog güncellenirken bir hata oluştu.");
    }
  };

  return (
    <div className="container">
      <h1>Blog Güncelle</h1>
      <Form
        form={form}
        name="update-blog"
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
              wrapperStyle={{ display: "none" }}
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
                  "fullScreen",
                  "showBlocks",
                  "codeView",
                  "preview",
                ],
              ],
            }}
            onChange={(content) => setContent(content)}
            setContents={content}
          />
        </Form.Item>

        <Form.Item name="active" valuePropName="checked">
          <Checkbox>Sitede Göster</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: "20px" }}
          >
            Güncelle
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Page;
