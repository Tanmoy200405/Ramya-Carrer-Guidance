import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">

      {/* 🔹 TOP CTA SECTION */}
      <div className="bg-[linear-gradient(90deg,#04130f,#0f5132)] text-white py-8 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* TEXT */}
        <div>
          <h1 className="text-lg md:text-xl font-semibold">
            Still Confused? Let’s Talk!
          </h1>
          <p className="text-sm text-gray-300">
            Get free guidance from our experts and take the right step.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4">

          {/* CALL BUTTON */}
          <button className="flex items-center gap-2 px-6 py-3 rounded-full 
                             bg-gradient-to-r from-[#f1d27a] to-[#D4AF37] 
                             text-black font-semibold shadow-md hover:scale-105 transition">
            <FaPhoneAlt />
            Call Now: +91 98765 43210
          </button>

          {/* WHATSAPP BUTTON */}
          <button className="flex items-center gap-2 px-6 py-3 rounded-full 
                             bg-green-600 text-white font-semibold shadow-md 
                             hover:bg-green-700 transition">
            <FaWhatsapp />
            Chat on WhatsApp
          </button>

        </div>
      </div>

      {/* 🔹 BOTTOM BAR */}
      <div className="bg-[#06251d] text-gray-300 text-sm py-4 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-2">

        <p>© 2026 Ramya Career Guidance. All Rights Reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
        </div>

      </div>

    </div>
  );
};

export default Footer;