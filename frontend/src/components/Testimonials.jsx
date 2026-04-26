import React, { useEffect, useRef, useState } from "react";
import { testimonialsData } from "../Data/testimonialsData";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full py-10 md:py-16 bg-[#f9fafb] flex justify-center relative overflow-hidden">
      
      {/* 🔹 DOT GRID BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-[0.1]" 
           style={{ 
             backgroundImage: 'radial-gradient(#002147 1px, transparent 1px)', 
             backgroundSize: '30px 30px' 
           }}>
      </div>

      <div className="w-[90%] max-w-6xl relative z-10">

        {/* 🔹 HEADING */}
        <div className={`text-center mb-10 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight font-serif">
            Success Stories
          </h1>
          <div className="w-16 h-1 bg-[var(--tertiary)] mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto italic font-serif">
            Real experiences from students we’ve guided towards their professional dreams.
          </p>
        </div>

        {/* 🔹 GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">

          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 flex flex-col gap-6 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 
                         transition-all duration-700 hover:shadow-xl hover:-translate-y-2 h-full
                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >

              <div className="flex justify-between items-start">
                  {/* QUOTE ICON */}
                  <div className="text-[var(--tertiary)] text-3xl opacity-50">
                    <FaQuoteLeft />
                  </div>

                  {/* ⭐ STAR RATINGS */}
                  <div className="flex gap-1">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <FaStar key={i} className="text-[var(--tertiary)] text-sm" />
                    ))}
                  </div>
              </div>

              {/* MESSAGE */}
              <p className="text-lg text-gray-700 leading-relaxed font-medium italic flex-grow font-serif">
                “{item.review}”
              </p>

              {/* PROFILE */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 font-serif">{item.name}</h2>
                  <p className="text-[10px] text-[var(--tertiary)] font-bold tracking-[0.2em] uppercase">{item.college}</p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Testimonials;