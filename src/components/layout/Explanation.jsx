import React from "react";
import CheckoutButton from "../common/CheckoutButton";

function Explanation() {
  const examples = [
    {
      image:
        "https://trysculptique.com/cdn/shop/files/Untitled_design_3.png?v=1760689800",
      description:
        "Your stomach is flat in the morning, but by evening you look six months pregnant.",
    },
    {
      image:
        "https://trysculptique.com/cdn/shop/files/Untitled_design_3_1.png?v=1760689799",
      description:
        'Your ankles disappear into "kankles" by the end of the day.',
    },
    {
      image:
        "https://trysculptique.com/cdn/shop/files/Untitled_design_4.png?v=1760689801",
      description:
        "That dimpled, cottage cheese texture on your thighs won't go away no matter what you try.",
    },
    {
      image:
        "https://trysculptique.com/cdn/shop/files/Untitled_design_4_1.png?v=1760689799",
      description:
        "You feel foggy and exhausted even after a full night's sleep.",
    },
    {
      image:
        "https://trysculptique.com/cdn/shop/files/Untitled_design_3_2.png?v=1760689799",
      description: "You wake up stiff and achy, like your body aged overnight.",
    },
  ];

  const chartTicks = [
    { description: "Waste gets drained away" },
    { description: "Fluid stays balanced." },
    { description: "Your body feels light and energized." },
  ];

  const chartCross = [
    { description: "Vessel pumping weakens." },
    { description: "One-way valves fail." },
    { description: "Protein clogs form." },
    { description: "Vessel walls become leaky." },
  ];

  const diagramCross = [
    { description: "That's why you're bloated." },
    { description: "That's why your ankles swell." },
    { description: "That's why you see cellulite." },
    { description: "That's why you feel exhausted and foggy." },
  ];

  const nothingWorked = [
    {
      image: "https://trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360",
      description:
        "You cut out gluten, dairy, sugar. You ate clean for months.",
      reason:
        "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.",
    },
    {
      image: "https://trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359",
      description: "You tried viral lymphatic drops from TikTok.",
      reason:
        "They’re just pricey water with trace herbs. The “active ingredients” are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine.",
    },
    {
      image: "https://trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359",
      description: "You got lymphatic massage or bought compression socks.",
      reason:
        "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own.",
    },
  ];

  return (
    <div>
      {/* Question */}
      <div className="flex flex-col items-center max-w-[800px] mx-auto text-center my-4 md:mt-18">
        <h2 className="font-[Lora] font-normal mx-4 text-[24px] md:text-[32px] leading-[31.2px] md:leading-[41.6px] tracking-[0.6px] text-black wrap-break-word">
          Why Your{" "}
          <span className="text-[#039869]">
            Bloating, Brain Fog & Swollen Legs
          </span>{" "}
          Are Actually Connected
        </h2>
        <p className="w-[90%] md:w-[800px] md:mx-auto my-4 text-center font-['Nunito'] text-[16px] md:text-[18px] font-normal leading-[23.4px] tracking-[0.6px] text-black">
          If you're experiencing more than one of these symptoms, your body is
          trying to tell you something:
        </p>
      </div>

      {/* Examples */}
      <div className="bg-white md:pt-12 px-2 pb-8">
        <div className="max-w-310 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
            {examples.map((example, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden bg-[rgba(0,0,0,0.05)] flex md:flex-col items-center md:items-start"
              >
                {/* Image Section */}
                <div className="w-[145px] h-[150px] shrink-0 md:w-full md:h-auto md:aspect-auto">
                  <img
                    src={example.image}
                    alt={`Example ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Section */}
                <div className="w-[145px] p-2 flex items-center justify-center md:w-full md:block md:p-4 md:pb-10">
                  <p className="font-[Nunito] text-[16px] md:text-[16px] text-[#333333] text-center leading-[20.8px]">
                    {example.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        {/* Desktop Only */}
        <img
          src="https://trysculptique.com/cdn/shop/files/Group_7207.png?v=1760690771"
          alt="no one knows"
          className="hidden md:block md:w-[80%]"
        />

        {/* Mobile Only */}
        <img
          src="https://trysculptique.com/cdn/shop/files/Frame_1000003583.png?v=1760690769"
          alt="no one knows"
          className="block md:hidden w-[90%] mx-auto"
        />

        <img
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"
          alt="arrow"
          className="mt-4 w-[10%] md:w-[48px]"
        />

        <h2 className="w-[99%] mx-auto font-[Lora] font-normal text-[24px] md:text-[32px] py-4 text-center">
          The Connection{" "}
          <span className="text-[#039869]">You've Been Missing</span>
        </h2>

        {/* Desktop Only */}
        <img
          src="https://trysculptique.com/cdn/shop/files/Frame_1000003590.png?v=1760690771"
          alt="missing"
          className="hidden md:block md:w-[68.7%]"
        />

        {/* Mobile Only */}
        <img
          src="https://trysculptique.com/cdn/shop/files/Frame_1000003590_1.png?v=1760690770"
          alt="missing"
          className="block md:hidden w-[90%] mx-auto"
        />

        <img
          src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003589.png?v=1760690549"
          alt="arrow"
          className="md:w-[48px] w-[10%] md:mt-6"
        />
        <h2 className="w-[290px] md:w-full mx-auto font-['Lora'] text-[24px] md:text-[32px] font-normal text-center my-4 leading-[31.2px] tracking-[0.6px] break-words text-black">
          Your <span className="text-[#039869]">Hidden</span> Drainage System
        </h2>

        {/* Chart */}
        <div className="px-4 md:px-0 md:mt-8">
          <div className="flex flex-col-reverse md:flex-row font-[Nunito] gap-8 md:gap-25 justify-center items-center md:items-start">
            <div className="w-full md:w-142.5 md:px-2">
              <p className="md:text-[18px]">
                Your lymphatic system is your body's internal cleaning crew—a
                network of vessels that processes
                <strong>
                  3-4 liters of cellular waste and excess fluid every single
                  day.
                </strong>
              </p>
              <p className="my-1">
                When it's working properly, you don't even know it exists.
              </p>
              <ul>
                {chartTicks.map((tick, index) => (
                  <li
                    key={index}
                    className="flex items-center text-[#039869] my-2"
                  >
                    <img
                      src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"
                      alt="tick"
                      className="w-5 h-auto mr-2 md:mr-3"
                    />
                    <span className="font-semibold text-[16px] md:text-[18px]">
                      {tick.description}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-[Nunito] text-[16px] md:text-[18px] p-4 my-4 md:my-6 bg-[#ffe3e2] rounded-lg">
                But after age 35, declining estrogen hijacks this system's
                ability to function.
              </p>
              <ul>
                {chartCross.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-[rgb(166,0,3)] my-2"
                  >
                    <img
                      src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                      alt="cross"
                      className="w-5 h-auto mr-2 md:mr-3"
                    />
                    <span className="font-semibold text-[16px] md:text-[18px]">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-[Nunito] md:text-[18px] my-2">
                Instead of processing and removing waste, it backs up in your
                tissues.
              </p>
            </div>
            <div>
              <img
                src="https://trysculptique.com/cdn/shop/files/Frame_1484580366_1.png?v=1760701546"
                alt="chart"
                className="w-142.5"
              />
            </div>
          </div>

          {/* Diagram */}
          <div className="">
            <div className="flex flex-col md:flex-row md:py-14 gap-8 md:gap-25 items-center md:items-start">
              <div className="w-full md:w-auto flex justify-center">
                <img
                  src="https://trysculptique.com/cdn/shop/files/ChatGPT_Image_Oct_10_2025_at_03_26_38_PM_2.png?v=1760702096"
                  alt="diagram"
                  className="w-full max-w-[350px] md:w-142.5 md:max-w-none h-auto"
                />
              </div>

              <div className="font-[Nunito] w-full md:w-142.5 md:px-2">
                <strong className="block mb-2 md:my-2 md:text-[18px]">
                  And it accumulates. Day after day. Week after week.
                </strong>
                <p className="md:text-[18px]">
                  That gallon of fluid your body should be draining every 24
                  hours? It's pooling in your stomach, your legs, your
                  face—anywhere gravity and tissue structure allow it to settle.
                </p>

                <div className="bg-[#ffe3e2] p-4 my-4 md:my-6 md:px-4 md:py-2 rounded-lg inline-block">
                  <p className="w-[258px] md:w-full font-['Nunito'] text-[16px] leading-[20.8px] tracking-[0.5px] text-black  my-2">
                    The metabolic waste your cells produce overnight? It's still
                    sitting there at noon. At dinner. While you're trying to
                    fall asleep.
                  </p>
                  <ul>
                    {diagramCross.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-[rgb(166,0,3)] my-2"
                      >
                        <img
                          src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                          alt="cross"
                          className="w-5 h-auto mr-2 md:mr-3"
                        />
                        <span className="font-semibold text-[16px] md:text-[18px]">
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <strong className="text-[16px] leading-[20.8px] tracking-[0.5px] my-2 text-black font-bold">
                  Your cells are literally sitting in their own waste—and your
                  body can't flush it out.
                </strong>
                <p className="md:text-[18px] my-2">
                  The longer this goes on, the worse it gets. More congestion.
                  More inflammation. More pressure on an already compromised
                  system.
                </p>
              </div>
            </div>
          </div>

          {/* Nothing Worked */}
          <div className="bg-(--color-bg) w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
            <h2 className="w-[290px] md:w-full mx-auto font-['Lora'] font-normal text-[24px] md:text-[32px] text-center my-4 leading-[31.2px] tracking-[0.6px] break-words text-black md:mb-8">
              Why Nothing Has <span className="text-[#039869]">Worked</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 max-w-310 mx-auto px-6">
              {nothingWorked.map((item, index) => (
                <div key={index} className="flex flex-col bg-white rounded-lg">
                  {/* Image */}
                  <div className="mb-4">
                    <img
                      src={item.image}
                      alt={`Failed method ${index + 1}`}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>

                  {/* Description */}
                  <h4 className="font-[Nunito] text-[20px] font-semibold text-[#111111] mb-3 leading-tight text-center md:px-8">
                    {item.description}
                  </h4>

                  {/* Why it failed label */}
                  <div className="bg-[#ffe3e2] m-4 flex-1 flex flex-col font-bold px-5 ">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="font-[Nunito] text-[16px] pt-2">
                        Why it failed
                      </span>
                      <img
                        src="https://trysculptique.com/cdn/shop/files/Vector_7.png?v=1760702839"
                        alt="cross"
                        className="w-4 h-4"
                      />
                    </div>

                    {/* Reason */}
                    <p className="font-[Nunito] font-bold text-[16px] text-[#333333] leading-relaxed text-center ">
                      {item.reason}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Missing Piece */}
          <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-(--color-bg) py-6 md:pb-17.5 md:mb-8.75 ">
            {/* Desktop Only */}
            <img
              src="https://trysculptique.com/cdn/shop/files/Group_7207_1.png?v=1760694176"
              alt="missing piece"
              className="hidden md:block md:w-[920px] mx-auto"
            />
            {/* Mobile Only */}
            <img
              src="https://trysculptique.com/cdn/shop/files/Frame_1000003583_1.png?v=1760694176"
              alt="missing piece"
              className="block md:hidden w-[85%] mx-auto"
            />
            <div className="w-[96%] mx-auto my-4 md:mt-5">
              <CheckoutButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explanation;
