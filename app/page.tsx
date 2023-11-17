import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-screen mx-auto outline-none">
      {/* <div className="opacity-40 -z-40">
        <Image src="/water.avif" alt="water background" fill className="" />
      </div> */}
      <NavBar />

      <div className="relative h-64 md:h-96 flex justify-center mt-16 m- lg:hidden">
        <Image
          src="/baytobeach-logo.svg"
          alt="logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=""
        />
      </div>

      <Hero />
      <Services />
      <Reviews />
      <Footer />
    </main>
  );
}
