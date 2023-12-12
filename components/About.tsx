"use client";
import React from "react";

import ImageSlider from "./ImageSlider";

function About() {
  return (
    <section className="lg:px-10 lg:-m-12">
      {/* divder */}

      <div className="flex flex-col max-w-2xl w-full mx-auto px-6 mb-20  md:max-w-screen-2xl  lg:px-8 xl:px-20 text-cyan-800">
        <h2
          id="about"
          className="font-bold text-cyan-800 text-center text-3xl md:text-5xl lg:text-6xl mb-10 md:mb-16 lg:mb-20">
          About Us
        </h2>
        <div className="flex flex-col justify-center items-center mx-auto md:flex-row-reverse w-full md:gap-10 md:px-6">
          <p className="md:basis-1/2 pb-3 md:text-xl lg:text-3xl mb-4 md:mb-0 md:text-left max-w-prose ">
            Welcome to
            <span className="text-[#01b2c4] font-bold">
              {" "}
              Bay To Beach Pools,{" "}
            </span>
            your premier partner in pristine pool care along the stunning Gulf
            Coast of Alabama. With our expert team of dedicated professionals,
            we specialize in delivering top-tier cleaning and maintenance
            services tailored to your pools unique needs. We are fully licensed
            and insured, ready to work for you.
          </p>
          <div className="md:basis-1/2 w-full">
            <ImageSlider />
          </div>
        </div>
        <div id="services"></div>
      </div>
    </section>
  );
}

export default About;
