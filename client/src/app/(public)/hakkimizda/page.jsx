import AboutUsCard from "@/components/AboutUsCard";
import CollapseComp from "@/components/CollapseComp";
import ServiceComp from "@/components/ServiceComp";
import TeamComp from "@/components/TeamComp";
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
