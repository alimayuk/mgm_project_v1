import { Card, Col, Row, Statistic } from "antd";
import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
const page = () => {
  return (
    <div className="container">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card bordered={false}>
            <Statistic
              title="Randevu Sayısı"
              value={1128}
              valueStyle={{
                color: "#3f8600",
              }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card bordered={false}>
            <Statistic
              title="İptal Edilen Randevular"
              value={118}
              valueStyle={{
                color: "#3f8600",
              }}
              prefix={<ArrowUpOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card bordered={false}>
            <Statistic
              title="Bekleyen Tedavi Sayısı"
              value={128}
              valueStyle={{
                color: "#3f8600",
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default page;
