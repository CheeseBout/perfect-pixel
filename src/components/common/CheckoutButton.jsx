import React from "react";

function CheckoutButton() {
  return (
    <div className="flex flex-col items-center">
      {/* Primary Button */}
      <button className="bg-black text-white font-[Nunito] text-[18px] leading-[1.376] px-20 py-[18px] rounded-[5px] hover:bg-gray-900 transition-colors cursor-pointer">
        Try Lymphatic Drainage Risk-Free
      </button>
      
      {/* Guarantee Badge */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <img 
          src="icons/money-back.webp" 
          alt="money-back guarantee badge" 
          className="w-6 h-6"
        />
        <span className="text-[16px] text-[#1A1A1A] font-[Nunito]">
          60-Day Money-Back Guarantee
        </span>
      </div>
    </div>
  );
}

export default CheckoutButton;