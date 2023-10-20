import React from 'react'
import {BsInstagram, BsFacebook} from 'react-icons/bs'

const Footer = () => {

  const anio = new Date().getFullYear();

  return (
    <div className='bg-primario'>
      <div className='contenedor py-3 text-white font-poppins flex flex-col md:flex-row justify-center md:justify-between items-center gap-4'>      
        <h1 className='text-lg'>Copyright &copy; Remates Sanchez {anio}</h1>
        <div className='flex items-center gap-3'>
          <h1>Desarrollado por <span className='font-bold'>aallois</span></h1>
          <BsInstagram size={20} className='text-white cursor-pointer hover:text-red-500 ease-out duration-300'/>
          <BsFacebook size={20} className='text-white cursor-pointer hover:text-blue-500 ease-out duration-300'/>
        </div>      
      </div>
    </div>

  )
}

export default Footer