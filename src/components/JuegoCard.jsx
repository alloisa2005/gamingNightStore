import Image from "next/image";
import React from "react";

const JuegoCard = ({ juego }) => {
  return (
    <div      
      className="overflow-hidden mt-4 bg-white shadow-lg rounded-lg border-2 border-gray-200 hover:scale-105 hover:cursor-pointer ease-out duration-300"
    >
      <Image
        className="object-cover w-full h-[200px]"
        src={juego.poster}
        alt={juego.nombre}
        width={200}
        height={200}
      />
      <div className="mt-2 p-2">
        <p className="font-josefin font-bold text-lg">
          {juego.nombre}
        </p>        
        <p className="font-josefin text-sm text-gray-600">
          Precio ($): <span className="text-xl font-josefin font-bold text-naranja">{juego.price}</span> 
        </p>
      </div>
    </div>
  );
};

export default JuegoCard;
