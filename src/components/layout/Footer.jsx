import React from 'react'
import CheckoutButton from '../common/CheckoutButton'

function Footer() {
  return (
    <div className="bg-[var(--color-bg)] py-14">
      <div className="w-[var(--page-width)] mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Column */}
        <div className="flex-1 flex flex-col items-start">
          {/* Trustpilot Widget */}
          <div className="mb-5">
            <img 
              src="icons/footer-rating.webp" 
              alt="footer rating" 
              className="h-5"
            />
          </div>

          {/* Main Headline */}
          <h2 className="text-[#222222] font-[Lora] text-[32px]">
            Stop Masking Symptoms.<br />Start Restoring Root Cause.
          </h2>

          {/* Body Paragraphs */}
          <div className="space-y-5 mb-10">
            <p className="text-[18px] leading-[1.6] text-[#444444]">
              You deserve to feel like yourself again. To wake up without puffiness. To see your ankles. To look in the mirror and recognize the vibrant woman staring back. To have energy for the people you love.
            </p>
            <p className="text-[18px] leading-[1.6] text-[#444444]">
              You deserve a solution that actually works. Not temporary relief. Not symptom masking. Complete lymphatic restoration.
            </p>
          </div>

          {/* CTA Button */}
          <CheckoutButton />
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <img 
            src="images/footer-examples.webp" 
            alt="footer examples" 
            className="w-[98%] h-auto rounded-[10px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer