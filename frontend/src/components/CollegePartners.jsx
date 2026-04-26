import React, { useEffect, useRef, useState } from "react";
import { collegeData } from "../Data/CollegeData";

const CollegePartners = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 } // Start when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full py-16 bg-white overflow-hidden">
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
        <div className={`flex w-max gap-6 hover:[animation-play-state:paused] ${isInView ? 'animate-scroll' : ''}`}>
          {[...collegeData, ...collegeData, ...collegeData, ...collegeData].map((college, index) => (
            <a
              href={college.officialSite}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="flex items-center gap-4 px-6 py-5 bg-white border border-gray-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] min-w-[320px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group cursor-pointer"
            >
              <div className="h-18 w-18 flex-shrink-0 flex items-center justify-center p-2 bg-gray-50/50 rounded-xl group-hover:bg-white transition-colors duration-500">
                <img
                  src={college.logo}
                  alt={college.name}
                  className="h-full w-full object-contain transition-all duration-500 scale-100"
                />
              </div>
              <div className="flex flex-col overflow-hidden">
                <p className="text-[14px] font-bold text-[var(--primary)] leading-snug line-clamp-2 mb-1">
                  {college.name}
                </p>
                <div className="flex items-center gap-1.5 text-gray-400">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-[11px] font-medium tracking-tight">
                    {college.location}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegePartners;