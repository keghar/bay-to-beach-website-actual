"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

function ImageSlider() {
  const slides = [
    {
      src: "/poolimg.jpeg",
    },
    {
      src: "/poolcleaning.jpeg",
    },
    {
      src: "/handyman.jpeg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full">
      <div className="relative flex flex-col justify-between p-2 items-center">
        {/* Left arrow */}
        <div className=" text-2xl rounded-full p-2 cursor-pointer">
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            role="button"
            tabIndex={0}
            className="text-gray-600 outline-gray-300 text-xl"
            onClick={prevSlide}
          />
        </div>

        <div className=" h-56">
          <Image
            src={slides[currentIndex].src}
            fill
            alt="logo"
            sizes="100vw"
            className="content-contain"
          />
        </div>
        {/* right arrow */}
        <div className="text-2xl text-gray-200 rounded-full p-2 cursor-pointer">
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            role="button"
            tabIndex={0}
            className="text-gray-600 outline-gray-300 text-xl"
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
