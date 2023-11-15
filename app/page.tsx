import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-screen mx-auto">
      <NavBar />
      <Hero />
    </main>
  );
}
