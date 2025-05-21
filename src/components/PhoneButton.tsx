// src/components/CallButton.tsx
import React from "react";
import { PiPhone } from "react-icons/pi";

const PhoneButton: React.FC = () => {
  // Hard‑coded phone number (international format, no "+" or dashes)
  const phone = "5511984990470";
  const href = `tel:${phone}`;

  const handleClick = () => {
    // opens the device dialer
    window.open(href, "_self");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex items-center cursor-pointer bg-[#009fe5] hover:bg-[#007ee5] text-white font-bold py-2 px-4 rounded"
    >
      {/* slightly larger, bold icon */}
      Ligar Agora
      <PiPhone className="ml-1 text-xl" />
    </button>
  );
};

export default PhoneButton;
