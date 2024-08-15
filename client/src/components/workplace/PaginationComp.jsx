"use client";
import React, { useState } from "react";
import { Badge, Card, List, Spin, message, Popconfirm } from "antd";
import TitleComp from "@/components/public/TitleComp";
import { useDeleteBlogMutation, useGetBlogsQuery } from "@/lib/services/blog";
import Link from "next/link";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Meta } = Card;

const PaginationComp = () => {
  const [deleteBlog] = useDeleteBlogMutation();
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const {
    data: response,
    isLoading,
    error,
  } = useGetBlogsQuery({
    limit,
    skip: (page - 1) * limit,
  });

  const items = response?.posts || [];
  const totalItems = response?.total || 0;
  const router = useRouter();

  const handleEditClick = (slug) => {
    router.push(`blog-guncelle/${slug}`);
  };

  const handleDeleteClick = (slug) => {
    deleteBlog(slug)
      .unwrap() 
      .then(() => {
        message.success("Blog başarıyla silindi!");
      })
      .catch((error) => {
        message.error("Blog silinirken bir hata oluştu.");
      });
  };

  return (
    <div className="container">
      <Spin spinning={isLoading}>
        <TitleComp
          title={"Blog Yazıları"}
          subText={
            "Diş sağlığı hakkında en güncel bilgiler, ipuçları ve uzman tavsiyeleri. Sağlıklı bir gülüş için bilinmesi gereken her şey burada."
          }
        />
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
          pagination={{
            onChange: (page) => {
              setPage(page);
            },
            pageSize: limit,
            total: totalItems,
            current: page,
          }}
          dataSource={items}
          renderItem={(item) => (
            <List.Item style={{ height: "100%" }}>
              <Card
                actions={[
                  <Popconfirm
                    title="Silmek istediğinize emin misiniz?"
                    onConfirm={() => handleDeleteClick(item.slug)}
                    okText="Evet"
                    cancelText="Hayır"
                  >
                    <DeleteOutlined key="delete" />
                  </Popconfirm>,
                  <EditOutlined
                    key="edit"
                    onClick={() => handleEditClick(item.slug)}
                  />,
                ]}
                style={{
                  height: "100%",
                  fontSize: "16px",
                }}
                cover={
                  item.is_new === true ? (
                    <Badge.Ribbon text="Yeni Paylaşım" color="red">
                      <img
                        alt={item.title}
                        src={`http://localhost:8000/${item.image_path}`}
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
                      src={`http://localhost:8000/${item.image_path}`}
                      style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )
                }
              >
                <Link href={`blog-guncelle/${item.slug}`}>
                  <Meta title={item.title} />
                </Link>
              </Card>
            </List.Item>
          )}
        />
      </Spin>
    </div>
  );
};

export default PaginationComp;
