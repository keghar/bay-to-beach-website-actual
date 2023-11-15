"use client";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-center items-center w-screen mx-auto py-5">
      <div className=" flex justify-center items-start w-full">
        <div
          className="bg-gradient-to-b from-white from-0% 
        via-transparent via-20% to-transparent ">
          <div
            className="bg-gradient-to-t from-white from-0% 
        via-transparent via-30% to-transparent">
            <Image
              className="w-screen -z-10 relative "
              src="/pool-img.jpeg"
              height={300}
              width={300}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" bg-opacity-60 flex justify-center items-end -mb-8 z-10">
        <p className=" align-middle text-md md:text-lg lg:text-xl max-w-prose tracking-wider leading-relaxed text-justify px-5">
          Your premier choice for pristine pool care in Gulf Shores, AL. Dive
          into unparalleled expertise and crystal-clear waters with our
          dedicated team committed to keeping your oasis sparkling year-round."
        </p>
      </div>
    </section>
  );
}

export default Hero;
