import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { coursesData } from "../data/CourseData";

const Courses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 AUTOPLAY LOGIC
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const resetAt = coursesData.length - cardsToShow;
        return prev >= resetAt ? 0 : prev + 1;
      });
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval);
  }, [cardsToShow]);

  const nextSlide = () => {
    if (currentIndex < coursesData.length - cardsToShow) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    const updateSlider = () => {
      if (sliderRef.current && sliderRef.current.children.length > 0) {
        const cards = sliderRef.current.children;
        const parentStyle = window.getComputedStyle(sliderRef.current);
        const gap = parseFloat(parentStyle.columnGap) || 0;
        const cardWidth = cards[0].offsetWidth + gap;
        
        gsap.to(sliderRef.current, {
          x: -(currentIndex * cardWidth),
          duration: 0.8,
          ease: "power3.inOut"
        });
      }
    };

    updateSlider();
    window.addEventListener("resize", updateSlider);
    return () => window.removeEventListener("resize", updateSlider);
  }, [currentIndex]);

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden flex flex-col items-center">
      
      {/* 🔹 DOT GRID OVERLAY */}
      <div className="absolute inset-0 z-0 opacity-[0.05] mix-blend-multiply" 
           style={{ 
             backgroundImage: 'radial-gradient(#002147 1px, transparent 1px)', 
             backgroundSize: '25px 25px' 
           }}>
      </div>

      <div className="w-[90%] max-w-7xl relative z-10 flex flex-col items-center">
        {/* 🔹 HEADER */}
        <div className="flex flex-col items-center mb-16 px-4 relative w-full text-center">
          <div className="relative z-10 flex flex-col items-center">
            {/* 🔹 WATERMARK TEXT BEHIND HEADER */}
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-[4.2rem] sm:text-[6rem] md:text-[8rem] font-serif font-bold text-[var(--primary)] opacity-[0.06] whitespace-nowrap pointer-events-none select-none z-0 tracking-widest overflow-hidden mix-blend-multiply">
              COURSES
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[var(--primary)] leading-tight relative z-10">
              Courses <span className="text-[var(--tertiary)] italic">we guide.</span>
            </h2>
            <div className="w-12 md:w-16 h-1 bg-[var(--tertiary)] mt-3 md:mt-4 rounded-full relative z-10"></div>
          </div>
        </div>

        {/* 🔹 SLIDER CONTAINER WITH SIDE ARROWS */}
        <div className="relative w-full px-2 sm:px-12">
          {/* Left Arrow */}
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[var(--primary)] flex items-center justify-center transition-all ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'bg-white hover:bg-[var(--primary)] hover:text-white shadow-lg text-[var(--primary)]'}`}
            aria-label="Previous Slide"
          >
            <FaArrowLeft className="text-sm sm:text-xl" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= coursesData.length - cardsToShow}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-[var(--primary)] flex items-center justify-center transition-all ${currentIndex >= coursesData.length - cardsToShow ? 'opacity-0 pointer-events-none' : 'bg-white hover:bg-[var(--primary)] hover:text-white shadow-lg text-[var(--primary)]'}`}
            aria-label="Next Slide"
          >
            <FaArrowRight className="text-sm sm:text-xl" />
          </button>

          <div className="overflow-hidden">
            <div ref={sliderRef} className="flex gap-6 py-4">
              {coursesData.map((course, index) => (
                <CourseCard 
                  key={index} 
                  course={course} 
                  isActive={index === currentIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CourseCard = ({ course, isActive }) => {
  return (
    <div
      className={`flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] border border-gray-100 rounded-[3rem] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_15px_50px_rgba(0,0,0,0.04)]
                 transition-all duration-700 group cursor-pointer h-full min-h-[500px]
                 ${isActive ? 'bg-[var(--tertiary)] shadow-2xl scale-[1.02]' : 'bg-white hover:bg-[var(--tertiary)] hover:shadow-2xl'}`}
    >
      {/* 🔹 CIRCLE IMAGE OVERLAY */}
      <div className="relative mb-10 mt-4">
          <div className={`absolute inset-x-[-10px] inset-y-[-10px] rounded-full border-2 border-[var(--tertiary)] transition-all duration-500
                          ${isActive ? 'scale-110 opacity-40' : 'opacity-20 group-hover:scale-110 group-hover:opacity-40'}`}></div>
          
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 bg-white">
            <img 
              src={course.image} 
              alt={course.title} 
              className={`w-full h-full object-cover transition-all duration-700 
                          ${isActive ? 'grayscale-0 scale-110' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'}`}
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=400&h=400'; }}
            />
          </div>
      </div>

      <p className={`text-xs font-bold tracking-[0.25em] mb-4 uppercase transition-colors duration-300
                    ${isActive ? 'text-white' : 'text-[var(--tertiary)] group-hover:text-white'}`}>
          {course.id} / {course.category}
      </p>

      <h3 className={`text-2xl font-bold font-serif mb-4 transition-colors duration-300
                     ${isActive ? 'text-white' : 'text-[var(--primary)] group-hover:text-white'}`}>
        {course.title}
      </h3>

      <p className={`text-sm leading-relaxed mb-10 flex-grow transition-colors duration-300 font-light px-2
                    ${isActive ? 'text-white/90' : 'text-gray-500 group-hover:text-white/90'}`}>
        {course.desc}
      </p>

      <div className="mt-auto w-full flex justify-center">
        <button className={`text-xs sm:text-sm font-bold tracking-[0.15em] uppercase transition-colors flex items-center gap-3
                          ${isActive ? 'text-white' : 'text-[var(--primary)] group-hover:text-white'}`}>
           LEARN MORE
           <span className={`h-[1px] transition-all duration-500
                          ${isActive ? 'bg-white w-12' : 'bg-[var(--primary)] w-8 group-hover:bg-white group-hover:w-12'}`}></span>
        </button>
      </div>
    </div>
  );
};

export default Courses;