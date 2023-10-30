"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const SignInButton = ({ handleNavbar, dispositivo = "desktop" }) => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div className="group relative w-full flex items-center justify-end gap-2 border-b-2 lg:border-b-0 border-slate-500 lg:border-transparent">
          <Image
            src={session.user.image}
            width={30}
            height={30}
            alt="User Image"
            onClick={() => signOut()}
            className="mb-3 w-11 h-11 object-cover rounded-full border-2 border-white hover:scale-110 hover:cursor-pointer hover:border-naranja hover:border-2 ease-out duration-300"
          />
          <div className="hidden group-hover:lg:block absolute -left-2 top-12  bg-white px-3 py-2 rounded-md w-[140px]">
            <Link
              href={"/cart"}
              className="flex items-center justify-between mb-2"
            >
              <p className="text-black text-lg hover:text-naranja hover:scale-105 hover:cursor-pointer ease-out duration-300">
                Carrito
              </p>
              <div className="flex items-center justify-center w-5 h-5 bg-red-500 rounded-full">
                <p className="text-white text-[15px]">1</p>
              </div>
            </Link>
            <p className="mb-2 text-black text-lg hover:text-naranja hover:scale-105 hover:cursor-pointer ease-out duration-300">
              Mis Compras
            </p>
            {session?.user?.isAdmin ? (
              <p className="mb-2 text-black text-lg hover:text-naranja hover:scale-105 hover:cursor-pointer ease-out duration-300">
                Administrador
              </p>
            ) : (
              <p className="mb-2 text-black text-lg hover:text-naranja hover:scale-105 hover:cursor-pointer ease-out duration-300">
                Mi Cuenta
              </p>
            )}
            <p
              onClick={() => signOut()}
              className="mb-2 text-black text-lg hover:text-naranja hover:scale-105 hover:cursor-pointer ease-out duration-300"
            >
              Cerrar Sesión
            </p>
          </div>
        </div>
      ) : (
        <Link
          href={"/signin"}
          onClick={handleNavbar}
          className="border-b-2 lg:border-b-0 border-slate-500 w-full text-right cursor-pointer hover:bg-white hover:text-naranja p-2 rounded-md ease-in duration-100"
        >
          Iniciar Sesión
        </Link>
      )}
    </>
  );
};

export default SignInButton;
