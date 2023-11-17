import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Reviews() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 p-2">
      <div>
        <h2 className="font-bold text-cyan-900 text-center text-3xl pb-5 mt-10">
          Reviews
        </h2>
      </div>

      <div className="flex flex-col gap-3 p-4">
        {/* Review 1 */}

        <div className="flex flex-col bg-cyan-800 bg-opacity-10 p-3 rounded-xl shadow-md shadow-gray-400 gap-2">
          <div className="self-center flex gap-1 text-cyan-900">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p className="italic text-cyan-900 tracking-wide">
            Bay To Beach Pools saved the day! We were scrambling to get our pool
            ready for a big family gathering, and their team swooped in with
            efficiency and expertise. Not only did they clean the pool
            thoroughly, but they also went the extra mile by providing
            maintenance tips. Super friendly and professional. Highly recommend
            their services!
          </p>
        </div>

        {/* Review 2 */}

        <div className="flex flex-col bg-cyan-900 bg-opacity-10 p-3 rounded-xl shadow-md shadow-gray-400">
          <div className="self-center flex gap-1 text-cyan-900">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p className="italic text-cyan-900 tracking-wide">
            Bay To Beach Pools saved the day! We were scrambling to get our pool
            ready for a big family gathering, and their team swooped in with
            efficiency and expertise. Not only did they clean the pool
            thoroughly, but they also went the extra mile by providing
            maintenance tips. Super friendly and professional. Highly recommend
            their services!
          </p>
        </div>
        {/* Review 3 */}
        <div className="flex flex-col bg-cyan-800 bg-opacity-10 p-3 rounded-xl shadow-md shadow-gray-400">
          <div className="self-center flex gap-1 text-cyan-900">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p className="italic text-cyan-900 tracking-wide">
            Bay To Beach Pools saved the day! We were scrambling to get our pool
            ready for a big family gathering, and their team swooped in with
            efficiency and expertise. Not only did they clean the pool
            thoroughly, but they also went the extra mile by providing
            maintenance tips. Super friendly and professional. Highly recommend
            their services!
          </p>
        </div>
      </div>
      <div>
        <Link href="/">
          <div className="flex justify-center items-center bg-none border border-[#01b2c4] p-2 rounded-full w-36 h-12">
            <span className="text-center text-md uppercase tracking-wide">
              See more
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Reviews;
