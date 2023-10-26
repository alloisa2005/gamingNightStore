import React from 'react'

const Cart = () => {
  return (
    <div className='contenedor'>
      <p className='font-josefin text-3xl w-full border-b-2 border-b-naranja'>Mi Carrito</p>

      <div className='mt-3 w-full flex gap-2'>
        <div className='w-[70%] bg-red-300 p-2'>sa</div>
        <div className='flex-1 bg-red-600 p-2'>asas</div>
      </div>
    </div>
  )
}

export default Cart