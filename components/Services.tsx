import React from "react";
import Image from "next/image";

function Services() {
  return (
    <section className=" pb-5">
      <h2 className="font-bold text-cyan-800 text-center text-3xl pb-5">
        Services
      </h2>
      <div className="flex px-6 pb-4 text-md ">
        <p>
          Paragraph explaining your services! Filler text. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Laudantium perferendis dolorem
          tempore quibusdam aspernatur iste, quisquam fuga accusantium fugiat,
          culpa maiores id laborum ab voluptatibus odio sit cupiditate error
          consectetur.
        </p>
      </div>
      <div className="flex flex-col w-screen px-2 gap-3 h-full">
        {/* Service 1 */}
        <div className="basis-1/3 bg-cyan-900 flex justify-center items-center w-full mb-2 rounded-2xl shadow-lg shadow-gray-500 relative">
          {/* Text section 1*/}
          <div className="basis-7/12 flex flex-col justify-center -mr-12 z-10 text-white p-2 rounded-xl h-80">
            <h2 className="font-bold tracking-wide text-left text-xl pb-3">
              Cleaning
            </h2>
            <p className="break-words text-gray-200 text-xs">
              We offer great pool cleaning. We guarantee to get your pool
              sparkling.
            </p>
          </div>
          {/* Image section 1 */}
          <div className="basis-7/12 h-full opacity-50 ml-5">
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

        <div className="basis-1/3 bg-cyan-900 flex flex-row-reverse items-center justify-center w-full mb-2 rounded-xl shadow-lg shadow-gray-500">
          {/* Text section 2*/}
          <div className="basis-7/12 flex flex-col justify-center items-end -ml-10 z-10 text-white pr-2">
            <h2 className="font-bold tracking-wide text-xl">Maintenance</h2>
            <p className="text-left text-xs">
              We offer great pool maintenance. We guarantee to get your pool
              sparkling.
            </p>
          </div>
          {/* Image section 2 */}
          <div className="basis-6/12 h-full rounded-xl opacity-50 mr-2">
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

        <div className="basis-1/3 bg-cyan-900 flex items-center justify-center w-full rounded-xl shadow-lg shadow-gray-500">
          {/* Text section 3*/}
          <div className="basis-7/12 flex flex-col justify-center items-start -mr-10 z-10 text-white ">
            <h2 className="font-bold tracking-wide text-left text-xl pl-2">
              Handyman
            </h2>
            <p className="text-xs pl-2">
              We offer great handyman solutions. We guarantee to repair things
            </p>
          </div>
          {/* Image section 4 */}
          <div className="basis-7/12 h-full w-full opacity-50 ml-4">
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
