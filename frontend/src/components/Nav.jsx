import React, { useState } from 'react'
import { NavData } from '../Data/Data'
import logo from '../assets/logo.png'
import { CiMenuBurger } from "react-icons/ci"
import { RxCross1 } from "react-icons/rx"
import { FaArrowRight } from "react-icons/fa"

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full  h-24 m-8 ">
      
      <nav className="flex items-center justify-between h-full px-6 md:px-20">

        {/* 🔹 LEFT: LOGO */}
        <div className="logo flex items-center">
          <img src={logo} alt="logo" className="h-14 w-14 object-contain" />
        </div>

        {/* 🔹 CENTER: NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {NavData.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-lg font-medium hover:text-blue-400 transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* 🔹 RIGHT: CTA BUTTON (Desktop) */}
        <div className="hidden md:flex items-center">
          <button className="cta-btn">
            Get Free Counselling
            <FaArrowRight className="arrow-icon" />
          </button>
        </div>

        {/* 🔹 MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? <RxCross1 /> : <CiMenuBurger />}
        </button>

      </nav>

      {/* 🔹 MOBILE MENU */}
      {open && (
        <div className=" sidebar fixed inset-0 bg-[#0f172a] flex flex-col items-center justify-center gap-8 z-50">

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-3xl"
          >
            <RxCross1 />
          </button>

          {/* LINKS */}
          {NavData.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className=" sidebarText text-2xl hover:text-blue-400 transition"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}

          {/* CTA IN MOBILE */}
          <button className="cta-btn mt-6">
            Get Free Counselling
            <FaArrowRight className="arrow-icon" />
          </button>

        </div>
      )}
    </div>
  )
}

export default Nav