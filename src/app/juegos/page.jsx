import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'

const Juegos = () => {
  return (
    <div className='contenedor'>
      <div className='border-2 p-2 mb-6 w-full rounded-lg flex items-center gap-2'>
        <BiSearchAlt size={25} />
        <input type="text" placeholder="Buscar Juego..." className='font-josefin outline-none' />
      </div>

      <div className='flex gap-2 font-josefin border-2'>
        <div className='hidden lg:flex w-[20%] p-2 flex-col'>
          <p className='border-b-2 border-naranja mb-3 uppercase'>Filtros</p>

          <p>Estado:</p>
          <select className='font-josefin p-2 mb-3'>
            <option value="T">Todos</option>
            <option value="U">Nuevos</option>
            <option value="N">Usados</option>
          </select>

          <p>Categoría:</p>
          <select className='font-josefin p-2 mb-3'>
            <option value="T">Todos</option>
            <option value="U">Familiares</option>
            <option value="N">Euros</option>
            <option value="N">War Games</option>
          </select>

          <p>Precio:</p>
          <div className='mb-3  flex flex-row items-center w-full'>
            <input type="text" placeholder="Desde" className='border-2 rounded-lg font-josefin p-2 flex-1 outline-none w-[45%]' />
            <p className='w-[10%] text-center'>-</p>
            <input type="text" placeholder="Hasta" className='border-2 rounded-lg font-josefin p-2 flex-1 outline-none w-[45%]' />
          </div>
          <button className='bg-naranja rounded-md text-white mx-2 py-2 font-bold text-lg hover:scale-105 hover:shadow-lg hover:cursor-pointer ease-out duration-300'>Aplicar</button>
        </div>

        <div className='bg-red-200 flex-1 h-full'>Lista de juegos</div>
      </div>
    </div>
  )
}

export default Juegos