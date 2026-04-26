import React from "react";
import logo from "../assets/logo.png";
import { HeadData } from "../Data/HeadData";

const Footer = () => {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--primary)] overflow-hidden relative border-t border-gray-200">
      <div className="w-[90%] max-w-7xl mx-auto py-4 relative z-10">
        {/* TOP SECTION (LIGHT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16">
          {/* 🔹 BRANDING */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 md:gap-6">
            <img
              src={logo}
              alt="Ramya Career Guidance"
              className="h-24 w-auto md:h-40 object-contain"
            />
          </div>

          {/* 🔹 OUR EXCELLENCE */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
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
        </div>
      </div>

      {/* BOTTOM SECTION (DARK) */}
      <div className="bg-[var(--primary)] text-white py-8 md:py-10 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--tertiary)] opacity-[0.1] blur-[120px] -mr-48 -mt-48 rounded-full"></div>

        <div className="w-[90%] max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col gap-8">
            {/* 🔹 GET IN TOUCH (Now prominently in Dark Section) */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <h3 className="text-xs font-bold tracking-[0.25em] text-white uppercase border-b border-white/20 pb-2 w-fit">
                Get In Touch
              </h3>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-left">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">Direct Lines</span>
                  <p className="text-white font-bold text-lg md:text-3xl tracking-tight">
                    {HeadData[0].call_whatsapp}
                  </p>
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">Official Inquiry</span>
                  <p className="text-[var(--tertiary)] font-bold text-lg md:text-xl underline underline-offset-8 decoration-white/20 hover:decoration-[var(--tertiary)] transition-all cursor-pointer">
                    {HeadData[0].email}
                  </p>
                </div>
              </div>
            </div>

            {/* 🔹 FOOTER STATEMENT */}
            <div className="border-t border-white/5 pt-8 pb-2">
              <p className="text-xl md:text-3xl text-white/70 font-serif italic tracking-tight text-center max-w-6xl mx-auto leading-relaxed px-4">
                "Your sanctuary for academic excellence. We architect the bridges between ambitious students and world-class institutions."
              </p>
            </div>

            {/* 🔹 BOTTOM BAR */}
            <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] gap-6">
              <div className="flex items-center gap-4">
                <span>© 2026 Ramya Career Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
