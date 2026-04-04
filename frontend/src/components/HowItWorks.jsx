import React from "react";
import { IoArrowForward, IoArrowDown } from "react-icons/io5";
import { howItWorksData } from "../Data/HowItWorksData";

const HowItWorks = () => {
  return (
    <div className="w-full py-16 bg-[#fdfce8] flex justify-center">

      <div className="bg-white rounded-2xl shadow-md px-6 sm:px-10 py-12 w-[95%] max-w-6xl">

        {/* HEADING */}
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-[var(--primary-green)] mb-12">
          How It Works – Simple & Easy
        </h1>

        {/* 📱 MOBILE (VERTICAL) */}
        <div className="flex flex-col items-center gap-8 md:hidden">

          {howItWorksData.map((step, index) => {
            const Icon = step.icon;

            return (
              <React.Fragment key={step.id}>

                <div className="flex flex-col items-center text-center">

                  <div className="bg-[var(--primary-green)] text-white p-4 rounded-xl text-2xl shadow-md">
                    <Icon />
                  </div>

                  <h2 className="mt-3 font-semibold">{step.title}</h2>
                  <p className="font-medium">{step.heading}</p>
                  <span className="text-sm text-gray-500">{step.desc}</span>
                </div>

                {index !== howItWorksData.length - 1 && (
                  <IoArrowDown className="text-2xl text-gray-400" />
                )}

              </React.Fragment>
            );
          })}
        </div>

        {/* 💻 DESKTOP (FIXED ALIGNMENT) */}
        <div className="hidden md:block">

          {/* 🔥 ICON ROW (ARROWS PERFECTLY CENTERED) */}
          <div className="flex items-center justify-between mb-6">

            {howItWorksData.map((step, index) => {
              const Icon = step.icon;

              return (
                <React.Fragment key={step.id}>

                  {/* ICON */}
                  <div className="flex justify-center w-[200px]">
                    <div className="bg-[var(--primary-green)] text-white p-4 rounded-xl text-2xl shadow-md">
                      <Icon />
                    </div>
                  </div>

                  {/* ARROW */}
                  {index !== howItWorksData.length - 1 && (
                    <div className="flex items-center justify-center w-[80px]">
                      <IoArrowForward className="text-3xl text-gray-400 animate-pulse" />
                    </div>
                  )}

                </React.Fragment>
              );
            })}
          </div>

          {/* 🔥 TEXT ROW */}
          <div className="flex items-start justify-between">

            {howItWorksData.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center w-[200px]">

                <h2 className="font-semibold">{step.title}</h2>
                <p className="font-medium">{step.heading}</p>
                <span className="text-sm text-gray-500">{step.desc}</span>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default HowItWorks;