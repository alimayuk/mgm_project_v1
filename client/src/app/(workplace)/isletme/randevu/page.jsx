"use client"
import RezervationPage from '@/components/rezervations/RezervationPage'
import classNames from 'classnames'
import React from 'react'

const page = () => {
  return (
    <div className={classNames("container")}>
      <RezervationPage />
    </div>
  )
}

export default page