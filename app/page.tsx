import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-screen mx-auto outline-none">
      <NavBar />

      <div className="relative h-72 md:h-96 flex justify-center mt-16 -mb-8 lg:hidden">
        <Image
          src="/baytobeach-logo.svg"
          alt="logo"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* <div className="hidden md:flex justify-center mt-16 -mb-14">
        <Image
          src="/baytobeach-logo.svg"
          alt="logo"
          height={400}
          width={400}
          className="rotate-5"
        />
      </div> */}

      <Hero />
      <Services />
      <Reviews />
      <Footer />
    </main>
  );
}
