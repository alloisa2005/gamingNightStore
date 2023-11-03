import { separadorMiles } from "@/utils/separadorMiles"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineHeart } from "react-icons/ai"
import { BsCartPlus } from "react-icons/bs"

const getJuegos = async () => {
  const res = await fetch('http://localhost:3000/api/juegos?query=orderNombre')
  const data = await res.json()
  return data
}

const Juegos = async () => {  

  const juegos = await getJuegos();  

  return (
    <div className="grid grid-cols-5 gap-3 ">
      {
        juegos.map(juego => (          
          <div key={juego._id} className='relative w-full h-[200px] border hover:shadow-md hover:border-naranja rounded-md ease-out duration-300 p-2'>
            <div className="w-full h-[70%]">
              <Link href={'/'}>
                <Image src={juego.boxImage} alt={juego.nombre} width={100} height={80} className='w-full h-full object-contain' />
              </Link>
            </div>
            <div className='hover:cursor-pointer absolute top-1 right-1 bg-white border border-gray-400 p-2 rounded-full w-8 h-8 flex items-center justify-center'>
              <AiOutlineHeart size={20} className='hover:text-red-500 hover:scale-110 ease-out duration-300'/>
            </div>
            <div className="p-2">
              <p>{juego.nombre}</p>
              <div className="flex items-center justify-between">
                <p className="text-gray-500">Precio ($): <span className="text-black">{separadorMiles(juego.price)}</span></p>
                <BsCartPlus size={20} className='text-red-600 hover:cursor-pointer hover:scale-110 ease-out duration-300' />
              </div>
            </div>
          </div>
        ))
      }      
    </div>
  )
}

export default Juegos