import React, { useState } from "react";
import { NavData } from "../Data/Data";
import { HeadData } from "../Data/HeadData";
import logo from "../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";

const Nav = ({ showHead, open, setOpen }) => {
  const [active, setActive] = useState(0);
  const whatsappUrl = `https://wa.me/${HeadData[0].floating_whatsapp.replace(/\s+/g, '')}?text=${encodeURIComponent("Hi, I need guidance regarding college admissions.")}`;

  return (
    <header
      className={`w-full fixed left-0 z-50 bg-white shadow-sm border-b border-gray-200 transition-all duration-300
      ${showHead ? "top-[40px]" : "top-0"}`}
    >

      {/* 🔹 DESKTOP NAV (UNCHANGED) */}
      <nav className="flex items-center justify-between h-[90px] md:h-[110px] px-6 md:px-16 lg:px-24">

            {/* LOGO */}
            <div className={`flex items-center transition-opacity duration-300 ${open ? "opacity-0 invisible" : "opacity-100"}`}>
              <img src={logo} className="h-24 md:h-40 w-auto object-contain" />
            </div>

            {/* LINKS */}
            <div className={`hidden md:flex items-center gap-8 transition-opacity duration-300 ${open ? "opacity-0 invisible" : "opacity-100"}`}>
              {NavData.map((item, index) => (
                <a
                  key={item.name}
                  href={item.link}
                  className={`relative text-[16px] font-medium text-black hover:text-[var(--primary)] transition
                  ${index === 0 ? "text-[var(--primary)]" : ""}`}
                >
                  {item.name}

                  {index === 0 && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--primary)]"></span>
                  )}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary)] text-white text-sm font-semibold hover:bg-[var(--secondary)] transition-all duration-300"
              >
                <FaWhatsapp />
                Get Free Counselling
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-3xl text-[var(--primary)]"
            >
              {open ? <RxCross1 /> : <CiMenuBurger />}
            </button>

          </nav>

          {/* 🔥 MOBILE SIDEBAR */}
          {open && (
            <div className="fixed inset-0 z-[999] flex">

              {/* BACKDROP */}
              <div
                className="flex-1 bg-black/30"
                onClick={() => setOpen(false)}
              />

              {/* SIDEBAR */}
              <div className="w-[280px] bg-white h-full flex flex-col py-6 shadow-xl rounded-r-3xl overflow-y-auto relative">
                
                {/* 🔹 CLOSE BUTTON INSIDE SIDEBAR */}
                <button 
                  onClick={() => setOpen(false)}
                  className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-[var(--primary)] transition"
                >
                  <RxCross1 />
                </button>

                {/* LOGO */}
                <div className="flex px-6 mb-8 items-center">
                  <img src={logo} className="h-24 w-auto object-contain" />
                </div>

            {/* MENU */}
            <div className="flex flex-col gap-2 px-4">
              {NavData.map((item, index) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => {
                    setActive(index);
                    setOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active === index
                      ? "bg-[var(--primary)] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto px-4 pt-6">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[var(--primary)] text-white p-3 rounded-full font-medium text-sm hover:bg-[var(--secondary)] active:bg-[var(--secondary)] active:scale-95 transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
                Get Guidance
              </a>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};

export default Nav;