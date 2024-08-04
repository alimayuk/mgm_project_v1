"use client";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    key: "1",
    icon: <MailOutlined />,
    label: <a href="/isletme">Anasayfa</a>,
  },
  {
    key: "2",
    icon: <AppstoreOutlined />,
    label: <a href="/isletme/randevu">Randevular</a>,
  },
  {
    key: "321",
    icon: <AppstoreOutlined />,
    label: <a href="/isletme/randevu-istekleri">Randevu İstekleri</a>,
  },
  {
    key: "3",
    icon: <SettingOutlined />,
    label: "Blog Yazıları",
    children: [
      {
        key: "31",
        label: <a href="/isletme/blog-olustur">Blog Oluştur</a>,
      },
      {
        key: "32",
        label: <a href="/isletme/blog-listele">Blogları Listele</a>,
      },
    ],
  },
  {
    key: "4",
    icon: <AppstoreOutlined />,
    label: <a href="/isletme/galeri">Galeri</a>,
  },
  {
    key: "5",
    icon: <AppstoreOutlined />,
    label: <a href="/isletme/calisanlar">Çalışanlar</a>,
  },,
  {
    key: "6",
    icon: <AppstoreOutlined />,
    label: <a href="/isletme/ayarlar">Ayarlar</a>,
  },
];
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);
const MenuComp = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <Menu
      mode="inline"
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{
        width: "100%",
        userSelect: "none",
      }}
      items={items}
    />
  );
};
export default MenuComp;
