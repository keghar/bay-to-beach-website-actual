"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoHeader from "@/components/LogoHeader";
import NavBar from "@/components/NavBar";
import Reviews from "@/components/Reviews";

import Services from "@/components/Services";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      id="top"
      className="flex flex-col justify-center outline-none overflow-hidden">
      {/* <div className="opacity-40 -z-40">
        <Image src="/water.avif" alt="water background" fill className="" />
      </div> */}
      <NavBar />

      <LogoHeader />
      <Hero />

      {/* <div className="flex flex-col max-w-2xl mx-auto text-center justify-center mb-10">
        <h2 className="font-bold text-cyan-800 text-center text-xl md:text-2xl lg:text-3xl mb-10 md:mb-16 lg:mb-20"></h2>
        <div className="grid grid-cols-4 gap-">
          <span>Gulf Shores</span>
          <span>Orange Beach</span>
          <span>Fort Morgan</span>
          <span>Foley</span>
        </div>
      </div> */}
      <div id="about"></div>
      <div className="relative mb-10 md:-mt-20 md:mb-16 lg:-mt-28 lg:mb-24">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-base font-semibold leading-6 text-gray-900">
            <Image src="/bird-l.svg" alt="bird" width={40} height={40} />
          </span>
        </div>
      </div>
      <section id="" className="mt-2">
        <About />
      </section>

      <Services />

      <Reviews />

      <Contact />

      <div className="flex flex-col justify-center items-center text-cyan-800 text-xl uppercase mt-20 gap-10">
        <h4>Proud members of</h4>
        <Link href="https://www.southbaldwinchamber.com/">
          <Image
            src="/sbcoc-logo.jpeg"
            alt="South Baldwin Chamber Of Commerce"
            height={150}
            width={250}
          />
        </Link>
      </div>

      <Footer />
    </main>
  );
}
