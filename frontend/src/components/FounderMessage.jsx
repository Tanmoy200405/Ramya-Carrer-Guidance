import React from "react";
import { RxCross2 } from "react-icons/rx";

const FounderMessage = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideIn">

      <div className="bg-white rounded-2xl shadow-xl p-5 w-[90vw] sm:w-[320px] relative border border-gray-200">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black"
        >
          <RxCross2 />
        </button>

        {/* CONTENT */}
        <h2 className="text-lg font-bold text-[var(--primary-green)] mb-2">
          Message from Founder
        </h2>

        <p className="text-sm text-gray-600 leading-relaxed">
          "Choosing the right career path can be confusing. Our mission is to
          guide every student towards the best opportunities with clarity and
          confidence."
        </p>

        <p className="mt-3 text-sm font-semibold text-[var(--primary-green)]">
          — Founder
        </p>

        {/* CTA */}
        <button className="mt-4 w-full bg-[var(--primary-green)] text-white py-2 rounded-lg text-sm hover:bg-[var(--secondary-green)] transition">
          Get Free Guidance
        </button>

      </div>
    </div>
  );
};

export default FounderMessage;