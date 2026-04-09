import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Head = ({ show }) => {
  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
      ${show ? "h-[40px] opacity-100" : "h-0 opacity-0 overflow-hidden"}
      bg-[var(--primary)] text-white text-sm`}
    >

      <div className="max-w-7xl mx-auto px-4 md:px-10 h-full flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-4 md:gap-6">

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[var(--tertiary)]" />
            <span>+91 98765 43210</span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <FaEnvelope className="text-[var(--tertiary)]" />
            <span>info@ramyacareerguidance.com</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <FaMapMarkerAlt className="text-[var(--tertiary)]" />
            <span>Serving Students Across India</span>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 text-lg">
          <FaInstagram className="cursor-pointer hover:text-[var(--tertiary)]" />
          <FaWhatsapp className="cursor-pointer hover:text-[var(--tertiary)]" />
          <FaYoutube className="cursor-pointer hover:text-[var(--tertiary)]" />
          <FaLinkedin className="cursor-pointer hover:text-[var(--tertiary)]" />
        </div>

      </div>
    </div>
  );
};

export default Head;