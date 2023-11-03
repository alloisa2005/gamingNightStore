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
  console.log(juego)

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

      <div className='contenedor mt-3'>
        <h1 className='titulo'>Descripción</h1>
      </div>
    </div>
  )
}

export default DetalleJuego