import AboutUsCard from "@/components/public/AboutUsCard";
import CollapseComp from "@/components/public/CollapseComp";
import ServiceComp from "@/components/public/ServiceComp";
import TeamComp from "@/components/public/TeamComp";
import { Flex } from "antd";
import React from "react";
const page = () => {
  return (
    <Flex vertical gap={60} className="container">
      <AboutUsCard />
      <TeamComp />
      <CollapseComp />
      <ServiceComp />
    </Flex>
  );
};

export default page;
