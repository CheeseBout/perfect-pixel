import React from "react";

function Carousel() {
  const banner = [
    {
      id: 1,
      url: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
      alt: "Vogue",
    },
    {
      id: 2,
      url: "https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678",
      alt: "Grazia",
    },
    {
      id: 3,
      url: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
      alt: "Vogue",
    },
    {
      id: 4,
      url: "https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678",
      alt: "Women's Health",
    },
  ];

  // Increased duplication to 6x to ensure it fills wide screens without gaps
  const duplicatedBanner = [
    ...banner,
    ...banner,
    ...banner,
    ...banner,
    ...banner,
    ...banner,
  ];

  return (
    <div className="bg-[#F4F1E8] py-5 overflow-hidden w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Header Container - Kept Centered */}
      <div className="max-w-300 mx-auto px-4">
        <h2 className="font-[Georgia] text-[20px] text-center text-[#111111] mb-4">
          As Seen In
        </h2>
      </div>

      {/* Carousel Track - Full Width */}
      {/* We added w-max to ensure the div stretches to fit all children exactly */}
      <div className="relative w-full">
        <div className="flex w-max animate-scroll">
          {duplicatedBanner.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="shrink-0 flex items-center justify-center px-10 md:px-16"
            >
              <img
                src={item.url}
                alt={item.alt}
                className="h-7 w-auto object-contain"
                style={{
                  filter: "brightness(0)",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* We have 6 sets. To loop seamlessly, we move the width 
               of exactly 1 set (100% / 6 = 16.666667%) 
            */
            transform: translateX(-16.666667%);
          }
        }

        .animate-scroll {
          /* Increased time to 20s because the track is now much longer (6 sets).
             This keeps the visual speed similar to before.
          */
          animation: scroll 20s linear infinite;
        }

      `}</style>
    </div>
  );
}

export default Carousel;