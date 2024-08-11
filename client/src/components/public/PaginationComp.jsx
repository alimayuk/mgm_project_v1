"use client";
import React, { useState} from "react";
import { Badge, Card, List, Spin } from "antd";
import TitleComp from "@/components/public/TitleComp";
import { useGetBlogsQuery } from "@/lib/services/blog";

const { Meta } = Card;

const PaginationComp = () => {
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
          renderItem={(item, index) => (
            <List.Item style={{ height: "100%" }}>
              <Card
                key={index}
                hoverable
                style={{
                  height: "100%",
                  fontSize: "16px",
                }}
                cover={
                  item.is_new ? (
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
                      src={item.image_path}
                      style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  )
                }
              >
                <Meta title={item.title} description={item.content} />
              </Card>
            </List.Item>
          )}
        />
      </Spin>
    </div>
  );
};

export default PaginationComp;