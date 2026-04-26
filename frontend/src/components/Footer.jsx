import React from "react";
import logo from "../assets/logo.png";
import { HeadData } from "../Data/HeadData";

const Footer = () => {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--primary)] overflow-hidden relative border-t border-gray-200">
      {/* Background Glow - Made more subtle for light mode */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--tertiary)] opacity-[0.05] blur-[120px] -mr-48 -mt-48 rounded-full"></div>
      
      <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* 🔹 BRANDING */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <div className="mb-2">
              <img
                src={logo}
                alt="Ramya Career Guidance"
                className="h-28 w-auto md:h-56 object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-xs sm:max-w-sm mt-1 font-light italic px-4 md:px-0">
              "Your sanctuary for academic excellence. We architect the bridges between ambitious students and world-class institutions."
            </p>
          </div>

          {/* 🔹 OUR EXCELLENCE */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-bold tracking-[0.25em] text-[var(--primary)] uppercase border-b border-gray-200 pb-2 w-fit">
              Our Excellence
            </h3>
            <ul className="flex flex-col gap-3 text-sm font-medium">
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

          {/* 🔹 QUICK LINKS (Space Filler if needed) */}
          <div className="hidden lg:flex flex-col gap-6">
          </div>

          {/* 🔹 GET IN TOUCH */}
          <div className="flex flex-col items-start lg:items-end lg:text-right gap-6">
            <h3 className="text-xs font-bold tracking-[0.25em] text-[var(--primary)] uppercase border-b border-gray-200 pb-2 w-fit lg:ml-auto">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-4 text-sm md:text-base">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Direct Lines</span>
                <p className="text-[var(--primary)] font-bold text-lg md:text-xl tracking-tight">
                  {HeadData[0].call_whatsapp}
                </p>
              </div>
              
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Official Inquiry</span>
                <p className="text-[var(--tertiary)] font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-[var(--tertiary)] transition-all cursor-pointer">
                  {HeadData[0].email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 BOTTOM BAR */}
        <div className="mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[var(--tertiary)] italic">Built with Excellence</span>
            <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
            <span>© 2026 Ramya Career Guidance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
