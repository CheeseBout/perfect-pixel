import React from "react";

function Carousel() {
  const banner = [
    {
      id: 1,
      url: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
      alt: "Vogue"
    },
    {
      id: 2,
      url: "https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678",
      alt: "Grazia"
    },
    {
      id: 3,
      url: "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
      alt: "Vogue"
    },
    {
      id: 4,
      url: "https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678",
      alt: "Women's Health"
    },
  ];

  // Duplicate the banner array for seamless infinite scroll
  const duplicatedBanner = [...banner, ...banner, ...banner];

  return (
    <div className="bg-[#F4F1E8] py-5 overflow-hidden w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <h2 className="font-[Georgia] text-[20px] text-center text-[#111111] mb-5">
          As Seen In
        </h2>

        {/* Carousel Track */}
        <div className="relative">
          <div className="flex animate-scroll">
            {duplicatedBanner.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-10"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="h-[28px] w-auto object-contain"
                  style={{
                    filter: "brightness(0)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Carousel;