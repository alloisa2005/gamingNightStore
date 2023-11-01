import { TbPlus } from 'react-icons/tb'
import Link from 'next/link';

const AdminItems = () => {  

  return (
    <div className='w-full md:w-[20%] border border-gray-300 px-3 py-2 flex flex-col gap-3'>
      <Link href={'/admin/juegos'} className='flex items-center gap-2 bg-naranja/90 hover:bg-naranja px-2 py-2 rounded-md ease-out duration-300 hover:shadow-md'>
        <TbPlus size={22} className='text-white'/>
        <p className='text-white font-josefin text-lg md:text-sm xl:text-lg'>Lista Juegos</p>
      </Link>

      <Link href={'/admin/nuevoJuego'} className='flex items-center gap-2 bg-naranja/90 hover:bg-naranja px-2 py-2 rounded-md ease-out duration-300 hover:shadow-md'>
        <TbPlus size={22} className='text-white'/>
        <p className='text-white font-josefin text-lg md:text-sm xl:text-lg'>Nuevo Juego</p>
      </Link>
      
      <Link href={'/admin/juegos'} className='flex items-center gap-2 bg-naranja/90 hover:bg-naranja px-2 py-2 rounded-md ease-out duration-300 hover:shadow-md'>
        <TbPlus size={22} className='text-white'/>
        <p className='text-white font-josefin text-lg md:text-sm xl:text-lg'>Lista Usuarios</p>
      </Link>

      <Link href={'/admin/juegos'} className='flex items-center gap-2 bg-naranja/90 hover:bg-naranja px-2 py-2 rounded-md ease-out duration-300 hover:shadow-md'>
        <TbPlus size={22} className='text-white'/>
        <p className='text-white font-josefin text-lg md:text-sm xl:text-lg'>Nuevo Usuario</p>
      </Link> 

      <Link href={'/admin/juegos'} className='flex items-center gap-2 bg-naranja/90 hover:bg-naranja px-2 py-2 rounded-md ease-out duration-300 hover:shadow-md'>
        <TbPlus size={22} className='text-white'/>
        <p className='text-white font-josefin text-lg md:text-sm xl:text-lg'>Ver Compras</p>
      </Link>

    </div>
  )
}

export default AdminItems