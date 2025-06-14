import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";
import SearchInput from "./searchInput";


const Navbar = () => {
  return (
    <div className="sticky top-0 w-screen z-50 h-25 bg-[#D9EAFD]/80 backdrop-blur-md flex items-center px-8 sm:px-[7%]">
      <Link href="/" className="absolute aspect-square w-14 md:w-18">
        <Image
          src={logo}
          fill
          alt="logo"
          className="object-contain rounded-full hover:scale-105 duration-300 transition-all"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <SearchInput />      
    </div>
  );
};

export default Navbar;
