"use client";
import React, { useState } from "react";
import { Button, Drawer, theme } from "antd";
import MenuComp from "./Menu";
import { BarsOutlined } from '@ant-design/icons'

const Navbar = ({ children }) => {

  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const containerStyle = {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    maxWidth: "100%",
    wordWrap: "break-word",
    padding:"45px 0 0 0",
    background: token.colorFillAlter,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div style={containerStyle}>
      {children}
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 20,
          fontSize: "30px",
          cursor: "pointer",
          padding: "15px",
          userSelect: "none",
        }}
      >
      <BarsOutlined onClick={showDrawer}/>
      </div>
      <Drawer
        title="Dişçim Admin"
        placement="left"
        onClose={onClose}
        open={open}
        width={300}
        styles={{ 
          header:{

          },
          body:{
            padding: 0,
          }
         }}
      >
        <MenuComp />
      </Drawer>
    </div>
  );
};
export default Navbar;
