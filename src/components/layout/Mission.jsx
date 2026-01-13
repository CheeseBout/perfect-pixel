import React from "react";

function Mission() {
  return (
    <div className="flex flex-col mx-auto md:w-9/10 md:flex-row md:py-14">
      <div className="flex-[1.3] flex flex-col md:px-8">
        <h2 className="w-[258px] mx-auto md:w-full md:text-left font-['Lora'] font-normal text-center text-[24px] md:text-[32px] leading-[31.2px] tracking-[0.6px] my-4 break-words text-black">
          We're On A Mission To Help 100,000,000 Women Visibly, Naturally Get
          Rid Of Bloating…And Feel Like Themselves Again
        </h2>
        <p className="w-[258px] mx-auto md:w-full md:text-left font-[Nunito] my-3 text-[18px] leading-[23.4px] tracking-[0.6px] text-center text-black">
          Here's where we're at right now:
        </p>

        {/* 1. MOBILE ONLY: Mission 1 moves here */}
        <img
          src="images/mission/mission-desk-1.webp"
          alt="mission 1"
          className="block md:hidden mb-4 w-[258px] mx-auto md:w-full"
        />

        <img
          src="images/mission/mission-desk-2.webp"
          alt="mission 2"
          className="w-[258px] mx-auto md:w-full"
        />
      </div>

      <div className="flex-1">
        {/* 2. DESKTOP ONLY: Mission 1 stays here */}
        <img
          src="images/mission/mission-desk-1.webp"
          alt="mission 1"
          className="hidden md:block w-[258px] mx-auto md:w-full"
        />
      </div>
    </div>
  );
}

export default Mission;
