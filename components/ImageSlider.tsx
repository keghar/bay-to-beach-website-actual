"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/pool1.jpg",
  "/pool2.jpg",
  "/pool3.jpg",
  "/pool4.jpg",
  "/pool5.jpg",
  "/pool6.jpg",

  // Add more image URLs as needed
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full md:w-full lg:w-full h-full rounded-2xl">
      <div className="h-72 md:h-80 lg:h-96 relative w-full ">
        <Image
          src={images[currentImage]}
          alt="Pools we work on"
          fill
          className="object-cover w-full"
        />
        <button
          onClick={prevImage}
          className="absolute inset-y-0 left-0 flex items-center justify-center w-7 h-full text-gray-200 hover:bg-opacity-75 focus:outline-none">
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="absolute inset-y-0 right-0 flex items-center justify-center w-7 h-full text-gray-200 hover:bg-opacity-75 focus:outline-none">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
