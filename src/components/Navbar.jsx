'use client';

import Link from 'next/link'
import React, { useState } from 'react'
import { RiMenu4Line } from 'react-icons/ri'
import { CgClose }  from 'react-icons/cg';
import { navbarLinks } from '@/utils/navbarLinks';
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image';

const Navbar = () => {
  const { data: session, status } = useSession();
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  }

  return (
    <div className='w-full h-[65px] bg-black/80'>
      <nav className='max-w-[1350px] h-full mx-auto px-4 flex justify-between items-center'>
        
        <Link href={'/'} className='z-20'>
          <p className='font-russo text-white text-4xl'>g<span className='text-naranja'>N</span>s</p>
        </Link>        

        <ul className='hidden lg:flex items-center gap-6 text-white font-josefin text-xl font-bold z-20'>
          <Link href={'/'} className='cursor-pointer hover:bg-white hover:text-naranja p-2 rounded-md ease-in duration-100'>Inicio</Link>
          <Link href={'/juegos'} className='cursor-pointer hover:bg-white hover:text-naranja p-2 rounded-md ease-in duration-100'>Juegos</Link>
          {
            session ? (
              <Image src={session.user.image} width={30} height={30} alt='User Image'/>
            ):(
              <Link href={'/signin'} className='cursor-pointer hover:bg-white hover:text-naranja p-2 rounded-md ease-in duration-100'>Iniciar Sesión</Link>
            )
          }          
        </ul>
        {
          session && (
            <Image onClick={() => signOut()} src={session.user.image} alt='Logo' width={50} height={50} />
          )
        }

        <div className='lg:hidden cursor-pointer z-20' onClick={handleNavbar}>
          {navbar ? <CgClose size={28} className='text-white'/> : <RiMenu4Line size={28} className='text-white'/> }
        </div>        

        <div className={navbar ? 'z-10 lg:hidden fixed top-0 right-0 w-full md:w-[60%] h-full bg-black ease-in duration-500' : 'z-10 lg:hidden fixed top-0 right-[-100%] w-full md:w-[70%] h-full bg-black ease-in duration-500'}>        
          <ul className='mt-28 w-full h-full flex flex-col gap-8 text-white font-poppins text-2xl items-end px-6'>
            <Link href={'/'} onClick={handleNavbar} className='border-b-2 border-slate-500 w-full text-right pb-1 cursor-pointer'>Inicio</Link>
            <Link href={'/juegos'} onClick={handleNavbar} className='border-b-2 border-slate-500 w-full text-right pb-1 cursor-pointer'>Juegos</Link>
            <Link href={'/signin'} onClick={handleNavbar} className='border-b-2 border-slate-500 w-full text-right pb-1 cursor-pointer'>Iniciar Sesión</Link>
          </ul>
        </div>
      </nav>      
    </div>
  )
}

export default Navbar