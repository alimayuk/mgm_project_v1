"use client";
import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  SolutionOutlined,
  MailOutlined,
} from "@ant-design/icons";

const items = [
  { key: "home", icon: <HomeOutlined />, label: "Ana Sayfa" },
  { key: "about", icon: <InfoCircleOutlined />, label: "Hakkımızda" },
  { key: "services", icon: <SolutionOutlined />, label: "Hizmetler" },
  { key: "contact", icon: <MailOutlined />, label: "İletişim" },
];


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setVisible(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <img src="logo.svg" alt="" className="logo" />
      
      {!isMobile && (
        <div className="desktopMenu">
          <Menu mode="horizontal" items={items} />
        </div>
      )}
      <div className="menuIcon">
        <Button className="btnRandevu" type="primary">Randevu</Button>
        {isMobile && <MenuOutlined onClick={showDrawer} />}
      </div>
      <Drawer width={300} placement="left" onClose={onClose} open={visible} styles={{ body:{
        padding: 0,
      }, header:{
        border: 0,
      } }}>
        <Menu width={"100%"} mode="vertical" items={items} />
      </Drawer>
    </div>
  );
};

export default Navbar;
