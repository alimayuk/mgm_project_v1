"use client"
import BlogComp from '@/components/BlogComp';
import CarouselComp from '@/components/CarouselComp';
import ServiceCard from '@/components/ServiceComp';
import StatisticComp from '@/components/StatisticComp';
import React from 'react';
const page = () => {
  return (
    <div className='container'>
    <CarouselComp />
    <ServiceCard />
    <StatisticComp />
    <BlogComp />
    </div>
  )
}

export default page


