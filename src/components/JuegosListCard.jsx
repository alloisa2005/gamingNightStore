
import Image from 'next/image'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEditAlt } from 'react-icons/bi'

const JuegosListCard = ({ juego }) => {
  return (
    <div className='p-2 border h-[90px] flex gap-4 items-center justify-between rounded-lg shadow-md'>
      <div className='w-[100px] h-[80px]'>
        <Image src={juego.boxImage} alt={juego.nombre} width={400} height={200} priority className='w-full h-full object-contain' />
      </div>
      <div className='w-full flex justify-between pr-3'>
        <p className='font-josefin text-xl italic font-bold'>{juego.nombre}</p>            
        <div className='flex items-center gap-4'>
          <BiEditAlt size={25} className='text-black/80 hover:cursor-pointer hover:scale-105 hover:text-naranja ease-out duration-300' />
          <AiOutlineDelete size={25} className='text-black/80 hover:cursor-pointer hover:scale-105 hover:text-naranja ease-out duration-300' />
        </div> 
      </div>
    </div>
  )
}

export default JuegosListCard