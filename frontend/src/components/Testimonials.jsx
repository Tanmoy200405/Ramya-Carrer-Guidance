import React from "react";
import { testimonialsData } from "../Data/SuccessData";
const Testimonials = () => {
  return (
    <div className="w-full py-16 bg-white flex justify-center overflow-hidden">

      <div className="w-[95%] max-w-6xl">

        {/* 🔹 HEADING */}
        <div className="text-center mb-12 animate-fadeUp">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary-green)]">
            What Our Students Say
          </h1>
          <p className="text-gray-500 mt-2">
            Real experiences from students we’ve guided.
          </p>
        </div>

        {/* 🔹 SLIDER */}
        <div className="flex gap-6 w-max animate-scroll">

          {[...testimonialsData, ...testimonialsData].map((item, index) => (
            <div
              key={index}
              className="bg-[#fdfce8] border border-gray-200 rounded-xl p-6 w-[280px] flex flex-col gap-4 shadow-sm
                         transition duration-300 hover:shadow-lg hover:-translate-y-2"
            >

              {/* PROFILE */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">{item.course}</p>
                </div>
              </div>

              {/* MESSAGE */}
              <p className="text-sm text-gray-600 leading-relaxed">
                “{item.message}”
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Testimonials;