import Image from "next/image";
import React from "react";

function LogoHeader() {
  return (
    <div className="relative h-48 flex justify-center items-center mt-20 lg:hidden">
      <Image
        src="/baytobeach-logo.svg"
        alt="logo"
        fill
        className="h-full object-contain"
      />
    </div>
  );
}

export default LogoHeader;
