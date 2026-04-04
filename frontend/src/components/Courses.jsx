import React from "react";
import {coursesData} from "../Data/CourseData"

const Courses = () => {
  return (
    <div className="w-full py-16 bg-[#fdfce8] flex justify-center">

      <div className="w-[95%] max-w-6xl">

        {/* 🔹 HEADING */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary-green)]">
            Courses We Guide You In
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Explore popular career options with great opportunities.
          </p>
        </div>

        {/* 🔹 CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

          {coursesData.map((course) => {
            const Icon = course.icon;

            return (
              <div
                key={course.id}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm 
                           transition duration-300 hover:shadow-lg hover:-translate-y-2"
              >

                {/* ICON */}
                <div className="text-[var(--primary-green)] text-3xl mb-4">
                  <Icon />
                </div>

                {/* TITLE */}
                <h2 className="font-semibold text-lg">
                  {course.title}
                </h2>

                {/* SUBTITLE */}
                <p className="text-sm text-gray-500 mt-1">
                  {course.subtitle}
                </p>

                {/* LINK */}
                <button className="mt-3 text-[var(--primary-green)] text-sm font-medium hover:underline">
                  Learn More
                </button>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
};

export default Courses;