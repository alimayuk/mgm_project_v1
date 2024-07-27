"use client"
import BlogComp from '@/components/public/BlogComp';
import CarouselComp from '@/components/public/CarouselComp';
import ServiceCard from '@/components/public/ServiceComp';
import StatisticComp from '@/components/public/StatisticComp';
import TeamComp from '@/components/public/TeamComp';
import TimelineComp from '@/components/public/Timeline';
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


