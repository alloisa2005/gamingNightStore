"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import SignInButton from "./SignInButton";
import Flags from "./Flags";
import { useSelector } from "react-redux";

const Navbar = () => {  

  const { spanish } = useSelector((state) => state.language);

  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="w-full h-[65px] bg-black/80">
      <nav className="max-w-[1350px] h-full mx-auto px-4 flex justify-between items-center">
        <Link href={"/"} className="z-20">
          <p className="font-russo text-white text-4xl">
            g<span className="text-naranja">N</span>s
          </p>
        </Link>

        <ul className="hidden lg:flex items-center gap-6 text-white font-josefin text-xl font-bold z-20">
          <Link
            href={"/"}
            className="cursor-pointer hover:bg-white hover:text-naranja p-2 rounded-md ease-in duration-100"
          >
            {spanish ? "Inicio" : "Home"}
          </Link>
          <Link
            href={"/juegos"}
            className="cursor-pointer hover:bg-white hover:text-naranja p-2 rounded-md ease-in duration-100"
          >
            {spanish ? "Juegos" : "Games"}
          </Link>

          <Link
            href={"/proximamente"}
            className="cursor-pointer hover:bg-white hover:text-naranja p-2 rounded-md ease-in duration-100"
          >
            {spanish ? "Próximamente" : "Coming Soon"}
          </Link>

          <SignInButton />

          <Flags />
        </ul>

        <div className="lg:hidden cursor-pointer z-20" onClick={handleNavbar}>
          {navbar ? (
            <CgClose size={28} className="text-white" />
          ) : (
            <RiMenu4Line size={28} className="text-white" />
          )}
        </div>

        <div
          className={
            navbar
              ? "z-10 lg:hidden fixed top-0 right-0 w-full md:w-[60%] h-full bg-black ease-in duration-500"
              : "z-10 lg:hidden fixed top-0 right-[-100%] w-full md:w-[70%] h-full bg-black ease-in duration-500"
          }
        >
          <ul className="mt-28 w-full h-full flex flex-col gap-8 text-white font-poppins text-2xl items-end px-6">
            <Link
              href={"/"}
              onClick={handleNavbar}
              className="border-b-2 border-slate-500 w-full text-right pb-1 cursor-pointer"
            >
              Inicio
            </Link>
            <Link
              href={"/juegos"}
              onClick={handleNavbar}
              className="border-b-2 border-slate-500 w-full text-right pb-1 cursor-pointer"
            >
              Juegos
            </Link>    

            <Link
              href={"/proximamente"}
              onClick={handleNavbar}
              className="border-b-2 border-slate-500 w-full text-right pb-1 cursor-pointer"
            >
              Próximamente
            </Link> 

            <SignInButton dispositivo='mobile' handleNavbar={handleNavbar}/> 

            <h1 className="border-b-2 border-slate-500 w-full text-right pb-1 cursor-pointer">Contáctenos</h1>           
            <div className="w-full flex items-center justify-center gap-16">
              <BsWhatsapp size={35}/>
              <BsFacebook size={35}/>
              <BsInstagram size={35}/>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
