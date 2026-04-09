import React, { useState } from "react";
import { NavData } from "../Data/Data";
import logo from "../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";

const Nav = ({ showHead, open, setOpen }) => {
  const [active, setActive] = useState(0);

  return (
    <header
      className={`w-full fixed left-0 z-50 bg-white shadow-sm border-b border-gray-200 transition-all duration-300
      ${showHead ? "top-[40px]" : "top-0"}`}
    >

      {/* 🔹 DESKTOP NAV (UNCHANGED) */}
      <nav className="flex items-center justify-between h-[90px] px-6 md:px-16 lg:px-24">

            {/* LOGO */}
            <div className={`flex items-center gap-0 transition-opacity duration-300 ${open ? "opacity-0 invisible" : "opacity-100"}`}>
              <img src={logo} className="h-20 w-20 md:h-32 md:w-32 object-contain -mr-1 md:-mr-4" />

              <div className="flex flex-col justify-center">
                <h1 className="text-2xl md:text-5xl font-bold text-[var(--primary)] tracking-tighter leading-none">
                  RAMYA
                </h1>
                <p className="text-[10px] md:text-sm text-[var(--tertiary)] font-bold tracking-widest -mt-0.5 md:-mt-1">CAREER GUIDANCE</p>
              </div>
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
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary)] text-white text-sm font-semibold hover:bg-[var(--secondary)] transition-all duration-300">
                <FaWhatsapp />
                Get Free Counselling
              </button>
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
                <div className="flex px-6 mb-8 items-center gap-0">
                  <img src={logo} className="h-24 w-24 object-contain -mr-2" />
                  <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-[var(--primary)] tracking-tighter leading-none">RAMYA</h1>
                    <p className="text-[10px] text-[var(--tertiary)] font-bold tracking-wider uppercase -mt-0.5">CAREER GUIDANCE</p>
                  </div>
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
              <button className="w-full flex items-center justify-center gap-2 bg-[var(--primary)] text-white p-3 rounded-full font-medium text-sm hover:bg-[var(--secondary)] active:bg-[var(--secondary)] active:scale-95 transition-all duration-300">
                <FaWhatsapp className="text-lg" />
                Get Guidance
              </button>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};

export default Nav;