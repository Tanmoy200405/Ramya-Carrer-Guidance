import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = 'unset';
        onComplete();
      }
    });

    tl.to(".preloader-wrapper", {
      opacity: 0,
      duration: 0.8,
      delay: 2.0, // Shows for 2 seconds
      ease: "power2.inOut"
    });

  }, [onComplete]);

  return (
    <div className="preloader-wrapper fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white">
      <div className="relative flex items-center justify-center w-36 h-36 md:w-48 md:h-48">
        {/* Outer spinning dashed circle */}
        <div className="absolute inset-0 border-[3px] border-dashed border-[var(--primary)]/50 rounded-full animate-[spin_4s_linear_infinite]"></div>
        
        {/* Inner spinning solid circle */}
        <div className="absolute inset-3 md:inset-4 border-t-4 border-r-4 border-[var(--tertiary)] rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>
        
        {/* Center Logo */}
        <img 
          src={logo} 
          alt="Loading..." 
          className="w-24 md:w-32 h-auto object-contain z-10 scale-[0.85] animate-pulse" 
        />
      </div>
      
      {/* Loading Text */}
      <div className="mt-10 flex flex-col items-center gap-2">
        <div className="text-[var(--primary)] font-serif font-bold tracking-[0.3em] uppercase text-xs md:text-sm animate-pulse">
          Path to Excellence
        </div>
        <div className="w-16 h-1 bg-[var(--tertiary)] rounded-full overflow-hidden relative">
           <div className="absolute top-0 left-0 h-full w-full bg-[var(--primary)] animate-[scroll_1s_linear_infinite] origin-left"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
