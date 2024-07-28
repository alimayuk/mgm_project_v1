"use client";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";
import React from "react";

const BreadCrumbComp = () => {
  const pathname = usePathname();
  let pathSnippets = pathname.split("/").filter((i) => i);

  // Eğer 'bloglar' varsa, ondan sonrasını çıkart
  const blogIndex = pathSnippets.indexOf("bloglar");
  if (blogIndex !== -1) {
    pathSnippets = pathSnippets.slice(0, blogIndex + 1);
  }

  const nameMap = {
    "randevu-al": "Randevu Al",
    "iletisim": "İletişim",
  };

  const breadcrumbItems = [
    {
      href: "/",
      title: (
        <>
          <span>Anasayfa</span>
        </>
      ),
    },
    ...pathSnippets.map((snippet, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      const name =
        nameMap[snippet] || snippet.charAt(0).toUpperCase() + snippet.slice(1);
      return {
        href: url,
        title: <span>{name}</span>,
        key: url,
      };
    }),
  ];

  return (
    <div className="container">
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

export default BreadCrumbComp;
