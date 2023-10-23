import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (    
    <div className='w-full h-[670px] md:h-[620px] lg:h-[600px] relative'>
      <Image src={'/images/bg.jpg'} alt='Logo GNS' width={800} height={800} quality={100}
          priority className='w-full h-full object-cover'/>
      
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-start overflow-hidden'>
        <div className='bg-black/70 w-full px-4 lg:px-28 flex flex-col gap-5 py-6'>
          <p className='font-russo text-3xl lg:text-6xl text-gray-300'>gaming<span className='text-naranja'>Night</span>Store</p>
          <p className='font-russo text-xl lg:text-[26px] text-gray-300'>¡Te damos la bienvenida a nuestro rincón de diversión y estrategia! <span className='hidden md:inline'>Aquí, encontrarás juegos de mesa, nuevos y usados.</span> </p>
        </div>
      </div>      
    </div>
    
  )
}

export default Hero 