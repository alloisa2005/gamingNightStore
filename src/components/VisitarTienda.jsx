import Link from 'next/link'
import React from 'react'

const VisitarTienda = () => {
  return (
    <div className='contenedor flex justify-center items-center py-2 my-2'>
      <Link href={'/juegos'} 
        className='font-bold bg-naranja/90 hover:bg-naranja px-3 py-2 text-white rounded-lg text-xl font-josefin ease-out duration-300 hover:shadow-md'>
        Nuestros Juegos
      </Link>
    </div>
  )
}

export default VisitarTienda