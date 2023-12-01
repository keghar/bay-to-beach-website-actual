"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import WidthWrapper from "./WidthWrapper";

function Reviews() {
  return (
    <section
      id=""
      className="flex flex-col justify-center items-center md:max-w-2xl lg:max-w-none w-full mx-auto mt-10 md:mt-24 lg:mt-32">
      <div className="flex">
        <h2 className="font-bold text-cyan-900 text-center text-3xl mb-10 md:mb-16 lg:mb-20 md:text-5xl lg:text-6xl">
          Reviews
        </h2>
      </div>
      <WidthWrapper>
        <div className="flex flex-col justify-center lg:flex-row gap-3 md:gap-10 lg:gap-8 px-4 md:px-6">
          {/* Review 1 */}

          <div className="flex flex-col bg-cyan-800 bg-opacity-10 p-3 rounded-xl shadow-md shadow-gray-400 gap">
            <div className="self-center flex gap-1 text-cyan-900">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="italic text-cyan-900 tracking-wide">
              Bay To Beach Pools saved the day! We were scrambling to get our
              pool ready for a big family gathering, and their team swooped in
              with efficiency and expertise. Not only did they clean the pool
              thoroughly, but they also went the extra mile by providing
              maintenance tips. Super friendly and professional. Highly
              recommend their services!
            </p>
          </div>

          {/* Review 2 */}

          <div className="flex flex-col bg-cyan-900 bg-opacity-10 p-3 rounded-xl shadow-md shadow-gray-400">
            <div className="self-center flex gap-1 text-cyan-900">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="italic text-cyan-900 tracking-wide">
              Bay To Beach Pools saved the day! We were scrambling to get our
              pool ready for a big family gathering, and their team swooped in
              with efficiency and expertise. Not only did they clean the pool
              thoroughly, but they also went the extra mile by providing
              maintenance tips. Super friendly and professional. Highly
              recommend their services!
            </p>
          </div>
          {/* Review 3 */}
          <div className="flex flex-col bg-cyan-800 bg-opacity-10 p-3 rounded-xl shadow-md shadow-gray-400">
            <div className="self-center flex gap-1 text-cyan-900">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className="italic text-cyan-900 tracking-wide">
              Bay To Beach Pools saved the day! We were scrambling to get our
              pool ready for a big family gathering, and their team swooped in
              with efficiency and expertise. Not only did they clean the pool
              thoroughly, but they also went the extra mile by providing
              maintenance tips. Super friendly and professional. Highly
              recommend their services!
            </p>
          </div>
        </div>

        <Link href="/">
          <div className="flex justify-center items-center bg-none border border-[#01b2c4] p-2 rounded-full w-36 h-12 mx-auto mt-4 md:mt-6 ">
            <span className="text-center text-md uppercase tracking-wide">
              See more
            </span>
            <div id="contact"></div>
          </div>
        </Link>
      </WidthWrapper>
    </section>
  );
}

export default Reviews;
