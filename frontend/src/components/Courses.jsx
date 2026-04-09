import React, { useEffect, useRef, useState } from "react";
import busImg from "../assets/course_business.png";
import techImg from "../assets/course_tech.png";
import nurImg from "../assets/course_nursing.png";
import paraImg from "../assets/course_paramedical.png";

const Courses = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const courses = [
    {
      id: "01",
      category: "BUSINESS",
      title: "BBA & MBA",
      desc: "Comprehensive guidance for leadership and management careers.",
      image: busImg,
    },
    {
      id: "02",
      category: "TECHNOLOGY",
      title: "BCA & B.Tech",
      desc: "Expert roadmap for computer applications and engineering fields.",
      image: techImg,
    },
    {
      id: "03",
      category: "HEALTHCARE",
      title: "Nursing",
      desc: "Dedicated admission support for B.Sc and GNM Nursing.",
      image: nurImg,
    },
    {
      id: "04",
      category: "ALLIED",
      title: "Paramedical",
      desc: "Pathways for Diploma and Degree courses in Paramedic roles.",
      image: paraImg,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-24 bg-white flex justify-center relative overflow-hidden"
    >
      
      {/* 🔹 DOT GRID BACKGROUND (Matching Success Stories) */}
      <div className="absolute inset-0 z-0 opacity-[0.1]" 
           style={{ 
             backgroundImage: 'radial-gradient(#002147 1px, transparent 1px)', 
             backgroundSize: '25px 25px' 
           }}>
      </div>

      {/* 🔹 LARGE WATERMARK TEXT */}
      <div className="absolute top-10 left-0 w-full h-full flex items-start justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="text-[18vw] md:text-[15vw] font-black text-[var(--primary)] opacity-[0.03] tracking-tighter leading-none">
          COURSES
        </h1>
      </div>

      <div className="w-[90%] max-w-6xl relative z-10">

        {/* 🔹 HEADER */}
        <div className={`text-center mb-12 flex flex-col items-center justify-center md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--primary)] leading-tight">
            Courses <span className="text-[var(--tertiary)] italic">we guide.</span>
          </h2>
          <div className="w-16 h-1 bg-[var(--tertiary)] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 🔹 GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}

        </div>

      </div>
    </section>
  );
};

const CourseCard = ({ course, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-[0_10px_40px_rgba(0,0,0,0.03)]
                 transition-all duration-500 group cursor-pointer
                 hover:bg-[var(--tertiary)] hover:shadow-2xl
                 active:bg-[var(--tertiary)]
                 h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${(index % 4) * 100}ms` }}
    >
      
      {/* CIRCLE IMAGE OVERLAY */}
      <div className="relative mb-8">
          <div className="absolute inset-x-[-8px] inset-y-[-8px] rounded-full border border-[var(--tertiary)] opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
          
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md relative z-10">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />
          </div>
      </div>

      <p className="text-[var(--tertiary)] group-hover:text-white text-[10px] font-bold tracking-[0.2em] mb-3 uppercase transition-colors duration-300">
          {course.id} / {course.category}
      </p>

      <h3 className="text-[var(--primary)] group-hover:text-white text-xl font-bold font-serif mb-3 transition-colors duration-300">
        {course.title}
      </h3>

      <p className="text-gray-500 group-hover:text-white/90 text-sm leading-relaxed mb-8 flex-grow transition-colors duration-300">
        {course.desc}
      </p>

      <div className="mt-auto">
        <button className="text-[var(--primary)] group-hover:text-white text-sm font-bold tracking-widest uppercase hover:text-[var(--tertiary)] transition-colors flex items-center gap-2 group">
           Learn More
           <span className="w-6 h-[1px] bg-[var(--primary)] group-hover:bg-white group-hover:w-10 transition-all"></span>
        </button>
      </div>

    </div>
  );
};

export default Courses;