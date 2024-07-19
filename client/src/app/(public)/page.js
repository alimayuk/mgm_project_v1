"use client"
import BlogComp from '@/components/BlogComp';
import CarouselComp from '@/components/CarouselComp';
import ServiceCard from '@/components/ServiceComp';
import StatisticComp from '@/components/StatisticComp';
import TeamComp from '@/components/TeamComp';
import TimelineComp from '@/components/Timeline';
import { Flex } from 'antd';
import React from 'react';
const page = () => {
  return (
    <Flex vertical gap={60} className='container'>
    <CarouselComp />
    <ServiceCard />
    <StatisticComp />
    <TimelineComp />
    <TeamComp />
    <BlogComp />
    </Flex>
  )
}

export default page


