import React from "react";
import { Row, Col, Flex } from "antd";
import styles from "../styles.module.css";
import LoginForm from "@/components/auth/LoginForm";

const Page = () => {
  return (
    <Row gutter={[16, 16]} style={{ minHeight: "100vh", maxWidth: "100%" }}>
      <Col xs={0} md={12} className={styles.imageSide}></Col>
      <Col xs={24} md={12} >
        <Flex
          style={{ width: "100%", height: "100%" }}
          align="center"
          justify="center"
        >
          <LoginForm />
        </Flex>
      </Col>
    </Row>
  );
};

export default Page;
