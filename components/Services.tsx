import React from "react";
import Image from "next/image";
import WidthWrapper from "./WidthWrapper";

function Services() {
  return (
    <section className="flex flex-col pb-5 w-full mt-20 md:mt-48 md:mb-4">
      <WidthWrapper>
        <h2 className="font-bold text-cyan-800 text-center text-3xl mb-10">
          Services
        </h2>
        <div className="flex justify-center mx-auto items-center px-5 md:px-14 pb-3  max-w-prose">
          <p className="text-md text-justify md:text-lg lg:text-2xl">
            Paragraph explaining your services! Filler text. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Laudantium perferendis
            dolorem tempore quibusdam aspernatur iste, quisquam fuga accusantium
            fugiat, culpa maiores id laborum ab voluptatibus odio sit cupiditate
            error consectetur.
          </p>
        </div>
      </WidthWrapper>
    </section>
  );
}

export default Services;
