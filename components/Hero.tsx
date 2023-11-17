"use client";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center items-center w-screen mx-auto pt-8 md:py-20 md:px-10 md:h-full md:rounded-full">
      {/* Image Mobile */}
      <div className="md:hidden md:basis-1/2 flex justify-center items-start w-full md:py-10">
        <div
          className="bg-gradient-to-b from-white from-10% 
        via-transparent via-30% to-transparent -m-10 md:bg-none">
          <div
            className="bg-gradient-to-t from-white from-20% 
        via-transparent via-30% to-transparent md:bg-none md:w-f md:-mr-4">
            <Image
              className="w-screen -z-10 relative md:w-full md:rounded-l-full md:h-full md:object-fill md:-mr-1"
              src="/pool-img.jpeg"
              alt=""
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>

      {/* Image md and lg screens */}
      <div className="hidden md:flex basis-1/2 justify-center items-start w-full md:py-10">
        <Image
          className="w-screen -z-10 relative md:w-full md:rounded-l-full md:h-full md:object-fill md:-mr-1"
          src="/pool-img.jpeg"
          alt=""
          height={300}
          width={300}
        />
      </div>

      <div className=" bg-opacity-60 flex justify-center items-end -mb-14 z-10 md:basis-1/2 md:mb-0 md:bg-cyan-800 md:h-fit md:z-0 md:py-28 md:mr-4 md:rounded-r-3xl md:-ml-2">
        <h1 className=" align-middle text-md md:text-lg lg:text-xl max-w-prose tracking-wider leading-relaxed text-justify px-5 md:text-white md:">
          Your premier choice for pristine pool care in Gulf Shores, AL. Dive
          into unparalleled expertise and crystal-clear waters with our
          dedicated team committed to keeping your oasis sparkling year-round.
        </h1>
      </div>
    </section>
  );
}

export default Hero;
