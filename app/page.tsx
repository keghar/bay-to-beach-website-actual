import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-screen mx-auto outline-none">
      <NavBar />

      <div className="flex justify-center mt-14">
        <Image
          src="/baytobeach-logo.jpeg"
          alt="logo"
          height={200}
          width={200}
        />
      </div>

      <Hero />
      <Services />
    </main>
  );
}
