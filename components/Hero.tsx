"use client";
import Image from "next/image";
import React from "react";
import poolImg from "./../public/poolimg.jpeg";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center w-screen h-screen mx-auto p-10 mt-10 md:p4 md:mt-0">
      <div className="flex justify-center basis-1/2 pt-10">
        <Image
          className="rounded-xl shadow-lg shadow-slate-400"
          src={poolImg}
          alt=""
        />
      </div>
      <div className="basis-1/2 flex justify-center items-center p-4">
        <p className="text-md md:text-lg lg:text-xl max-w-prose tracking-wider">
          Your premier choice for pristine pool care in Gulf Shores, AL. Dive
          into unparalleled expertise and crystal-clear waters with our
          dedicated team committed to keeping your oasis sparkling year-round."
        </p>
      </div>
    </section>
  );
}

export default Hero;
