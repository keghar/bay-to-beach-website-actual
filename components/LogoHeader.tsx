import Image from "next/image";
import React from "react";

function LogoHeader() {
  return (
    <div className="relative h-56 flex justify-center items-center mt-20 lg:hidden">
      <Image
        src="/btb-logo.png"
        alt="logo"
        fill
        className="h-full object-contain"
        priority
      />
    </div>
  );
}

export default LogoHeader;
