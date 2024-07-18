"use client"
import BlogComp from '@/components/BlogComp';
import CarouselComp from '@/components/CarouselComp';
import ServiceCard from '@/components/ServiceComp';
import StatisticComp from '@/components/StatisticComp';
import TeamComp from '@/components/TeamComp';
import TimelineComp from '@/components/Timeline';
import React from 'react';
const page = () => {
  return (
    <div className='container'>
    <CarouselComp />
    <ServiceCard />
    <StatisticComp />
    <BlogComp />
    <TimelineComp />
    <TeamComp />
    </div>
  )
}

export default page


