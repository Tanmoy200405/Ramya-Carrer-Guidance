import React, { useRef } from "react";
import founderImg from "../assets/founder.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FounderMessage = () => {
  const containerRef = useRef(null);
  const quote1Ref = useRef(null);
  const quote2Ref = useRef(null);

  useGSAP(() => {
    // 🔹 Create Timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 95%", // Start early
        end: "top 20%",   // Finish in view
        scrub: 1,         // Smooth follow
      }
    });

    // 🔹 Top Quote (Left to Center)
    tl.fromTo(quote1Ref.current, 
      { x: -150, opacity: 0, scale: 0.5, rotate: -45 },
      { x: 0, opacity: 0.3, scale: 1, rotate: 0, ease: "power2.out" }
    );

    // 🔹 Bottom Quote (Right to Center)
    tl.fromTo(quote2Ref.current, 
      { x: 150, opacity: 0, scale: 0.5, rotate: 45 },
      { x: 0, opacity: 0.3, scale: 1, rotate: 0, ease: "power2.out" },
      0 // Start at same time as top quote
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full py-20 bg-white flex justify-center overflow-hidden">
      <div className="w-[90%] max-w-6xl flex items-center lg:items-start gap-12 lg:gap-20 flex-col md:flex-row">
        
        {/* 🔥 IMAGE SIDE */}
        <div className="flex-1 flex justify-center md:justify-end w-full px-4 sm:px-0">
           <div className="relative max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] w-full founder-image-box">
              <div className="absolute inset-0 bg-[var(--primary)] rounded-3xl transform translate-x-4 translate-y-4 shadow-xl"></div>
              {/* Image */}
              <img 
                src={founderImg} 
                alt="Our Founder" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-xl transition-all duration-300 object-cover border-4 border-white"
              />
           </div>
        </div>

        {/* 🔥 TEXT SIDE */}
        <div className="flex-1 text-center md:text-left pt-12 md:pt-6 lg:pt-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--primary)] mb-8">
            Message from our Founder
          </h2>
          
          <div className="relative px-6 md:px-0 mt-4">
            <span ref={quote1Ref} className="absolute -top-8 left-0 md:-left-4 text-6xl lg:text-8xl text-[var(--tertiary)] opacity-30 leading-none">"</span>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-semibold italic z-10 relative">
              Choosing the right career path can be confusing. Our mission is to
              guide every student towards the best opportunities with clarity and
              confidence.
            </p>
            <span ref={quote2Ref} className="absolute -bottom-8 right-4 md:right-10 text-6xl lg:text-8xl text-[var(--tertiary)] opacity-30 leading-none rotate-180">"</span>
          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
             <div className="w-16 h-1 bg-[var(--tertiary)] rounded-full"></div>
             <p className="text-lg font-bold text-gray-800 uppercase tracking-widest">
               The Founder
             </p>
          </div>

          <div className="mt-10 flex justify-center md:justify-start">
             <button className="bg-[var(--primary)] text-white px-8 py-3.5 rounded-xl font-bold tracking-wide shadow-lg hover:bg-[var(--secondary)] focus:bg-[var(--secondary)] active:bg-[var(--secondary)] active:scale-95 transition-all duration-200">
               Get Free Guidance
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FounderMessage;