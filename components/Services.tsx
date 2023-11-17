import React from "react";
import Image from "next/image";

function Services() {
  return (
    <section className=" pb-5">
      <h2 className="font-bold text-cyan-900 text-center text-3xl pb-5">
        Services
      </h2>
      <div className="flex flex-col w-screen px-2 gap-3 h-full">
        {/* Service 1 */}
        <div className="basis-1/3 bg-cyan-900 flex justify-center items-center w-full mb-2 rounded-2xl shadow-lg shadow-gray-500 relative">
          {/* Text section 1*/}
          <div className="basis-7/12 flex flex-col justify-center -mr-12 z-10 text-white p-2 bg-cyan-900 bg-opacity-75 rounded-xl h-80">
            <h2 className="font-bold tracking-wide text-left text-xl pb-3">
              Cleaning
            </h2>
            <p className="text-ellipsis break-words text-gray-200 ">
              We offer great pool cleaning. We garantee to get your pool
              sparkling.
            </p>
          </div>
          {/* Image section 1 */}
          <div className="basis-7/12 h-full opacity-50">
            <Image
              src="/poolcleaning.jpeg"
              width={200}
              height={200}
              alt=""
              className=" rounded-r-xl h-80"
            />
          </div>
        </div>

        {/* Service 2 */}

        <div className="basis-1/3 bg-cyan-800 flex flex-row-reverse items-center justify-center w-full mb-2 rounded-xl shadow-lg shadow-gray-500">
          {/* Text section 2*/}
          <div className="basis-7/12 flex flex-col justify-center items-center -ml-10 z-10 text-white">
            <h2 className="font-bold tracking-wide text-center text-xl">
              Maintenance
            </h2>
            <p className="break-words text-left text-xs">
              We offer great pool maintenance. We garantee to get your pool
              sparkling.
            </p>
          </div>
          {/* Image section 2 */}
          <div className="basis-7/12 h-full rounded-xl opacity-50">
            <Image
              src="/poolcleaning.jpeg"
              width={200}
              height={200}
              alt=""
              className="rounded-l-xl"
            />
          </div>
        </div>

        {/* Service 3 */}

        <div className="basis-1/3 bg-cyan-800 flex items-center justify-center w-full rounded-xl shadow-lg shadow-gray-500">
          {/* Text section 3*/}
          <div className="basis-7/12 flex flex-col justify-center items-center -mr-10 z-10 text-white">
            <h2 className="font-bold tracking-wide text-center text-xl">
              Handyman
            </h2>
            <p className="ttext-ellipsis break-words">
              We offer great handman solutions. We garantee to repair things
            </p>
          </div>
          {/* Image section 4 */}
          <div className="basis-7/12 h-full w-full opacity-50">
            <Image
              src="/poolcleaning.jpeg"
              width={200}
              height={200}
              alt=""
              className="rounded-r-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
