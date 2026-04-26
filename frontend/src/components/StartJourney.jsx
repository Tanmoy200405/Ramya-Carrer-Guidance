import React, { useRef, useState, useEffect } from "react";
import { HeadData } from "../Data/HeadData";

const StartJourney = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const phoneNumber = HeadData[0].floating_whatsapp.replace(/\s+/g, '');
  const message = "Hi, I would like to book an initial assessment slot for college guidance.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
    <div ref={sectionRef} className="w-full py-12 md:py-20 bg-[#000B18] flex justify-center text-white overflow-hidden relative">
      
      {/* Subtle Grain/Texture Overlay (Optional style match) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className={`w-[90%] max-w-4xl flex flex-col items-center text-center relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Start Your Journey.
        </h2>
        
        <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl leading-relaxed italic">
          Limited advisory slots available for the upcoming academic cycle. <br className="hidden md:block" />
          Secure your sanctuary today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[var(--tertiary)] text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 uppercase tracking-wider"
          >
            BOOK INITIAL ASSESSMENT
          </a>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;
