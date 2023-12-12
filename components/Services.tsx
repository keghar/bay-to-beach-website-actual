"use client";
import Image from "next/image";
import WidthWrapper from "./WidthWrapper";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Pool Ceaning",
    message:
      "Our high-quality regularly scheduled pool cleaning service is guaranteed to keep your  swimming pool looking and functioning its best. From removing leaves and debris to cleaning filters, we will keep your pool sparkling",
    href: "#contact",
    price: "",
    imageSrc: "/poolcleaning.jpeg",
    imageAlt: "pool cleaning image.",
  },
  {
    id: 2,
    name: "Pool Maintenance",
    message:
      "We oversee every aspect of your pool's maintenance. This includes balancing chemicals, salt cell cleaning, replacing filters, addressing valve changes, and handling minor pump issues. Our range of maintenance services ensures your pool remains in optimal working condition.",
    href: "#contact",
    price: "",
    imageSrc: "/poolmaintenace.jpeg",
    imageAlt: "pool cleaning image.",
  },
  {
    id: 3,
    name: "Handyman Services",
    message:
      "If you have any household needs, whether indoors or outdoors, we've got you covered to create your ideal oasis. Our wide range of handyman services includes painting, flooring, pressure washing, decks and fences.",
    href: "#contact",
    price: "",
    imageSrc: "/handyman.jpeg",
    imageAlt: "pool cleaning image.",
  },
  // {
  //   id: 4,
  //   name: "Other Services",
  //   message: "If you have any needs around your house inside or out we can ",
  //   href: "#",
  //   price: "",
  //   imageSrc: "/poolcleaning.jpeg",
  //   imageAlt: "pool cleaning image.",
  // },
  // More products...
];

export default function Example() {
  return (
    <section className="flex flex-col w-full md:mt-14 lg:mt-24">
      <WidthWrapper>
        <h2 className="font-bold text-cyan-800 text-center text-3xl md:text-5xl mb-10 lg:text-6xl md:mb-14 lg:mb-24">
          Services
        </h2>
        <div className="flex justify-center mx-auto items-center px-5 md:px-14 pb-5  max-w-3xl lg:max-w-7xl lg:text-3xl">
          <p className="text-md text-left md:text-xl lg:text-3xl text-cyan-800">
            Our services are designed to elevate your pool and home. From
            meticulous pool cleaning and maintenance to a spectrum of handyman
            offerings, we cater to your pool and home maintenance needs. In
            addition we utilize SKIMMER pool service software, diligently
            recording all work performed and chemicals added, ensuring
            transparent maintenance logs. Rest assured, our team is CPO
            certified, fully licensed, and insured, prioritizing your peace of
            mind as we enhance your oasis.
          </p>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-screen-2xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-8 gap-y-8 md:grid-cols-3 sm:gap-y-10 lg:grid-cols-3 xl:px-0">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="relative h-48 lg:h-72 xl:h-80 aspect-h-4 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="object-cover object-center"
                      fill
                    />
                    <div
                      className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                      aria-hidden="true">
                      <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-cyan-800 backdrop-blur backdrop-filter ">
                        Contact us for <br /> <span>{product.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between space-x-8 text-base text-cyan-800 md:text-lg lg:text-xl font-bold">
                    <h3>
                      <Link href="#contact">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 text-cyan-800 font-semibold font-2xl"
                        />
                        {product.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    {product.message}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center gap-10 items-center px-4 md:gap-20">
              <div>
                <Image
                  src="/cpo-logo.png"
                  alt="CPO Certification"
                  height={200}
                  width={200}
                />
              </div>
              <div>
                <Image
                  src="/skimmer-logo.svg"
                  alt="Skimmer pool app"
                  height={150}
                  width={250}
                />
              </div>
            </div>
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
}
