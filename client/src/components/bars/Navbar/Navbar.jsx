"use client";
import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button} from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  PictureOutlined,
  MailOutlined,
} from "@ant-design/icons";

const items = [
  { key: "anasayfa", icon: <HomeOutlined />, label: <a href="/">Ana Sayfa</a> },
  { key: "hakkimizda", icon: <InfoCircleOutlined />, label: <a href="/hakkimizda">Hakkımızda</a> },
  { key: "galeri", icon: <PictureOutlined />, label: <a href="/galeri">Galeri</a> },
  { key: "iletisim", icon: <MailOutlined />, label:<a href="/iletisim">İletişim</a>},
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
      if (window.innerWidth < 820) {
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
            <Menu
              mode="horizontal"
              items={items}
            />
          </div>
        )}
        <div className="menuIcon">
          <Button className="btnRandevu" type="primary">
            Randevu Al
          </Button>
          {isMobile && <MenuOutlined onClick={showDrawer} />}
        </div>
        <Drawer
          width={300}
          placement="left"
          onClose={onClose}
          open={visible}
          styles={{
            body: {
              padding: 0,
            },
            header: {
              border: 0,
            },
          }}
        >
          <Menu width={"100%"} mode="vertical" items={items} />
        </Drawer>
      </div>
  );
};

export default Navbar;
