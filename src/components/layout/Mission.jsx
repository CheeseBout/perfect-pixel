import React from "react";

function Mission() {
  return (
    <div
      className="flex w-9/10 mx-auto
      lg:py-14
    "
    >
      <div
        className="flex-[1.3] flex flex-col
        lg:px-8
      "
      >
        <h2
          className="
          font-[Lora] font-normal
          lg:text-[32px]
        "
        >
          We're On A Mission To Help 100,000,000 Women Visibly, Naturally Get
          Rid Of Bloating…And Feel Like Themselves Again
        </h2>
        <p
          className="font-[Nunito]
        lg:my-3
        lg:text-[18px]
        "
        >
          Here's where we're at right now:
        </p>
        <img src="images/mission/mission-desk-2.webp" alt="mission 2" />
      </div>
      <div className="flex-1">
        <img src="images/mission/mission-desk-1.webp" alt="mission 1" />
      </div>
    </div>
  );
}

export default Mission;
