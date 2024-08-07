import GalleryUploadComp from '@/components/workplace/GalleryUploadComp'
import GalleryComp from '@/components/workplace/GalleryComp'
import React from 'react'

const page = () => {
  return (
    <div className='container'>
        <GalleryUploadComp />
        <GalleryComp />
    </div>
  )
}

export default page