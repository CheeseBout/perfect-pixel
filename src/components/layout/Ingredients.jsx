import React from "react";

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

  return (
    <div>
      <h2>
        The 8-Ingredient System That Restores What Hormones Once Maintained
      </h2>
      <p>
        Sculptique is the only formula that addresses ALL 6 mechanisms of
        lymphatic dysfunction simultaneously—not with symbolic doses, but with
        therapeutic amounts based on clinical research. Not just moving fluid
        temporarily. Not just reducing inflammation. Complete restoration.
      </p>
      <div>
        {ingredientsList.map((ingredient, index) => (
          <div key={index}>
            <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419" alt="tick" />
            <span>{ingredient.effect}</span>
            <img src={ingredient.image} alt="ingredient image" />
            <h5>{ingredient.amount}</h5>
            <p>{ingredient.description}</p>
            <p>{ingredient.study}</p>
          </div>
        ))}
      </div>
      <div>
        <img src="images/ingredient.webp" alt="ingredients" />
      </div>
    </div>
  );
}

export default Ingredients;
