import Image from 'next/image'
import React from 'react'
import { BsArrowDown } from 'react-icons/bs'

const Hero = () => {
  return (    
    <div className='w-full h-screen'>
      <Image src={'/images/bg.jpg'} alt='Logo GNS' width={800} height={800} quality={100}
          priority className='w-full h-full object-cover'/>
      
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-start overflow-hidden'>
        <div className='bg-black/70 w-full px-4 lg:px-28 flex flex-col gap-5 py-6'>
          <p className='font-russo text-3xl lg:text-6xl text-gray-300'>gaming<span className='text-naranja'>Night</span>Store</p>
          <p className='font-russo text-xl lg:text-[26px] text-gray-300'>¡Te damos la bienvenida a nuestro rincón de diversión y estrategia! <span className='hidden md:inline'>Aquí, encontrarás juegos de mesa, nuevos y usados.</span> </p>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 w-full h-[60px] flex items-center justify-center'>
        <BsArrowDown size={30} className='text-white animate-bounce' />
      </div>
    </div>
    
  )
}

export default Hero 