import Link from 'next/link'
import React from 'react'

const VisitarTienda = () => {
  return (
    <section className='bg-black/80 w-full pb-6'>    

      <div className='contenedor flex justify-center items-center'>
        <Link href={'/juegos'} 
          className='font-bold bg-naranja/90 hover:bg-naranja px-3 py-2 text-white rounded-lg text-xl font-josefin ease-out duration-300 hover:shadow-md'>
          Nuestros Juegos
        </Link>
      </div>
      
    </section>
  )
}

export default VisitarTienda