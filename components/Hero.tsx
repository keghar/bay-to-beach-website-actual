"use client";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="flex flex-col-reverse justify-center items-center w-full mx-auto mt-4 md:pt-4 md:pb-4 md:px-10 lg:mt-10 lg:mx-0 lg:pb-">
      {/* Image Mobile and md */}
      <div className=" flex justify-center items-start w-full md:py-10 lg:py-0">
        <div
          className="bg-gradient-to-b from-white from-10% 
        via-transparent via-30% to-transparent -m-10 lg:bg-gradient-to-b lg:from-20% 
        lg:via-transparent lg:via-40% lg:to-transparent">
          <div
            className="bg-gradient-to-t from-white from-20% 
        via-transparent via-30% to-transparent ">
            <Image
              className="w-screen max-w-screen-sm lg:max-w-screen-xl -z-10 relative "
              src="/pool-img.jpeg"
              alt=""
              height={300}
              width={300}
              priority
            />
          </div>
        </div>
      </div>

      <div className="bg-opacity-60 flex flex-col justify-center items-center  -mb-14 z-10 md:-mb-48 md:rounded-r-3xl md:max-w-prose lg:max-w-screen-lg">
        <h1 className="text-md md:text-4xl tracking-wider md:tracking-widest leading-relaxed text-center px-5 md:px-4  font-semi-bold text-2xl font-serif  lg:text-5xl lg:mt-16">
          Looking for a reliable
          <br />
          <span className="text-[#01b2c4] font-bold">Pool Care Company</span>
          <br />
          in Gulf Shores, AL?
        </h1>
        {/* <div className="flex justify-center items-center rounded-full bg-white text-sm w-50 text-center px-3 py-2">
          <span>Contact us for a quote</span>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
