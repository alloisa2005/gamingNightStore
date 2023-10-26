"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const SignInButton = ({handleNavbar, dispositivo='desktop'}) => {
  const { data: session, status } = useSession();

  return (
    <>
      {session ? (
        <div className="w-full border-b-2 lg:border-b-0 flex items-center justify-end border-slate-500 lg:border-transparent">          
          <Image
            src={session.user.image}
            width={30}
            height={30}
            alt="User Image"
            onClick={() => signOut()}
            className="mb-3 w-11 h-11 object-cover rounded-full border-2 border-white hover:scale-110 hover:cursor-pointer hover:border-naranja hover:border-2 ease-out duration-300"
          />
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
