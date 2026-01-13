import React from "react";

function CheckoutButton() {
  return (
    <div className="flex flex-col items-center w-full px-4">
      {/* Primary Button */}
      <button 
        className="
          w-full max-w-[400px] 
          bg-black hover:bg-gray-900 
          text-white 
          font-[Nunito] font-bold text-[18px] 
          py-4 
          rounded-[5px] 
          transition-colors duration-200 
          shadow-md
          cursor-pointer
        "
      >
        Try Lymphatic Drainage Risk-Free
      </button>
      
      {/* Guarantee Badge */}
      <div className="flex items-center justify-center gap-2 mt-3 opacity-90">
        <img 
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1_1.png?v=1752388395" 
          alt="60-day money-back guarantee icon" 
          className="w-5 h-5 object-contain"
        />
        <span className="text-[15px] font-semibold text-[#1A1A1A] font-[Nunito] font-bold leading-tight">
          60-Day Money-Back Guarantee
        </span>
      </div>
    </div>
  );
}

export default CheckoutButton;