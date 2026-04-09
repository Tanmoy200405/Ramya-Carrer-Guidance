import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800 py-16 px-6 md:px-16 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* 🔹 LEFT COLUMN: BRANDING */}
        <div className="md:col-span-4 flex flex-col items-start gap-4">
          <div className="flex items-start gap-1 md:gap-2 mb-2">
            <img
              src={logo}
              alt="Ramya Career Guidance"
              className="h-24 w-24 md:h-40 md:w-40 object-contain -mr-2 md:-mr-5 mt-0 md:-mt-6"
            />
            <div className="flex flex-col justify-start pt-3 md:pt-6">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter leading-none">
                RAMYA
              </h2>
              <p className="text-xs md:text-base text-[var(--tertiary)] font-bold tracking-widest -mt-0.5 md:-mt-1 uppercase">
                CAREER GUIDANCE
              </p>
            </div>
          </div>
          <p className="text-base text-gray-500 leading-relaxed max-w-sm mt-1">
            Engineering future institutional success through bespoke
            architectural counseling and strategic placement for students and
            professionals.
          </p>
        </div>

        {/* 🔹 MIDDLE COLUMN: LINKS 1 */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
            Our Process
          </h3>
          <ul className="flex flex-col gap-2.5 text-base font-medium text-gray-600">
            <li className="footer-link cursor-pointer w-fit">Admission</li>
            <li className="footer-link cursor-pointer w-fit">Guidance</li>
            <li className="footer-link cursor-pointer w-fit">Curation</li>
            <li className="footer-link cursor-pointer w-fit">Placement</li>
          </ul>
        </div>

        {/* 🔹 MIDDLE COLUMN: LINKS 2 */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
            Institutional
          </h3>
          <ul className="flex flex-col gap-2.5 text-base font-medium text-gray-600">
            <li className="footer-link cursor-pointer w-fit">
              Clinical Ethics
            </li>
            <li className="footer-link cursor-pointer w-fit">Patient Rights</li>
            <li className="footer-link cursor-pointer w-fit">Admissions</li>
            <li className="footer-link cursor-pointer w-fit">Research</li>
          </ul>
        </div>

        {/* 🔹 MIDDLE COLUMN: LINKS 3 */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
            Legal
          </h3>
          <ul className="flex flex-col gap-2.5 text-base font-medium text-gray-600">
            <li className="footer-link cursor-pointer w-fit">Privacy Policy</li>
            <li className="footer-link cursor-pointer w-fit">Terms of Use</li>
            <li className="footer-link cursor-pointer w-fit">Disclaimer</li>
          </ul>
        </div>

        {/* 🔹 RIGHT COLUMN: COPYRIGHT */}
        <div className="md:col-span-2 flex flex-col items-start md:items-end justify-start md:text-right gap-4">
          <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
            Reach Us
          </h3>
          <p className="text-base text-gray-500">
            Phone: +91 70441 87556 <br />
            © 2026 Ramya Career Guidance. <br />
            All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-bold uppercase tracking-widest gap-4">
        <div>Built with Excellence</div>
        <div>Authorized Guidance Center</div>
      </div>
    </footer>
  );
};

export default Footer;
