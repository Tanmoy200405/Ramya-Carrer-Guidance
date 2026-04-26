import React from "react";
import logo from "../assets/logo.png";
import { HeadData } from "../Data/HeadData";

const Footer = () => {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--primary)] overflow-hidden relative border-t border-gray-200 -mt-8">
      
      {/* 🔹 TOP SECTION (LIGHT) */}
      <div className="w-[90%] max-w-7xl mx-auto py-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* 🔹 BRANDING */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <img
              src={logo}
              alt="Ramya Career Guidance"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain block"
            />
          </div>

          {/* 🔹 OUR EXCELLENCE */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <h3 className="text-xs font-bold tracking-[0.25em] text-[var(--primary)] uppercase border-b border-gray-200 pb-1 w-fit">
              Our Excellence
            </h3>

            <ul className="flex flex-col gap-2 text-sm font-medium">
              <li className="hover:text-[var(--tertiary)] transition-colors">
                <a href="#home" className="flex items-center gap-2">
                  <span className="text-[var(--tertiary)]">✧</span>
                  Personalized Guidance
                </a>
              </li>

              <li className="hover:text-[var(--tertiary)] transition-colors">
                <a href="#how-it-works" className="flex items-center gap-2">
                  <span className="text-[var(--tertiary)]">✧</span>
                  Proven Architecture
                </a>
              </li>

              <li className="hover:text-[var(--tertiary)] transition-colors">
                <a href="#courses" className="flex items-center gap-2">
                  <span className="text-[var(--tertiary)]">✧</span>
                  Global Opportunities
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 🔹 BOTTOM SECTION (DARK) */}
      <div className="bg-[var(--primary)] text-white py-6 relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--tertiary)] opacity-[0.1] blur-[120px] -mr-40 -mt-40 rounded-full"></div>

        <div className="w-[90%] max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col gap-6">

            {/* 🔹 STATEMENT */}
            <p className="text-lg md:text-xl text-white/90 font-serif text-center max-w-3xl mx-auto leading-relaxed px-4">
              "Your sanctuary for academic excellence. We architect the bridges
              between ambitious students and world-class institutions."
            </p>

            {/* 🔹 CONTACT */}
            <div className="flex flex-col items-center md:items-start gap-4 border-t border-white/10 pt-4">
              <h3 className="text-xs font-bold tracking-[0.25em] text-white uppercase border-b border-white/20 pb-1 w-fit">
                Get In Touch
              </h3>

              <div className="flex flex-col md:flex-row gap-4 md:gap-10 text-center md:text-left">
                
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">
                    Direct Lines
                  </span>
                  <p className="text-white font-bold text-base md:text-lg">
                    {HeadData[0].call_whatsapp}
                  </p>
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">
                    Official Inquiry
                  </span>
                  <p className="text-[var(--tertiary)] font-bold text-sm md:text-base underline underline-offset-4 decoration-white/20 hover:decoration-[var(--tertiary)] transition-all cursor-pointer">
                    {HeadData[0].email}
                  </p>
                </div>

              </div>
            </div>

            {/* 🔹 COPYRIGHT */}
            <div className="pt-3 border-t border-white/10 text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] text-center">
              © 2026 Ramya Career Guidance
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
