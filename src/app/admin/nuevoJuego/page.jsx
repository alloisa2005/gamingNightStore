import React from 'react'

const Juegos = () => {  

  return (
    <div>
      <h1 className='font-josefin font-bold text-xl border-b-2 border-naranja'>Nuevo Juego</h1>

      <form className='mt-3'>
        <div className='flex flex-col lg:flex-row items-center w-full gap-2'>
          <div className="flex flex-col w-full">
            <label className="select-none font-josefin text-lg">Título</label>
            <input                    
              type="text"
              placeholder="Nombre del juego"
              className="outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md"
            />
          </div>
          <div className="flex flex-col w-full h-full">
            <label className="select-none font-josefin text-lg">Categoría</label>
            <select className="bg-white h-full outline-none font-josefin text-lg border-2 px-2 py-1 rounded-md">
              <option value="Aventura" className='text-lg'>Aventura</option>
              <option value="Acción" className='text-lg'>Acción</option>
              <option value="Acción" className='text-lg'>Acción</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Juegos