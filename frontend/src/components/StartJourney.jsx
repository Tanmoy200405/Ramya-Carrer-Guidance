import React from "react";

const StartJourney = () => {
  return (
    <div className="w-full py-20 bg-[#000B18] flex justify-center text-white overflow-hidden relative">
      
      {/* Subtle Grain/Texture Overlay (Optional style match) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="w-[90%] max-w-4xl flex flex-col items-center text-center relative z-10">
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Start Your Journey.
        </h2>
        
        <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl leading-relaxed italic">
          Limited advisory slots available for the upcoming academic cycle. <br className="hidden md:block" />
          Secure your sanctuary today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-8 py-4 bg-[var(--tertiary)] text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300">
            BOOK INITIAL ASSESSMENT
          </button>
          <button className="px-8 py-4 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 uppercase tracking-widest text-sm">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartJourney;
