import React from "react";
import { howItWorksData } from "../Data/HowItWorksData";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section 
      id="how-it-works"
      ref={containerRef} 
      className="w-full py-24 bg-[var(--neutral)] overflow-hidden"
    >
      <div className="w-[90%] max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-serif text-[var(--primary)] font-bold mb-6">
            The <span className="text-[var(--tertiary)] italic">Path</span> to Excellence
          </h1>
          <p className="text-gray-500 font-serif italic text-lg max-w-2xl mx-auto leading-relaxed">
            Our curated four-step approach ensures your academic journey is mapped with precision and concierge-level care.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {howItWorksData.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100 flex flex-col items-start min-h-[320px] overflow-hidden"
              >
                {/* Background Number */}
                <div className="absolute top-[-20px] right-[-20px] text-9xl font-serif font-black text-[var(--primary)] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none select-none">
                  0{index + 1}
                </div>

                {/* ICON */}
                <div className="w-16 h-16 rounded-2xl bg-[#f4f8f6] flex items-center justify-center text-[var(--primary)] mb-8 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-500 shadow-sm">
                  <Icon className="text-2xl" />
                </div>

                {/* TEXT */}
                <h3 className="text-2xl font-serif font-bold text-[var(--primary)] mb-4">
                  {step.heading}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-6">
                  {step.desc}
                </p>

                {/* STEP INDICATOR */}
                <div className="mt-auto flex items-center gap-2">
                  <div className="h-1 w-8 bg-[var(--tertiary)] rounded-full"></div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--tertiary)]">
                    STEP 0{index + 1}
                  </span>
                </div>

                {/* SHINE EFFECT ON HOVER */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;