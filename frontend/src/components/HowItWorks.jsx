import React, { useState, useRef } from "react";
import { howItWorksData } from "../Data/HowItWorksData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Pin the container and scrub through the steps
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "center center", // Pin when the center of the section hits the center of the viewport
      end: "+=1500", // Keep it pinned for 1500px of scrolling (adjust to make it scroll slower/faster)
      pin: true,
      onUpdate: (self) => {
        // Map progress (0 to 1) to the number of steps
        const totalSteps = howItWorksData.length;
        // ensure index never exceeds array bounds
        let index = Math.floor(self.progress * totalSteps);
        if (index === totalSteps) index = totalSteps - 1;
        
        setActiveIndex(index);
      }
    });

    return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="w-full min-h-screen flex py-10 md:py-0 md:h-screen bg-[var(--neutral)] items-center justify-center">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] px-4 md:px-6 lg:px-12 py-6 md:py-12 w-[95%] max-w-4xl border-t-4 border-[var(--primary)] flex flex-col">
        
        {/* HEADING */}
        <h1 className="text-center text-2xl md:text-4xl font-bold text-[var(--primary)] mb-6 md:mb-10 font-serif shrink-0">
          How It Works
        </h1>
        
        {/* ACCORDION CONTAINER - SCROLLS INTERNALLY ON MOBILE */}
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 max-h-[65vh] md:max-h-none overflow-y-auto md:overflow-visible pr-1 pb-2">
          {howItWorksData.map((step, index) => {
            const isActive = index === activeIndex;
            const Icon = step.icon;

            return (
              <div 
                key={index} 
                // We keep click functionality for quick jumps
                onClick={() => setActiveIndex(index)}
                className={`flex items-start lg:items-center gap-3 md:gap-4 lg:gap-6 p-3 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border transition-all duration-700 cursor-pointer 
                  ${isActive 
                    ? 'bg-[var(--primary)] text-white shadow-lg border-transparent scale-[1.02] lg:scale-105' 
                    : 'bg-[#f4f8f6] border-gray-200 text-gray-600 hover:bg-gray-100 hover:scale-[1.01]'}`}
              >
                {/* ICON BLOCK */}
                <div className={`p-3 md:p-4 rounded-xl text-2xl md:text-3xl transition-all duration-700 shadow-sm shrink-0
                  ${isActive 
                    ? 'bg-white text-[var(--primary)] shadow-md' 
                    : 'bg-gray-200 text-gray-400'}`}
                >
                  <Icon />
                </div>

                {/* TEXT CONTENT */}
                <div className="flex flex-col overflow-hidden w-full pt-1 lg:pt-0">
                  <h2 className={`font-bold text-lg md:text-xl transition-all duration-700 font-serif
                    ${isActive ? 'text-[var(--tertiary)]' : ''}`}
                  >
                    {step.title}
                  </h2>
                  
                  {/* EXPANDABLE BODY */}
                  <div className={`transition-all duration-700 ease-in-out origin-top 
                    ${isActive ? 'max-h-[200px] opacity-100 mt-2 lg:mt-3 scale-y-100' : 'max-h-0 opacity-0 scale-y-0'}`}
                  >
                    <p className="font-semibold text-sm md:text-base text-gray-100 leading-tight">
                      {step.heading}
                    </p>
                    <p className="text-xs md:text-sm mt-1.5 md:mt-2 text-gray-300 leading-relaxed max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;