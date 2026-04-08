import React, { useState } from "react";
import { NavData } from "../Data/Data";
import logo from "../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";

const Nav = ({ showHead }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <header
      className={`w-full fixed left-0 z-50 bg-white shadow-sm border-b border-gray-200 transition-all duration-300
      ${showHead ? "top-[40px]" : "top-0"}`}
    >

      {/* 🔹 DESKTOP NAV (UNCHANGED) */}
      <nav className="flex items-center justify-between h-[90px] px-6 md:px-16 lg:px-24">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} className="h-14 w-14 md:h-16 md:w-16" />

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-[var(--primary-green)]">
              RAMYA
            </h1>
            <p className="text-xs text-gray-600">CAREER GUIDANCE</p>
          </div>
        </div>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {NavData.map((item, index) => (
            <a
              key={item.name}
              href={item.link}
              className={`relative text-[15px] font-medium text-black hover:text-[var(--primary-green)] transition
              ${index === 0 ? "text-[var(--primary-green)]" : ""}`}
            >
              {item.name}

              {index === 0 && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--primary-green)]"></span>
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary-green)] text-white text-sm font-semibold">
            <FaWhatsapp />
            Get Free Counselling
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-[var(--primary-green)]"
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
          <div className="w-[250px] bg-white h-full flex flex-col py-6 shadow-xl rounded-r-3xl overflow-y-auto">

            {/* LOGO */}
            <div className="flex px-6 mb-8 items-center gap-3">
              <img src={logo} className="h-10 w-10" />
              <h1 className="text-xl font-bold text-[var(--primary-green)]">RAMYA</h1>
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
                      ? "bg-[var(--primary-green)] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto px-4 pt-6">
              <button className="w-full flex items-center justify-center gap-2 bg-[var(--primary-green)] text-white p-3 rounded-full font-medium text-sm">
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