import AddCityComp from '@/components/workplace/AddCityComp'
import AddClinicComp from '@/components/workplace/AddClinicComp'
import React from 'react'

const page = () => {
  return (
    <div className='container'>
        <AddCityComp />
        <hr />
        <AddClinicComp />
    </div>
  )
}

export default page