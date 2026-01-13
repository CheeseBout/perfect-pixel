import React, { useState } from "react";

function Ingredients() {
  const ingredientsList = [
    {
      effect: "Reactivate Lymphatic Pumps",
      image:
        "https://trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909",
      amount: "Cleavers Extract (100mg)",
      description:
        'Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance.',
      study: "[Study: Enhanced NK cell activity in immunosuppressed models]",
    },
    {
      effect: "Flush Excess Fluid",
      image:
        "https://trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908",
      amount: "Dandelion Extract (250mg)",
      description:
        "Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001).",
      study: "[Study: First human pilot study on diuretic effects]",
    },
    {
      effect: "Break Down Protein Clogs",
      image:
        "https://trysculptique.com/cdn/shop/files/image_2.png?v=1760939909",
      amount: "Bromelain Powder (100mg)",
      description:
        'Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo.',
      study: "[Study: As effective as prescription NSAIDs for inflammation]",
    },
    {
      effect: "Strengthen Vessel Walls",
      image:
        "https://trysculptique.com/cdn/shop/files/image_3.png?v=1760939909",
      amount: "Rutin (100mg)",
      description:
        "Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients.",
      study: "[Study: Systematic review of 1,643 participants]",
    },
    {
      effect: "Reduce Inflammation",
      image:
        "https://trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909",
      amount: "Burdock Root Powder (200mg)",
      description:
        " Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p<0.001). Also supports hormonal balance.",
      study: "[Study: 42-day trial in osteoarthritis patients]",
    },
    {
      effect: "Boost Immune Clearance",
      image:
        "https://trysculptique.com/cdn/shop/files/image_4.png?v=1760939909",
      amount: "Echinacea Purpurea Extract (500mg)",
      description:
        "Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections.",
      study: "[Study: Increased NK cell cytotoxic activity]",
    },
    {
      effect: "Support Metabolism",
      image:
        "https://trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909",
      amount: "Kelp Extract (30mg)",
      description:
        "Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials.",
      study: "[Study: Dose-dependent increase in TSH levels]",
    },
    {
      effect: "Antioxidant Protection",
      image:
        "https://trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910",
      amount: "Lemon Powder (50mg)",
      description:
        "Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p<0.001). Supports circulation and metabolic health.",
      study: "[Study: Triple-masked trial in 90 participants]",
    },
  ];

  const [openCards, setOpenCards] = useState([0]);

  const toggleCard = (index) => {
    setOpenCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="lg:py-16 lg:px-4 font-[Nunito] bg-(--color-bg) w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-310 mx-auto">
        <div className="md:w-200 mx-auto">
          <h2 className="font-[Lora] text-[28px] md:text-[32px] text-center text-black my-4 pt-8 leading-tight">
            <span className="text-[rgb(3,152,105)]">
              The 8-Ingredient System
            </span>{" "}
            That Restores What Hormones Once Maintained
          </h2>
          <p className="w-full max-w-[800px] mx-auto my-4 text-center font-['Nunito'] text-[18px] font-normal leading-[23.4px] tracking-[0.6px] text-black">
            Sculptique is the only formula that addresses ALL 6 mechanisms of
            lymphatic dysfunction simultaneously—not with symbolic doses, but
            with therapeutic amounts based on clinical research.
            <br /> Not just moving fluid temporarily. Not just reducing
            inflammation. <strong>Complete restoration.</strong>
          </p>
        </div>

        <div className="border-2 border-black rounded-xl overflow-hidden bg-black grid gap-px grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 mx-4 shadow-sm">
          {ingredientsList.map((ingredient, index) => (
            <div
              key={index}
              className="bg-white px-4 pt-4 md:p-5 flex flex-col h-full transition-all duration-300"
            >
              {/* Top Indicator */}
              <div className="flex items-center gap-1.5 md:mb-5 shrink-0">
                <img
                  src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419"
                  alt="tick"
                  className="w-3 h-3 object-contain"
                />
                <span className="font-[Nunito] text-[16px] text-[#388E3C] tracking-wide">
                  {ingredient.effect}
                </span>
              </div>

              {/* Header Row/Col Wrapper */}
              {/* Mobile: Row (Image Left, Amount Right) */}
              {/* Desktop: Column (Image Top, Amount Bottom) */}
              <div className="flex flex-row md:flex-col items-center w-full gap-2 md:gap-0">
                {/* Image Area */}
                <div className="md:mb-6 md:h-20 flex items-center justify-center shrink-0">
                  <img
                    src={ingredient.image}
                    alt="ingredient"
                    className="w-14 md:w-20 h-auto object-contain"
                  />
                </div>

                {/* Amount Button Area */}
                <div className="w-full flex-1 md:flex-none">
                  <button
                    onClick={() => toggleCard(index)}
                    className="w-full flex items-center justify-between py-1 cursor-pointer group"
                  >
                    <h5 className="text-[14px] md:text-[16px] font-[Trirong] font-semibold text-black text-left pr-1">
                      {ingredient.amount}
                    </h5>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className={`w-3.5 h-3.5 shrink-0 text-black transition-transform duration-300 ${
                        openCards.includes(index) ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Accordion Content Area */}
              {/* MOVED OUTSIDE the flex row above. This ensures it takes full width on mobile. */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openCards.includes(index)
                    ? "max-h-125 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-left font-[Nunito] lg:text-[14px]">
                  <p className="text-[#444444]">{ingredient.description}</p>
                  <p className="text-[#666666]">{ingredient.study}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 pb-10">
          <img
            src="images/ingredient.webp"
            alt="ingredients"
            className="w-[90%] md:w-[47%] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
