import React from "react";

function ProductFeatures() {
  const featureList = [
    {
      title: "Join over 93 Thousand who say - it WORKS!",
      icons:
        "https://trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413",
    },
    {
      title: "Restores your body's natural 24-hour lymphatic cycle",
      icons:
        "https://trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910",
    },
    {
      title:
        "Helps reduce fluid retention and the appearance of puffiness and bloating",
      icons:
        "https://trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413",
    },
    {
      title:
        "Helps fall asleep faster, stay asleep longer and wake up energized",
      icons:
        "https://trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414",
    },
    {
      title:
        "Eliminates joint stiffness, pain, morning creakiness and feel more grounded",
      icons:
        "https://trysculptique.com/cdn/shop/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414",
    },
    {
      title: "Boosts energy, mental clarity and emotional balance",
      icons:
        "https://trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413",
    },
  ];
  
  return (
    <div className="w-full max-w-147 mx-auto px-4 md:px-0">
      {featureList.map((feature, index) => (
        <div
          key={index}
          className="flex flex-row items-center gap-3 md:gap-6 mb-3 md:mb-4"
        >
          {/* Icon - Responsive dimensions */}
          <div className="w-10 h-10 md:w-[52.36px] md:h-[52.36px] shrink-0">
            <img 
              src={feature.icons} 
              alt="" 
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Text - Flexible width with responsive font size */}
          <div className="flex-1">
            <p className="text-sm md:text-base leading-normal text-[#1a202c]">
              {feature.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductFeatures;