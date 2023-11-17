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

      <div className="flex justify-center mt-16 lg:hidden">
        <Image
          src="/baytobeach-logo.svg"
          alt="logo"
          height={300}
          width={300}
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
