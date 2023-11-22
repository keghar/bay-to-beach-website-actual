import Image from "next/image";
import WidthWrapper from "./WidthWrapper";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Pool Ceaning",
    message:
      "We garantee to get your pool sparkling clean by removing leaves, cleaning filters and cleaning your deck",
    href: "#contact",
    price: "",
    imageSrc: "/poolcleaning.jpeg",
    imageAlt: "pool cleaning image.",
  },
  {
    id: 2,
    name: "Pool Maintenance",
    message:
      "We maintain every aspect of your pool from maintaining chemical levals to repaiing any issues you have to keep your pool in working order so you dont have to think about it.",
    href: "#contact",
    price: "",
    imageSrc: "/poolmaintenace.jpeg",
    imageAlt: "pool cleaning image.",
  },
  {
    id: 3,
    name: "Handyman Services",
    message:
      "If you have any needs around your house inside or out we can take care of those to get your oasis as you like it",
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
    <section className="flex flex-col pb-5 w-full md:-mt-24 md:mb-4 lg:mb-8">
      <WidthWrapper>
        <h2 className="font-bold text-cyan-800 text-center text-3xl md:text-5xl pb-5 lg:text-6xl">
          Services
        </h2>
        <div className="flex justify-center mx-auto items-center px-5 md:px-14 pb-3  max-w-prose lg:text-3xl">
          <p className="text-md">
            Paragraph explaining your services! Filler text. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Laudantium perferendis
            dolorem tempore quibusdam aspernatur iste, quisquam fuga accusantium
            fugiat, culpa maiores id laborum ab voluptatibus odio sit cupiditate
            error consectetur.
          </p>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3 sm:gap-y-10 lg:grid-cols-3">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="relative h-48 aspect-h-4 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="object-cover object-center"
                      fill
                    />
                    <div
                      className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                      aria-hidden="true">
                      <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter ">
                        Contact us for <br /> <span>{product.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900 md:text-md lg:text-lg">
                    <h3>
                      <Link href="#contact">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p>{product.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
}
