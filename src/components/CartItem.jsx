import React from "react";
import { BsFillTrash3Fill } from 'react-icons/bs'

const CartItem = () => {
  return (
    <div className="border flex items-center p-2 rounded-lg gap-3 w-full">
      {/* Acá es la imagen del juego */}
      <div className="bg-green-300 h-[100px] w-[120px]"></div>

      <div className="h-full w-full flex flex-col justify-center">
        <p className="text-lg font-bold">Nombre del juego</p>
        <p className="text-md italic text-gray-500">Precio</p>
        <p className="text-lg italic text-gray-500">Cantidad</p>
      </div>

      {/* Botones de eliminar y editar */}
      <div className="">
        <BsFillTrash3Fill
          size={25}
          className="text-red-500 hover:cursor-pointer hover:scale-110 ease-out duration-300"
        />
      </div>
    </div>
  );
};

export default CartItem;
