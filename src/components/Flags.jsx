'use client'

import Image from 'next/image'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cambiarIdioma } from '../redux/slices/languageSlice'

const Flags = () => {
  const dispatch = useDispatch()

  const { spanish } = useSelector(state => state.language)  

  const handleLanguage = () => {
    dispatch(cambiarIdioma())
  }

  return (
    <div onClick={handleLanguage} className='w-[30px] h-[30px] rounded-full overflow-hidden border-2 border-white bg-red-200 hover:cursor-pointer hover:border-naranja duration-300'>
      <Image src={spanish ? '/images/spain.png' : '/images/usa.png'} alt='Spain Flag' width={30} height={30} className='object-cover w-full h-full' />
    </div>
  )
}

export default Flags