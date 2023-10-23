import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import JuegoCard from './JuegoCard'

const FilaJuegos = ({titulo, juegos}) => {
  return (
    <div className='contenedor pt-3'>
      <h1 className='font-josefin font-bold italic text-xl md:text-2xl uppercase border-b-2 border-b-naranja'>{titulo}</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
          juegos.map(juego => (
            <JuegoCard key={juego.id} juego={juego} />
          ))
        }        
        </div>

        <div className='flex w-full justify-center mt-5 text-white '>
          <div className='w-full text-center md:w-[40%] lg:w-[25%] bg-naranja hover:scale-110 hover:shadow-lg hover:cursor-pointer ease-out duration-300 px-3 py-2 rounded-md'>
            <Link href={'/juegos'} className='font-josefin text-xl font-bold'>Ver más</Link>
          </div>
        </div>

    </div>
  )
}

export default FilaJuegos