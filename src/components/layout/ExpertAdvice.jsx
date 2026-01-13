import React from "react";
import CheckoutButton from "../common/CheckoutButton";

function ExpertAdvice() {
  return (
    <div className="md:w-[85%] md:py-14 mx-auto mt-10 ">
      <div className="flex flex-col bg-[rgba(230,230,230,0.9)] lg:flex-row pb-8">
        
        {/* Text Section */}
        <div className="flex-1 order-2 md:order-1 p-[15px] md:p-8 bg-white lg:bg-transparent mx-3 rounded-b-2xl">
          <p className="font-['Montserrat'] text-[#737373] text-[15px] leading-[27px] tracking-[0.6px] mb-2">
            July 4th, 2025
          </p>
          
          <h2 className="font-['Lora'] text-[24px] md:text-[32px] lg:my-4 mb-4 leading-tight text-black">
            Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic
          </h2>
          
          {/* Paragraph 1 */}
          <p className="font-[Nunito] text-[18px] leading-[27px] tracking-[0.6px] text-black/75 mb-4 lg:mb-6 lg:text-[18px]">
            "Your nutrition plays a powerful role in your appearance. If your
            body is missing key vitamins and nutrients, it can't process fat and
            upkeep healthy connective tissue, which is why unprocessed fat flows
            up and starts pushing up against your skin, forming bumps you know
            as cellulite.
          </p>
          
          {/* Paragraph 2 */}
          <p className="font-[Nunito] text-[18px] leading-[27px] tracking-[0.6px] text-black/75 mb-6 lg:text-[18px]">
            SmoothSkin by Sculptique™ contains ingredients that are
            scientifically proven to enhance microcirculation, boost lymphatic
            drainage, and reduce inflammation, which restores your tissue and
            breaks down the fat cells in your skin."
          </p>
          
          <CheckoutButton />
        </div>

        {/* Image Section */}
        <div className="flex-1 order-1 lg:order-2 mx-auto w-full">
          <img
            src="https://trysculptique.com/cdn/shop/files/greendeskt-min.png?v=1758713213"
            alt="expert"
            className="object-cover w-[300px] mx-auto md:w-full md:h-[240px] md:w-full md:h-full lg:h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default ExpertAdvice;