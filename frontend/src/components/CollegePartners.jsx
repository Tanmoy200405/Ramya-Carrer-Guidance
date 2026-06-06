import React, { useEffect, useRef, useState } from "react";
import { collegeData } from "../Data/CollegeData";

const CollegePartners = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    const scrollContainer = scrollRef.current;
    
    const scrollStep = () => {
      if (scrollContainer && !isHovered && isInView && !isDragging.current) {
        scrollContainer.scrollLeft += 0.5; 
        
        // Loop back when reaching halfway
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    if (isInView) {
      animationFrameId = requestAnimationFrame(scrollStep);
    }
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isInView]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; 
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section ref={sectionRef} className="w-full py-8 md:py-12 bg-white relative overflow-hidden border-t border-gray-100">
      {/* 🔹 HEADING */}
      <div className="text-center mb-16 px-4">
        <div className="inline-block px-4 py-1 bg-[var(--tertiary)]/10 rounded-full mb-4">
           <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--tertiary)]">Global Network</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-serif text-[var(--primary)] font-bold mb-6">
          Our <span className="relative inline-block">
            <span className="relative z-10 text-[var(--tertiary)] italic">Partner</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--tertiary)]/10 -z-0"></span>
          </span> Colleges
        </h2>
        
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gray-300"></div>
          <div className="w-2.5 h-2.5 rotate-45 border-2 border-[var(--tertiary)]"></div>
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gray-300"></div>
        </div>

        <p className="text-[var(--primary)]/80 font-serif italic text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
          “Bridging the gap between <span className="text-[var(--secondary)]">ambition</span> and <span className="text-[var(--tertiary)]">opportunity</span> through our exclusive network of elite institutions.”
        </p>
      </div>

      {/* 🔹 SLIDER */}
      <div className="relative w-full overflow-hidden">
        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex w-full gap-6 overflow-x-auto select-none cursor-grab active:cursor-grabbing pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide the scrollbar in webkit browsers using inline style or global css. Here we rely on tailwind or style. */}
          <style>{`
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {[...collegeData, ...collegeData, ...collegeData, ...collegeData].map((college, index) => (
            <a
              href={college.officialSite}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              onClick={(e) => { if(isDragging.current) e.preventDefault(); }}
              className="flex items-center gap-4 px-6 py-5 bg-white border border-gray-100 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] min-w-[320px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group cursor-pointer flex-shrink-0"
              draggable="false"
            >
              <div className="h-18 w-18 flex-shrink-0 flex items-center justify-center p-2 bg-gray-50/50 rounded-xl group-hover:bg-white transition-colors duration-500">
                <img
                  src={college.logo}
                  alt={college.name}
                  className="h-full w-full object-contain transition-all duration-500 scale-100 pointer-events-none"
                  draggable="false"
                />
              </div>
              <div className="flex flex-col overflow-hidden pointer-events-none">
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
    </section>
  );
};

export default CollegePartners;