import React from 'react'

const pageNotFound = () => {
  return (
    <div className='bg-violet-100 w-full h-screen flex flex-col
            justify-center items-center'>
        <h1 className='font-extrabold text-6xl tracking-wide text-gray-500' >404</h1>
        <h1 className='font-bold text-2xl text-gray-500' >Page Not Found</h1>
        <h1 className='font-semibold text-xl text-gray-500' >The resource requested could not be found</h1>
    </div>
  )
}

export default pageNotFound