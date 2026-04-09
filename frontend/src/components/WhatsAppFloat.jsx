import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = ({ showPopup }) => {
  const phoneNumber = "917044187556";
  const message = "Hi, I need guidance regarding college admissions.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className={`fixed right-6 z-50 transition-all duration-300
      ${showPopup ? "bottom-28" : "bottom-6"}`}
    >
      <button
        onClick={handleClick}
        className="flex items-center justify-center bg-green-500 text-white 
                   h-14 w-14 rounded-full shadow-lg hover:bg-green-600 
                   transition duration-300 animate-pulse"
      >
        <FaWhatsapp className="text-2xl" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
