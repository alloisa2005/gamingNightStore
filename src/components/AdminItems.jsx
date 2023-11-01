import React from 'react'
import { TbPlus } from 'react-icons/tb'
import Link from 'next/link';

const AdminItems = () => {
  return (
    <div className='w-full md:w-[20%] border border-naranja px-3 py-2 flex flex-col gap-3'>
      <Link href={'/'} className='flex items-center gap-2 bg-naranja/90 hover:bg-naranja px-2 py-2 rounded-md ease-out duration-300 hover:shadow-md'>
        <TbPlus size={22} className='text-white'/>
        <p className='text-white font-josefin text-lg'>Agregar Juego</p>
      </Link>
      
      <Link href={'/'} className='flex items-center gap-2 bg-naranja/90 hover:bg-naranja px-2 py-2 rounded-md ease-out duration-300 hover:shadow-md'>
        <TbPlus size={22} className='text-white'/>
        <p className='text-white font-josefin text-lg'>Agregar Usuario</p>
      </Link>

      <Link href={'/'} className='flex items-center gap-2 bg-naranja/90 hover:bg-naranja px-2 py-2 rounded-md ease-out duration-300 hover:shadow-md'>
        <TbPlus size={22} className='text-white'/>
        <p className='text-white font-josefin text-lg'>Ver Compras</p>
      </Link>

    </div>
  )
}

export default AdminItems