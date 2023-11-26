import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LogoHeader from "@/components/LogoHeader";
import NavBar from "@/components/NavBar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Servicestwo from "@/components/Servicestwo";
import WidthWrapper from "@/components/WidthWrapper";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center outline-none">
      {/* <div className="opacity-40 -z-40">
        <Image src="/water.avif" alt="water background" fill className="" />
      </div> */}
      <NavBar />

      <LogoHeader />
      <Hero />
      <div className="relative -mt-10 mb-10">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-base font-semibold leading-6 text-gray-900">
            <Image src="/bird-l.svg" alt="bird" width={40} height={40} />
          </span>
        </div>
      </div>
      <About />

      <Servicestwo />

      <Reviews />
      <Contact />

      <Footer />
    </main>
  );
}
