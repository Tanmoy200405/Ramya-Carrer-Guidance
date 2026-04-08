import React from "react";
import image2 from "../assets/image2.png";
import { GoDotFill } from "react-icons/go";
import { FaShieldAlt, FaHandshake, FaUserGraduate } from "react-icons/fa";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center">

      {/* 🌿 BASE BACKGROUND */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(120deg,#04130f_0%,#06251d_40%,#0b3d2c_70%,#0f5132_100%)]" />

      {/* 🖼️ IMAGE */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-[55%] z-0">
        <img
          src={image2}
          alt="Mentor"
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* 🎯 SMOOTH BLENDING */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(
              to right,
              #04130f 0%,
              rgba(4,19,15,0.98) 20%,
              rgba(4,19,15,0.92) 35%,
              rgba(4,19,15,0.75) 50%,
              rgba(4,19,15,0.55) 65%,
              rgba(4,19,15,0.35) 75%,
              rgba(4,19,15,0.2) 85%,
              rgba(4,19,15,0.08) 92%,
              rgba(4,19,15,0.02) 97%,
              transparent 100%
            )
          `,
        }}
      />

      {/* ☀️ LIGHT GLOW */}
      <div className="absolute right-1/3 top-0 h-full w-[50%] z-0 bg-[radial-gradient(circle_at_center,rgba(255,200,120,0.15),transparent_70%)]" />

      {/* 🎯 COLOR MERGE */}
      <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-0" />

      {/* 📦 CONTENT */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row px-6 sm:px-10 lg:px-20 xl:px-32">

        {/* LEFT SECTION */}
        <div className="flex flex-col gap-5 sm:gap-6 w-full lg:w-[55%] py-16 sm:py-20">

          {/* TAG */}
          <div
            className="text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-6 py-2 rounded-full w-fit shadow-md"
            style={{
              background: "linear-gradient(90deg,#f1d27a,#D4AF37)",
              color: "#04130f",
            }}
          >
            ADMISSIONS OPEN FOR 2026 BATCH
          </div>

          {/* HEADINGS */}
          <div className="font-bold leading-tight tracking-tight space-y-1">

            <h1 className="text-[rgba(255,255,255,0.95)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Confused After 12th?
            </h1>

            {/* ✅ FIXED (NO CUT) */}
            <h1 className="bg-gradient-to-r from-[#D4AF37] via-[#f1d27a] to-[#D4AF37] bg-clip-text text-transparent 
                           text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[56px]
                           lg:whitespace-nowrap">
              We’ll Help You Get Into
            </h1>

            <h1 className="bg-gradient-to-r from-[#D4AF37] via-[#f1d27a] to-[#D4AF37] bg-clip-text text-transparent 
                           text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              The Right College.
            </h1>

          </div>

          {/* FEATURES */}
          <ul className="flex flex-wrap text-sm sm:text-base gap-2 sm:gap-3 text-[rgba(255,255,255,0.85)]">
            {[
              "Free Career Guidance",
              "No Donation",
              "Direct College Tie-Ups",
              "Choose the Right Path",
              "Start Your Bright Future",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <GoDotFill className="text-[var(--accent-gold)]" />
                {item}
              </li>
            ))}
          </ul>

          {/* STATS */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 sm:mt-6 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm w-fit">

            {/* SHIELD */}
            <div className="flex items-center gap-3">
              <FaShieldAlt className="text-[var(--accent-gold)] text-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]" />
              <div>
                <p className="text-[var(--accent-gold)] font-bold text-lg">100%</p>
                <p className="text-gray-300 text-xs sm:text-sm">Free Guidance</p>
              </div>
            </div>

            <div className="w-px h-8 sm:h-10 bg-white/20 hidden sm:block" />

            {/* HANDSHAKE */}
            <div className="flex items-center gap-3">
              <FaHandshake className="text-[var(--accent-gold)] text-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]" />
              <div>
                <p className="text-[var(--accent-gold)] font-bold text-lg">Direct</p>
                <p className="text-gray-300 text-xs sm:text-sm">College Partners</p>
              </div>
            </div>

            <div className="w-px h-8 sm:h-10 bg-white/20 hidden sm:block" />

            {/* USERS */}
            <div className="flex items-center gap-3">
              <FaUserGraduate className="text-[var(--accent-gold)] text-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]" />
              <div>
                <p className="text-[var(--accent-gold)] font-bold text-lg">500+</p>
                <p className="text-gray-300 text-xs sm:text-sm">Successful Admissions</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;