import React from "react";
import { collegeData } from "../Data/CollegeData";

const CollegePartners = () => {
  return (
    <div className="w-full py-16 bg-white overflow-hidden">
      {/* 🔹 HEADING */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary)] text-center">
          Our Partner Colleges
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base text-center">
          We have tie-ups with top colleges across India.
        </p>
      </div>

      {/* 🔹 SLIDER */}
      <div className="relative w-full flex overflow-hidden">
        {/* We double the list inside a flex container that animates completely */}
        <div className="flex w-max gap-6 animate-scroll hover:[animation-play-state:paused]">
          {[...collegeData, ...collegeData, ...collegeData, ...collegeData].map((college, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-4 bg-white border border-gray-200 rounded-xl shadow-sm min-w-[220px] hover:shadow-md transition"
            >
              <img
                src={college.collegeLogo}
                alt={college.collegeName}
                className="h-10 w-10 object-contain"
              />
              <p className="text-sm font-medium text-gray-700 whitespace-nowrap">
                {college.collegeName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegePartners;