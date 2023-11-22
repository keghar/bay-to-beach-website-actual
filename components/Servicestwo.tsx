import Image from "next/image";

const actions = [
  {
    title: "Cleaning",
    href: "#",
    p: "We clean your pool",
    imgSrc: "/poolcleaning.jpeg",
    altText: "image",
  },
  {
    title: "Maintenance",
    href: "#",
    p: "we maintain your pool",
    imgSrc: "/poolcleaning.jpeg",
    altText: "image",
  },
  {
    title: "Handyman Services",
    href: "#",
    p: "we repair stuff",
    imgSrc: "/poolcleaning.jpeg",
    altText: "image",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Servicestwo() {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-1 md:grid-cols-3 sm:gap-px sm:divide-y-0 w-screen h-full">
      {actions.map((action) => (
        <div className="bg-white">
          <div className=" relative">
            <Image src={action.imgSrc} alt={action.altText} fill className="" />
          </div>

          <div className="mt-8">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">{action.p}</p>
          </div>
          <span
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"></span>
        </div>
      ))}
    </div>
  );
}
