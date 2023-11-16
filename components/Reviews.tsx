import React from "react";

function Reviews() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 p-2">
      <div>
        <h2 className="font-bold text-cyan-900 text-center text-3xl pb-5 mt-10">
          Reviews
        </h2>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-col">
          <div>*****</div>
          <p className="text-italic">
            Bay To Beach Pools saved the day! We were scrambling to get our pool
            ready for a big family gathering, and their team swooped in with
            efficiency and expertise. Not only did they clean the pool
            thoroughly, but they also went the extra mile by providing
            maintenance tips. Super friendly and professional. Highly recommend
            their services!
          </p>
        </div>
        <div>
          {" "}
          <p className="text-italic">
            Bay To Beach Pools saved the day! We were scrambling to get our pool
            ready for a big family gathering, and their team swooped in with
            efficiency and expertise. Not only did they clean the pool
            thoroughly, but they also went the extra mile by providing
            maintenance tips. Super friendly and professional. Highly recommend
            their services!
          </p>
        </div>
        <div>
          {" "}
          <p className="text-italic">
            Bay To Beach Pools saved the day! We were scrambling to get our pool
            ready for a big family gathering, and their team swooped in with
            efficiency and expertise. Not only did they clean the pool
            thoroughly, but they also went the extra mile by providing
            maintenance tips. Super friendly and professional. Highly recommend
            their services!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
