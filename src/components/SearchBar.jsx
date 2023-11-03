import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = () => {
  return (
    <div className='mt-4 w-full mx-auto'>
      <div className='bg-gray-200 text-black w-full mx-auto p-2 border rounded-lg flex items-center justify-between gap-2 '>
        <input type='text' className='bg-gray-200 w-full outline-none font-josefin text-[16px] md:text-lg' placeholder='Buscar por nombre...' />
        <AiOutlineSearch size={25} className='text-gray-500 hover:cursor-pointer hover:text-gray-900 ease-out duration-300' />
      </div>      
    </div>
  )
}

export default SearchBar