import React from 'react'

const Juegos = () => {
  return (
    <div className='contenedor'>
      <input type="text" placeholder="Buscar Juego..." className='font-josefin border-2 p-2 mb-2 w-full rounded-lg' />

      <div className='flex items-center gap-2 font-josefin'>
        <div className='border-2 w-[20%] p-2'>Filtros</div>

        <div className='border-2 flex-1 p-2'>Lista de juegos</div>
      </div>
    </div>
  )
}

export default Juegos