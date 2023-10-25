"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const SignInButton = ({dispositivo='desktop'}) => {
  const { data: session, status } = useSession();
  return (
    <>
      {session ? (
        <Image
          src={session.user.image}
          width={40}
          height={40}
          alt="User Image"
          onClick={() => signOut()}
          className="rounded-full border-2 border-white hover:scale-125 hover:cursor-pointer hover:border-naranja hover:border-2 ease-out duration-300"
        />
      ) : (
        <Link
          href={"/signin"}
          className="cursor-pointer hover:bg-white hover:text-naranja p-2 rounded-md ease-in duration-100"
        >
          Iniciar Sesión
        </Link>
      )}
    </>
  );
};

export default SignInButton;
