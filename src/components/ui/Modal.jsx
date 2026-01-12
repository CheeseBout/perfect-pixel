import React from "react";

function Modal({ isOpen, onClose }) {
  const profits = [
    "Made & produced in the USA",
    "100% Natural Ingredients",
    "60-Day Money-Back Guarantee",
    "Free Shipping",
  ];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-full max-w-[450px] my-auto relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Styled to match pink/red outline in image */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-5.5 h-5.5 flex items-center justify-center rounded-full border border-[#f06b7e] text-[#f06b7e] z-10 bg-white cursor-pointer"
          aria-label="Close modal"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-4 md:p-4">
          {/* Header Title */}
          <h2 className="font-[Lora] text-[28px] text-[#0A2540] text-center mb-4 leading-tight">
            Nutritional Information
          </h2>

          {/* Supplement Facts Image */}
          <div className="shadow-sm rounded-lg overflow-hidden">
            <img
              src="https://trysculptique.com/cdn/shop/files/ingredients-min.png?v=1758713223"
              alt="Supplement Facts"
              className="w-full h-auto block"
            />
          </div>

          {/* CTA Button */}
          <button className="w-full bg-black text-white font-[sans-serif] font-normal md:text-[16px] rounded-[5px] hover:bg-gray-800 transition-colors cursor-pointer shadow-md p-5 my-4">
            Try Lymphatic Drainage Risk-Free
          </button>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 md:gap-x-6">
            {profits.map((profit, index) => (
              <div key={index} className="flex items-center gap-2">
                {/* Custom Pink Check Icon matching the design */}
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-[#f06b7e]"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M6 10L8.5 12.5L14 7"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-[Nunito] text-[12px] md:text-[12px] text-[#333333] leading-tight whitespace-nowrap font-normal">
                  {profit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
