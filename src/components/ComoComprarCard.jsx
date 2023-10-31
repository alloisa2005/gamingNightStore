import Image from "next/image";
import React from "react";

export const ComoComprarCard = ({foto, titulo, subTitulo, reverse=false}) => {
  return (
    <div className={`px-4 flex flex-col items-center justify-around ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} w-full my-5 bg-black/80 py-6 rounded-lg shadow-lg`}>
      <div className="my-4">
        <div className="flex justify-center items-center gap-3">
          <p className="h-4 w-4 bg-naranja animate-pulse rounded-full"></p>
          <p className="text-center font-josefin font-bold text-3xl md:text-4xl text-white">
            {titulo}
          </p>
        </div>
        <div className="w-full flex justify-center max-w-[600px] p-2">
          <p className="font-josefin text-lg md:text-2xl text-white text-center w-full">
            {subTitulo}
          </p>
        </div>
      </div>
      <div className="w-[300px] h-[300px] overflow-hidden rounded-xl">
        <Image
          src={foto}  
          alt="Como comprar"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      </div>    
  );
};
