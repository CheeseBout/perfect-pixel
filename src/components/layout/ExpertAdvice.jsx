import React from "react";
import CheckoutButton from "../common/CheckoutButton";

function ExpertAdvice() {
  return (
    <div className="lg:w-[85%] lg:py-14 mx-auto">
      <div className="flex bg-[rgba(230,230,230,0.9)]">
        <div className="flex-1
            lg:p-8
            "
        >
          <p
            className="font-[Nunito] text-[rgb(115,115,115)]
          lg:text-[16px]
        "
          >
            July 4th, 2025
          </p>
          <h2
            className="font-[Lora]
          lg:text-[32px]
          lg:my-4
        "
          >
            Expert Advice from Dr. Emily Chen of a Premier New York Skin Clinic
          </h2>
          <p
            className="font-[Nunito]
          lg:my-3
          lg:text-[18px]
        "
          >
            "Your nutrition plays a powerful role in your appearance. If your
            body is missing key vitamins and nutrients, it can't process fat and
            upkeep healthy connective tissue, which is why unprocessed fat flows
            up and starts pushing up against your skin, forming bumps you know
            as cellulite.
          </p>
          <p
            className="font-[Nunito]
          lg:my-3
          lg:text-[18px]
        "
          >
            SmoothSkin by Sculptique™ contains ingredients that are
            scientifically proven to enhance microcirculation, boost lymphatic
            drainage, and reduce inflammation, which restores your tissue and
            breaks down the fat cells in your skin."
          </p>
            <CheckoutButton />
        </div>
        <div className="flex-1">
          <img
            src="https://trysculptique.com/cdn/shop/files/greendeskt-min.png?v=1758713213"
            alt="expert"
            className="w-155 h-146.25 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ExpertAdvice;