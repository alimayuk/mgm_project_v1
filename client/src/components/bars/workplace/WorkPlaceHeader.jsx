"use client";
import React, { useState } from "react";
import { Drawer} from "antd";
import MenuComp from "./MenuComp";
import { BarsOutlined } from "@ant-design/icons";

const Navbar = ({ children }) => {
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
    padding: "50px 0 0 0",
  };
  return (
    <div style={containerStyle}>
      {children}
      <div
        style={{
          position: "absolute",
          top: 5,
          right: 10,
          fontSize: "30px",
          cursor: "pointer",
          padding: "15px",
          userSelect: "none",
        }}
      >
        <BarsOutlined onClick={showDrawer} />
      </div>
      <Drawer
        title="Dişçim Admin"
        placement="left"
        onClose={onClose}
        open={open}
        width={300}
        styles={{
          header: {},
          body: {
            padding: 0,
          },
        }}
      >
        <MenuComp />
      </Drawer>
    </div>
  );
};
export default Navbar;
