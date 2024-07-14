import React from "react";
import { Row, Col, Flex } from "antd";
import styles from "../styles.module.css";
import LoginForm from "@/components/auth/LoginForm";

const Page = () => {
  return (
    <Flex gap="large" className={styles.wrapper} >
      <Col xs={0} md={12} className={styles.imageSide}></Col>
      <Flex xs={0} md={12} className={styles.formSide}>
        <Flex className={styles.formContainer}>
          <LoginForm />
        </Flex>
      </Flex>
    </Flex>
  );  
};

export default Page;
