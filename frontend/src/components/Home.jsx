import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaShieldAlt, FaHandshake, FaUserGraduate } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center">

      {/* 🌿 EDUCATIONAL BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed md:bg-scroll"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      {/* 🎯 COLOR MERGE & OVERLAY TO MATCH WEBSITE THEME */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#000B18] via-[#001126]/90 to-[#0b3d2c]/60" />
      <div className="absolute inset-0 z-0 bg-[#000B18]/40" />

      {/* ☀️ LIGHT GLOW */}
      <div className="absolute left-1/4 top-1/4 h-[50%] w-[50%] z-0 bg-[radial-gradient(circle_at_center,rgba(255,200,120,0.15),transparent_70%)] blur-3xl rounded-full" />

      {/* 📦 CONTENT */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row px-6 sm:px-10 lg:px-20 xl:px-32">

        {/* LEFT SECTION */}
        <div className="flex flex-col gap-5 sm:gap-6 w-full lg:w-[65%] py-16 sm:py-20 mt-10 md:mt-16">

          {/* TAG */}
          <div
            className="text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 rounded-full w-fit shadow-md border border-[#D4AF37]/30"
            style={{
              background: "linear-gradient(90deg,#f1d27a,#D4AF37)",
              color: "#000B18",
            }}
          >
            ADMISSIONS OPEN FOR 2026 BATCH
          </div>

          {/* HEADINGS */}
          <div className="font-bold leading-tight tracking-tight space-y-1">

            <h1 className="text-[rgba(255,255,255,0.95)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-md">
              Confused After 12th?
            </h1>

            {/* ✅ FIXED (NO CUT) */}
            <h1 className="bg-gradient-to-r from-[#D4AF37] via-[#f1d27a] to-[#D4AF37] bg-clip-text text-transparent 
                           text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[56px]
                           lg:whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-1">
              We’ll Help You Get Into
            </h1>

            <h1 className="bg-gradient-to-r from-[#D4AF37] via-[#f1d27a] to-[#D4AF37] bg-clip-text text-transparent 
                           text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              The Right College.
            </h1>

          </div>

          {/* FEATURES */}
          <ul className="flex flex-wrap text-sm sm:text-base gap-2 sm:gap-4 text-[rgba(255,255,255,0.9)] mt-2 font-medium">
            {[
              "Free Career Guidance",
              "No Donation",
              "Direct College Tie-Ups",
              "Choose the Right Path",
              "Start Your Bright Future",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
                <GoDotFill className="text-[#D4AF37]" />
                {item}
              </li>
            ))}
          </ul>

          {/* STATS */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl bg-[#000B18]/60 border border-white/10 backdrop-blur-md w-fit shadow-2xl">

            {/* SHIELD */}
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-[#f1d27a] text-3xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />
              <div>
                <p className="text-[#f1d27a] font-bold text-xl">100%</p>
                <p className="text-gray-200 text-xs sm:text-sm font-medium">Free Guidance</p>
              </div>
            </div>

            <div className="w-px h-8 sm:h-12 bg-white/20 hidden sm:block" />

            {/* HANDSHAKE */}
            <div className="flex items-center gap-3">
              <FaHandshake className="text-[#f1d27a] text-3xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />
              <div>
                <p className="text-[#f1d27a] font-bold text-xl">Direct</p>
                <p className="text-gray-200 text-xs sm:text-sm font-medium">College Partners</p>
              </div>
            </div>

            <div className="w-px h-8 sm:h-12 bg-white/20 hidden sm:block" />

            {/* USERS */}
            <div className="flex items-center gap-3">
              <FaUserGraduate className="text-[#f1d27a] text-3xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" />
              <div>
                <p className="text-[#f1d27a] font-bold text-xl">500+</p>
                <p className="text-gray-200 text-xs sm:text-sm font-medium">Successful Admissions</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;