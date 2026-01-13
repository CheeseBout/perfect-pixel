import React from "react";
import CheckoutButton from "../common/CheckoutButton";

function Footer() {
  return (
    <div className="bg-(--color-bg) py-8 md:py-12 lg:py-14 px-4 md:px-6">
      <div className="max-w-(--page-width) mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-8 lg:gap-10">
        {/* Left Column */}
        <div className="w-full lg:flex-1 flex flex-col md:items-start order-1">
          {/* Trustpilot Widget */}
          <div className="mb-4 md:mb-5">
            <img
              src="icons/footer-rating.webp"
              alt="footer rating"
              className="h-4 md:h-5"
            />
          </div>

          {/* Main Headline */}
          <h2 className="text-black font-[Lora] font-normal text-[24px] md:text-[28px] lg:text-[32px] leading-[31.2px] tracking-[0.6px] text-left md:text-center lg:text-left my-4 md:mb-6 ">
            Stop Masking Symptoms.
            <br />
            Start Restoring Root Cause.
          </h2>

          {/* Body Paragraphs */}
          <div className="text-left">
            <p className="font-['Nunito'] text-[18px] leading-[23.4px] tracking-[0.6px] text-black my-[12px]">
              You deserve to feel like yourself again. To wake up without
              puffiness. To see your ankles. To look in the mirror and recognize
              the vibrant woman staring back. To have energy for the people you
              love.
            </p>
            <p className="font-['Nunito'] text-[18px] leading-[23.4px] tracking-[0.6px] text-black my-[12px]">
              You deserve a solution that actually works. Not temporary relief.
              Not symptom masking. Complete lymphatic restoration.
            </p>
          </div>

          {/* CTA Button - Only visible on desktop */}
          <div className="w-full hidden md:block">
            <CheckoutButton />
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:flex-1 order-2">
          <img
            src="images/footer-examples.webp"
            alt="footer examples"
            className="w-full max-w-72.5 md:max-w-100 lg:max-w-none h-auto rounded-[10px] mx-auto object-cover"
          />
        </div>

      </div>
        {/* CTA Button - Mobile & Tablet only */}
        <div className="block md:hidden order-3 w-full mt-8">
          <CheckoutButton />
        </div>
    </div>
  );
}

export default Footer;
