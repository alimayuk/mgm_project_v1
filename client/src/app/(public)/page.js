"use client"
import Navbar from '@/components/bars/Navbar/Navbar';
import CarouselComp from '@/components/CarouselComp';
import ServiceCard from '@/components/ServiceCard';
import React from 'react';
const page = () => {
  return (
    <div className='container'>
    <CarouselComp />
    <ServiceCard />
    </div>
  )
}

export default page


