import Image from "next/image";
import React from "react";

const JuegoCard = ({ juego }) => {
  return (
    <div      
      className="mt-4 bg-white shadow-lg rounded-lg border-2 border-gray-200 hover:scale-105 hover:cursor-pointer ease-out duration-300"
    >
      <Image
        className="object-cover w-full h-[200px]"
        src={juego.imagen}
        alt={juego.nombre}
        width={200}
        height={200}
      />
      <div className="mt-4">
        <p className="font-josefin font-bold text-lg text-center">
          {juego.nombre}
        </p>
        <p className="font-josefin text-sm text-center">{juego.descripcion}</p>
        <p className="font-josefin text-sm text-center">
          Precio: {juego.precio}
        </p>
      </div>
    </div>
  );
};

export default JuegoCard;
