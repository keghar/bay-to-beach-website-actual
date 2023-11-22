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
      <Servicestwo />

      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
