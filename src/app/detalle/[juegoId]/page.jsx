import ImageDescription from '@/components/ImageDescription';
import Image from 'next/image';
import React from 'react'

const getJuego = async (juegoId) => {
  const response = await fetch(`http://localhost:3000/api/juegos/${juegoId}`);
  const data = await response.json();
  return data;
}

const DetalleJuego = async ({ params }) => {

  const { juegoId } = params;
  const juego = await getJuego(juegoId);
  //console.log(juego)

  return (
    <div className='w-full'>
      <div className='w-full h-[220px] md:h-[260px] lg:h-[265px] relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80'></div>
        <div className='w-full absolute left-0 bottom-5'>
          <div className='w-full max-w-[1350px] mx-auto px-4 '>
            <p className='text-white text-5xl md:text-6xl lg:text-7xl font-russo tracking-wider'>{juego.nombre}</p>
          </div>
        </div>
        <Image src={juego.poster} alt={juego.nombre} width={500} height={200} priority className='w-full h-full object-cover' />
      </div>

      <h1 className='contenedor mt-3 titulo'>Descripción</h1>
      <div className='contenedor my-4 font-josefin flex flex-col lg:flex-row justify-between gap-4'>
        <div className='flex-1'>
          <p className='text-lg'>{juego.description}</p>                  
        </div>

        <div className='w-full lg:w-[40%] grid grid-cols-2 gap-4'>          
          <ImageDescription sourceImg={juego.image1} nombre={juego.nombre} />
          <ImageDescription sourceImg={juego.image2} nombre={juego.nombre} />
          <ImageDescription sourceImg={juego.image3} nombre={juego.nombre} />
          <ImageDescription sourceImg={juego.image4} nombre={juego.nombre} />
        </div>

      </div>
    </div>
  )
}

export default DetalleJuego