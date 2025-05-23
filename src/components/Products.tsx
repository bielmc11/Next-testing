'use client'
import React from 'react'

export const Products = () => {
  const onClick = () => {
    console.log('clicked')
  }

  return (
    <div className='w-full h-screen text-black bg-fuchsia-200'>
      <button onClick={() => onClick()} className='hover:bg-fuchsia-900'>Products</button>
    </div>
  )
}
