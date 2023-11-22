import React from "react";
import Image from "next/image";

function MobileNav() {
  return (
    <div className="relative h-screen flex flex-col justify-between items-center pb-72 z-30">
      <ul className="basis-1/2 flex flex-col justify-around items-center bg-white gap-5 mb-5">
        <li className="text-center text-2xl text-cyan-800 uppercase font-bold tracking-wider shadow-md shadow-gray-200 rounded-full  py-2 px-4 w-full">
          About
        </li>
        <li className="text-center text-2xl text-cyan-800 uppercase font-bold tracking-wider shadow-md shadow-gray-200 rounded-full py-2 px-4 w-full">
          Services
        </li>
        <li className="text-center text-2xl text-cyan-800 uppercase font-bold tracking-wider shadow-md shadow-gray-200 rounded-full py-2 px-4 w-full">
          Reviews
        </li>
      </ul>
      <div className="basis-1/4 relative">
        <Image
          src="/baytobeach-logo.jpeg"
          alt="logo"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}

export default MobileNav;
