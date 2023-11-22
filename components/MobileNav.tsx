import React from "react";
import Image from "next/image";
import Link from "next/link";

function MobileNav() {
  return (
    <div className="relative h-screen flex flex-col justify-between items-center gap-10 pb-72 z-30">
      <ul className="basis-1/2 flex flex-col justify-around items-center bg-white gap-10 mt-10 mb-5">
        <li className="text-center text-2xl text-cyan-800 uppercase font-bold tracking-wider shadow-md shadow-gray-200 rounded-full py-2 px-4 w-full">
          Services
        </li>
        <li className="text-center text-2xl text-cyan-800 uppercase font-bold tracking-wider shadow-md shadow-gray-200 rounded-full py-2 px-4 w-full">
          Reviews
        </li>
        <Link href="#contact">
          <li className="text-center text-2xl text-cyan-800 uppercase font-bold tracking-wider shadow-md shadow-gray-200 rounded-full  py-2 px-4 w-full">
            Contact
          </li>
        </Link>
      </ul>
      <div className="basis-1/4 relative">
        <Image src="/baytobeach-logo.svg" alt="logo" height={300} width={300} />
      </div>
    </div>
  );
}

export default MobileNav;
