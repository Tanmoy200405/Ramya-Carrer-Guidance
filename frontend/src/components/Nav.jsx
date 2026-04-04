import React, { useState } from "react";
import { NavData } from "../Data/Data";
import logo from "../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm border-b border-gray-200">

      <nav className="flex items-center justify-between h-[90px] px-6 md:px-16 lg:px-24">

        {/* 🔹 LOGO + TEXT (BIGGER) */}
        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="logo"
            className="h-14 w-14 md:h-16 md:w-16 object-contain"
          />

          <div className="leading-tight">
            <h1 className="text-xl md:text-2xl font-bold text-[var(--primary-green)]">
              RAMYA
            </h1>
            <p className="text-xs md:text-sm text-gray-600 tracking-wide">
              CAREER GUIDANCE
            </p>
          </div>

        </div>

        {/* 🔹 NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {NavData.map((item, index) => (
            <a
              key={item.name}
              href={item.link}
              className={`relative text-[15px] font-medium text-black hover:text-[var(--primary-green)] transition
              ${index === 0 ? "text-[var(--primary-green)" : ""}`}
            >
              {item.name}

              {/* ACTIVE UNDERLINE */}
              {index === 0 && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--primary-green)] rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* 🔹 CTA BUTTON */}
        <div className="hidden md:flex">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary-green)] text-white text-sm font-semibold shadow-md hover:bg-[var(--secondary-green)] transition">
            <FaWhatsapp className="text-lg" />
            Get Free Counselling
          </button>
        </div>

        {/* 🔹 MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-[var(--primary-green)]"
        >
          {open ? <RxCross1 /> : <CiMenuBurger />}
        </button>

      </nav>

      {/* 🔹 MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 z-50">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-3xl text-[var(--primary-green)]"
          >
            <RxCross1 />
          </button>

          {/* LINKS */}
          {NavData.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-2xl font-semibold text-gray-700 hover:text-[var(--primary-green)]"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* CTA */}
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--primary-green)] text-white font-semibold">
            <FaWhatsapp />
            Get Free Counselling
          </button>
        </div>
      )}
    </header>
  );
};

export default Nav;