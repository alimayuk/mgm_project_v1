"use client";
import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button} from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  PictureOutlined,
  MailOutlined,
  BookOutlined
} from "@ant-design/icons";
import LocaleSwitcher from "../langueswitcher/LocaleSwitcher";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const t = useTranslations("Navbar");

  const items = [
    { key: "anasayfa", icon: <HomeOutlined />, label: <a href="/">{t("home")}</a> },
    { key: "hakkimizda", icon: <InfoCircleOutlined />, label: <a href="/hakkimizda">{t("about")}</a> },
    { key: "bloglar", icon: <BookOutlined />, label: <a href="/bloglar">{t("blogs")}</a> },
    { key: "galeri", icon: <PictureOutlined />, label: <a href="/galeri">{t("gallery")}</a> },
    { key: "iletisim", icon: <MailOutlined />, label:<a href="/iletisim">{t("contact")}</a>},
  ];

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
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
        <a href="/"><img src="/logo.svg" alt="" className="logo" /></a>
        {!isMobile && (
          <div className="desktopMenu">
            <Menu
              mode="horizontal"
              items={items}
              style={{ 
                display:"block"
               }}
            />
          </div>
        )}
        <div className="menuIcon" style={{ display:"flex", alignItems:"center" }}>
          <Button href="/randevu-al" className="btnRandevu" type="primary">
            Randevu Al
          </Button>
          {!isMobile && <LocaleSwitcher />}
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
          <Menu width={"100%"} mode="vertical" items={items}  />
          <div style={{ margin: "20px 0 0 10px" }}>
          <LocaleSwitcher />
          </div>
        </Drawer>
      </div>
  );
};

export default Navbar;
