'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const ImageDescription = ({sourceImg, nombre}) => {

  const [fullScreen, setFullScreen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('');

  const handleFullScreen = () => {
    setFullScreen(!fullScreen)
    setSelectedImage(sourceImg)
  };

  return (
    <>
      <div onClick={handleFullScreen} className='w-full h-[220px] overflow-hidden rounded-md hover:scale-105 hover:cursor-pointer grayscale hover:grayscale-0 hover:shadow-md ease-out duration-300'>
        <Image src={sourceImg ? sourceImg : '/images/noImage2.jpg'} alt={`Image ${nombre}-1`} width={300} height={120} priority className='w-full h-full object-cover'/>
      </div>

      {fullScreen && (
        <div onClick={handleFullScreen} className='fixed top-0 left-0 w-full h-full bg-black/80 z-50 flex justify-center items-center'>
          <div className='w-[90%] h-[90%] relative'>
            <Image src={sourceImg ? sourceImg : '/images/noImage2.jpg'} alt={`Image ${nombre}`} layout='fill' objectFit='contain' priority className='w-full h-full object-cover'/>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageDescription